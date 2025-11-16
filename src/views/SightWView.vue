<template>
  <div class="report-page">
    <h2 class="report-title">동물 목격 신고서</h2>

    <!-- 상단 테이블 -->
    <table class="report-table" border="1">
      <tbody>
        <tr>
          <td class="report-table-td">제목</td>
          <td class="report-table-td-w">
            <input type="text" v-model="form.title" :class="{ 'input-error': isSubmitted && !form.title }" />
          </td>
          <td class="report-table-td">연락처</td>
          <td class="report-table-td-w">
            <!-- <input v-model="phoneno" type="text" placeholder="연락처" /> -->
            <div class="radio-group">
              <label>
                <input type="radio" name="contactPublic" value="public" v-model="form.contactPublic"/>
                연락처 공개
              </label>
              <label>
                <input type="radio" name="contactPublic" value="private" v-model="form.contactPublic"/>
                연락처 비공개
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 목격 상세 테이블 -->
    <table class="report-table" border="1">
      <tbody>
        <tr>
          <td class="report-table-td">동물 사진</td>
          <td class="report-table-td-w">
            <input
              type="file"
              multiple
              accept="image/*"
              @change="onAnimalFileChange"
            />
          </td>
          <td class="report-table-td">장소 사진</td>
          <td class="report-table-td-w">
            <input
              type="file"
              multiple
              accept="image/*"
              @change="onPlaceFileChange"
            />
          </td>
        </tr>
        <tr>
          <td class="report-table-td">목격 위치</td>
          <td class="report-table-td-w">
            <input type="text" placeholder="목격 위치" v-model="form.location" :class="{ 'input-error': isSubmitted && !form.title }"/>
            <MapApiW v-model="form.location" />
          </td>
          <td class="report-table-td">목격 일시</td>
          <td class="report-table-td-w">
            <div class="datetime-group">
              <input type="date" v-model="form.date" :class="{ 'input-error': isSubmitted && !form.title }" />
              <input type="time" v-model="form.time" :class="{ 'input-error': isSubmitted && !form.title }" />
            </div>
          </td>
        </tr>
        <tr>
          <td class="report-table-td">내용</td>
          <td class="report-table-td-w">
            <textarea placeholder="목격 내용을 입력하세요" v-model="form.content"></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 등록 버튼 -->
    <div class="submit-wrapper">
      <button type="submit" @click="handleSubmit" class="btn-submit">등록하기</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { fbstore, storage } from '../firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import MapApiW from '@/components/MapApiW.vue'

const router = useRouter()
const route = useRoute()

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const uploadProgress = ref(0)

const animalFiles = ref([])
const placeFiles = ref([])

const previewUrls = ref([])

const form = ref({
  title: '',
  contactPublic: 'public',
  date: '',
  time: '',
  location: '',
  content: ''
})

const forbiddenWords = [
  '광고', '판매', '도박', '성인', '시발', 'ㅅㅂ', 'casino',
  'http', 'httpsV', '텔레그램', '카카오톡'
]

const updatePreviewUrls = () => {
  previewUrls.value = [
    ...animalFiles.value.map(f => URL.createObjectURL(f)),
    ...placeFiles.value.map(f => URL.createObjectURL(f))
  ]
}

const onAnimalFileChange = (e) => {
  const files = Array.from(e.target.files || [])
  if (files.length === 0) return

  if (files.length > 5) {
    alert('동물 사진은 최대 5장까지만 업로드할 수 있습니다.')
    e.target.value = ''
    return
  }

  const maxSize = 10 * 1024 * 1024
  const invalid = files.find(f => f.size > maxSize)
  if (invalid) {
    alert(`파일 ${invalid.name} 용량이 10MB를 초과합니다.`)
    e.target.value = ''
    return
  }

  animalFiles.value = files
  updatePreviewUrls()
}

const onPlaceFileChange = (e) => {
  const files = Array.from(e.target.files || [])
  if (files.length === 0) return

  if (files.length > 5) {
    alert('장소 사진은 최대 5장까지만 업로드할 수 있습니다.')
    e.target.value = ''
    return
  }

  const maxSize = 10 * 1024 * 1024
  const invalid = files.find(f => f.size > maxSize)
  if (invalid) {
    alert(`파일 ${invalid.name} 용량이 10MB를 초과합니다.`)
    e.target.value = ''
    return
  }

  placeFiles.value = files
  updatePreviewUrls()
}

const handleSubmit = async () => {
  if (isSubmitting.value) return
  isSubmitting.value = true
  isSubmitted.value = true

  try {
    const required = ['title', 'contactPublic', 'date']
    const isValid = required.every(k => form.value[k]?.trim())
    if (!isValid) {
      alert('필수 항목을 모두 입력해주세요.')
      isSubmitting.value = false
      return
    }

    const auth = getAuth()
    const user = auth.currentUser
    if (!user) {
      alert('로그인이 필요합니다.')
      isSubmitting.value = false
      return
    }

    const allText = Object.values(form.value).join(' ').toLowerCase()
    const containsForbidden = forbiddenWords.some(word => allText.includes(word))
    if (containsForbidden) {
      alert('내용에 부적절한 단어가 포함되어 있습니다.')
      isSubmitting.value = false
      return
    }

    if (animalFiles.value.length === 0 && placeFiles.value.length === 0) {
      alert('사진을 1장 이상 업로드해주세요.')
      isSubmitting.value = false
      return
    }

    const imageUrlsAnimal = []
    const placeImageUrls = []

    const totalFiles = animalFiles.value.length + placeFiles.value.length
    let processedCount = 0

    for (const file of animalFiles.value) {
      const uniqueName = `animal_${Date.now()}_${file.name}`
      const fileRef = storageRef(storage, `sightPosts/animal/${uniqueName}`)
      await uploadBytes(fileRef, file)
      const url = await getDownloadURL(fileRef)
      imageUrlsAnimal.push(url)

      processedCount++
      uploadProgress.value = ((processedCount / totalFiles) * 100).toFixed(1)
      console.log(`[동물 ${processedCount}/${totalFiles}] 업로드 완료: ${url}`)
    }

    for (const file of placeFiles.value) {
      const uniqueName = `place_${Date.now()}_${file.name}`
      const fileRef = storageRef(storage, `sightPosts/place/${uniqueName}`)
      await uploadBytes(fileRef, file)
      const url = await getDownloadURL(fileRef)
      placeImageUrls.push(url)

      processedCount++
      uploadProgress.value = ((processedCount / totalFiles) * 100).toFixed(1)
      console.log(`[장소 ${processedCount}/${totalFiles}] 업로드 완료: ${url}`)
    }

    if (imageUrlsAnimal.length === 0 && placeImageUrls.length === 0) {
      alert('이미지를 업로드하지 못했습니다.')
      isSubmitting.value = false
      return
    }

    const postData = {
      ...form.value,
      imageUrlsAnimal,
      placeImageUrls,
      uid: user.uid,
      missingId: route.params.id || null,
      createdAt: serverTimestamp()
    }

    let docRef
    let savedPostId
    try {
      docRef = await addDoc(collection(fbstore, 'sightPosts'), postData)
      savedPostId = docRef.id
      console.log('Firestore 저장 완료:', savedPostId)
    } catch (dbErr) {
      console.error('Firestore 저장 실패:', dbErr)
      alert('게시글 저장 중 오류가 발생했습니다.')
      isSubmitting.value = false
      return
    }

    // 7️Vertex AI 인덱싱 트리거
    if (imageUrlsAnimal.length > 0 && savedPostId) {
      console.log(`[Vector Trigger] 동물 사진 ${imageUrlsAnimal.length}개 인덱싱 시작...`)
      const metadataCollectionRef = collection(fbstore, 'image_metadata')

      for (const imageUrl of imageUrlsAnimal) {
        try {
          await addDoc(metadataCollectionRef, {
            path: imageUrl,
            status: 'PENDING',
            // Cloud Function이 감지할 상태
            createdAt: serverTimestamp(),
            originalPostId: savedPostId,
            imageType: 'animal'           
          })
          console.log(`[Vector Trigger - Animal] ${imageUrl} 등록`)
        } catch (triggerError) {
          console.error(
            'Vector Search 트리거 실패 (동물 사진, 개별):',
            triggerError,
            imageUrl
          )
        }
      }
    }

    try {
      router.push({ name: 'sighting-detail', params: { id: savedPostId } })
    } catch (navErr) {
      console.error('🚨 페이지 이동 실패:', navErr)
      alert('게시글은 저장되었지만 이동 중 문제가 발생했습니다.')
    }
  } catch (err) { 
    console.error('🚨 알 수 없는 오류 발생:', err)
    alert('예상치 못한 오류가 발생했습니다.')
  } finally {
    isSubmitting.value = false
  }
}
</script>


<style scoped>
.report-page {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.report-title {
  align-self: flex-start;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: rgb(56, 45, 28);
  width: 100%;
  padding-left: 140px;
}
.report-table {
  width: 80%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  margin-bottom: 1.5rem;
  text-align: center;
}
.report-table-td,
.report-table-td-w {
  border: 1px solid #ddd;
  padding: 0.5rem;
  vertical-align: middle;
}
.report-table-td {
  background-color: #f4f1eb;
  font-weight: bold;
  width: 15%;
  height: 50px;
}
.report-table-td-w {
  width: 35%;
}
.report-table-td-w input[type='text'],
.report-table-td-w input[type='date'],
.report-table-td-w input[type='time'],
.report-table-td-w select,
.report-table-td-w textarea,
.report-table-td-w input[type='file'] {
  width: 100%;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.report-table-td-w input[type='text'] {
  height: 35px !important;
}
.report-table-td-w textarea {
  height: 50px !important;
  resize: vertical;
}
.radio-group {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 5rem;
}
.radio-group label {
  margin: 0;
  font-size: 0.9rem;
  padding-top: 12px;
}
.btn-submit {
  padding: 0.75rem 1.5rem;
  background-color: rgb(147, 123, 98);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 150px;
  align-self: center;
}
.btn-submit:hover {
  background-color: rgb(147, 123, 98);
}
.map-wrapper {
  width: 100%;
  height: 600px;
  margin-top: 2rem;
}
.datetime-group {
  display: flex;
  gap: 0.5rem;
}
.datetime-group input[type='date'],
.datetime-group input[type='time'] {
  flex: 1;
  box-sizing: border-box;
}
</style>