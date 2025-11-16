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

// --- 상태 변수
const isSubmitting = ref(false)   // 중복 제출 방지용
const isSubmitted = ref(false)    // 검증 시 UI 표시용 (template에서 사용)
const uploadProgress = ref(0)     // 전체 진행률

// 🔹 동물 / 장소 파일 분리
const animalFiles = ref([])       // 동물 사진 원본 파일들
const placeFiles = ref([])        // 장소 사진 원본 파일들

// 🔹 미리보기 (필요하면 통합해서 사용)
const previewUrls = ref([])

// --- 입력 폼
const form = ref({
  title: '',
  contactPublic: 'public',
  date: '',
  time: '',
  location: '',
  content: ''
})

// --- 금칙어 필터
const forbiddenWords = [
  '광고', '판매', '도박', '성인', '시발', 'ㅅㅂ', 'casino',
  'http', 'httpsV', '텔레그램', '카카오톡'
]

// 🔹 공통: 미리보기 URL 갱신
const updatePreviewUrls = () => {
  previewUrls.value = [
    ...animalFiles.value.map(f => URL.createObjectURL(f)),
    ...placeFiles.value.map(f => URL.createObjectURL(f))
  ]
}

// --- 동물 사진 선택 핸들러
const onAnimalFileChange = (e) => {
  const files = Array.from(e.target.files || [])
  if (files.length === 0) return

  // 파일 개수 제한 (예: 동물 사진 최대 5장)
  if (files.length > 5) {
    alert('동물 사진은 최대 5장까지만 업로드할 수 있습니다.')
    e.target.value = ''
    return
  }

  // 파일 용량 제한 (10MB 이하)
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

// --- 장소 사진 선택 핸들러
const onPlaceFileChange = (e) => {
  const files = Array.from(e.target.files || [])
  if (files.length === 0) return

  // 파일 개수 제한 (예: 장소 사진 최대 5장)
  if (files.length > 5) {
    alert('장소 사진은 최대 5장까지만 업로드할 수 있습니다.')
    e.target.value = ''
    return
  }

  // 파일 용량 제한 (10MB 이하)
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

// --- 신고서 제출
const handleSubmit = async () => {
  if (isSubmitting.value) return
  isSubmitting.value = true
  isSubmitted.value = true

  try {
    // 1️⃣ 필수값 체크
    const required = ['title', 'contactPublic', 'date']
    const isValid = required.every(k => form.value[k]?.trim())
    if (!isValid) {
      alert('필수 항목을 모두 입력해주세요.')
      isSubmitting.value = false
      return
    }

    // 2️⃣ 로그인 확인
    const auth = getAuth()
    const user = auth.currentUser
    if (!user) {
      alert('로그인이 필요합니다.')
      isSubmitting.value = false
      return
    }

    // 3️⃣ 금칙어 검사
    const allText = Object.values(form.value).join(' ').toLowerCase()
    const containsForbidden = forbiddenWords.some(word => allText.includes(word))
    if (containsForbidden) {
      alert('내용에 부적절한 단어가 포함되어 있습니다.')
      isSubmitting.value = false
      return
    }

    // 4️⃣ 파일 존재 검사 (동물/장소 합쳐서 최소 1장)
    if (animalFiles.value.length === 0 && placeFiles.value.length === 0) {
      alert('사진을 1장 이상 업로드해주세요.')
      isSubmitting.value = false
      return
    }

    // 5️⃣ 파일 업로드 (동물 / 장소 구분)
    const imageUrlsAnimal = []
    const placeImageUrls = []

    const totalFiles = animalFiles.value.length + placeFiles.value.length
    let processedCount = 0

    // 🔹 동물 사진 업로드
    for (const file of animalFiles.value) {
      const uniqueName = `animal_${Date.now()}_${file.name}`
      const fileRef = storageRef(storage, `sightPosts/animal/${uniqueName}`)
      await uploadBytes(fileRef, file)
      const url = await getDownloadURL(fileRef)
      imageUrlsAnimal.push(url)

      processedCount++
      uploadProgress.value = ((processedCount / totalFiles) * 100).toFixed(1)
      console.log(`✅ [동물 ${processedCount}/${totalFiles}] 업로드 완료: ${url}`)
    }

    // 🔹 장소 사진 업로드
    for (const file of placeFiles.value) {
      const uniqueName = `place_${Date.now()}_${file.name}`
      const fileRef = storageRef(storage, `sightPosts/place/${uniqueName}`)
      await uploadBytes(fileRef, file)
      const url = await getDownloadURL(fileRef)
      placeImageUrls.push(url)

      processedCount++
      uploadProgress.value = ((processedCount / totalFiles) * 100).toFixed(1)
      console.log(`✅ [장소 ${processedCount}/${totalFiles}] 업로드 완료: ${url}`)
    }

    if (imageUrlsAnimal.length === 0 && placeImageUrls.length === 0) {
      alert('이미지를 업로드하지 못했습니다.')
      isSubmitting.value = false
      return
    }

    // 6️⃣ Firestore 저장 (missingId 포함, ✅ 유지)
    const postData = {
      ...form.value,
      imageUrlsAnimal,               // 동물 사진 URL 배열
      placeImageUrls,                // 장소 사진 URL 배열
      uid: user.uid,
      missingId: route.params.id || null, // ✅ 기존처럼 missingId 연결 유지
      createdAt: serverTimestamp()
    }

    let docRef
    let savedPostId
    try {
      docRef = await addDoc(collection(fbstore, 'sightPosts'), postData)
      savedPostId = docRef.id
      console.log('✅ Firestore 저장 완료:', savedPostId)
    } catch (dbErr) {
      console.error('🚨 Firestore 저장 실패:', dbErr)
      alert('게시글 저장 중 오류가 발생했습니다.')
      isSubmitting.value = false
      return
    }

    // 7️⃣ Vertex AI 인덱싱 트리거 (✅ 동물 사진만)
    if (imageUrlsAnimal.length > 0 && savedPostId) {
      console.log(`[Vector Trigger] 동물 사진 ${imageUrlsAnimal.length}개 인덱싱 시작...`)
      const metadataCollectionRef = collection(fbstore, 'image_metadata')

      for (const imageUrl of imageUrlsAnimal) {
        try {
          await addDoc(metadataCollectionRef, {
            path: imageUrl,               // 동물 사진 URL
            status: 'PENDING',            // Cloud Function이 감지할 상태
            createdAt: serverTimestamp(), // 서버 시간
            originalPostId: savedPostId,  // ✅ 목격 신고(sightPosts) ID 연결
            imageType: 'animal'           // 선택: 타입 명시(필요시 활용)
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

    // 8️⃣ 이동
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