<template>
  <div class="report-page">
    <h2 class="report-title"> {{ isEditMode ? '분실 신고 수정' : '반려동물 분실 신고서' }}</h2>

    <!-- 제목 / 연락처 -->
    <table class="report-table" border="1">
      <tbody>
        <tr>
          <td rowspan="2" class="report-table-td required">제목</td>
          <td rowspan="2" class="report-table-td-w">
            <input type="text" v-model="form.title" :class="{ 'input-error': isSubmitted && !form.title }" />
          </td>
          <td class="report-table-td required">연락처</td>
          <td  class="report-table-td-w">
            <div class="radio-group">
              <label>
                <input type="radio" name="contactPublic" value="public" v-model="form.contactPublic" />
                연락처 공개
              </label>
              <label>
                <input type="radio" name="contactPublic" value="private" v-model="form.contactPublic" />
                연락처 비공개
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <td class="report-table-td required">찾는중/찾음</td>
          <td  class="report-table-td-w">
            <div class="radio-group">
              <label>
                <input type="radio" name="status" value="y" v-model="form.status" />
                찾는중
              </label>
              <label>
                <input type="radio" name="status" value="n" v-model="form.status" />
                찾음
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 동물 정보 -->
    <table class="report-table" border="1">
      <tbody>
        <tr>
          <td class="report-table-td required">동물 이름</td>
          <td class="report-table-td-w">
            <input type="text" v-model="form.animalName" :class="{ 'input-error': isSubmitted && !form.animalName }" />
          </td>
          <td class="report-table-td">사진</td>
          <td class="report-table-td-w">
             <input type="file" multiple accept="image/*" @change="onFileChange" />
            <div v-if="previewImages.length" class="preview-box multi-preview">
              <img
                v-for="(url, i) in previewImages"
                :key="i"
                :src="url"
                alt="미리보기"
                class="preview-img"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td class="report-table-td">성별</td>
          <td class="report-table-td-w">
            <select v-model="form.gender">
              <option value="">선택</option>
              <option value="male">수컷</option>
              <option value="female">암컷</option>
            </select>
          </td>
          <td class="report-table-td">나이</td>
          <td class="report-table-td-w"><input type="text" v-model="form.age" /></td>
        </tr>
        <tr>
          <td class="report-table-td">몸무게</td>
          <td class="report-table-td-w"><input type="text" v-model="form.weight" /></td>
          <td class="report-table-td">털 색깔</td>
          <td class="report-table-td-w"><input type="text" v-model="form.color" /></td>
        </tr>
        <tr>
          <td class="report-table-td required">분실 날짜</td>
          <td class="report-table-td-w">
            <div class="datetime-group">
              <input type="date" v-model="form.date" :class="{ 'input-error': isSubmitted && !form.date }" />
              <input type="time" v-model="form.time" :class="{ 'input-error': isSubmitted && !form.time }" />
            </div>
          </td>
          <td class="report-table-td">품종</td>
          <td class="report-table-td-w"><input type="text" v-model="form.breed" /></td>
        </tr>
        <tr>
          <td class="report-table-td required">분실 위치</td>
          <td class="report-table-td-w">
            <input type="text" v-model="form.location" :class="{ 'input-error': isSubmitted && !form.location }" />
            <MapApiW v-model="form.location" />
          </td>
          <td class="report-table-td">예상 반경</td>
          <td class="report-table-td-w"><input type="text" v-model="form.radius" /></td>
        </tr>
        <tr>
          <td class="report-table-td">주의사항</td>
          <td class="report-table-td-w"><textarea v-model="form.warning"></textarea></td>
          <td class="report-table-td">특이사항</td>
          <td class="report-table-td-w"><textarea v-model="form.note"></textarea></td>
        </tr>
      </tbody>
    </table>

    <!-- 사례금 -->
    <table class="report-table" border="1">
      <tbody>
        <tr>
          <td class="report-table-td">사례금</td>
          <td class="report-table-td-w"><input type="text" v-model="form.reward" /></td>
        </tr>
      </tbody>
    </table>

    <!-- 등록 버튼 -->
    <div class="submit-wrapper">
      <button type="button" class="btn-submit" @click="handleSubmit">등록하기</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import MapApiW from '@/components/MapApiW.vue'
import { fbstore, storage } from '../firebaseConfig'
// ⭐️ serverTimestamp를 임포트하여 Firestore 서버 시간을 사용합니다.
import { collection, addDoc, doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const router = useRouter()
const route = useRoute()
const isSubmitted = ref(false)
const isEditMode = ref(false) // 

const selectedFiles = ref([])
const previewImages = ref([])

const form = ref({
  title: '', contactPublic: 'public',
  animalName: '', gender: '', age: '', weight: '', color: '',
  date: '', time: '', breed: '', location: '', radius: '',
  warning: '', note: '', reward: '', status: 'y',
  imageUrls: []
})

// 금칙어
const forbiddenWords = [
  '광고', '판매', '도박', '성인', '시발', 'ㅅㅂ', 'casino',
  'http', 'httpsV', '텔레그램', '카카오톡'
]

// ... onFileChange, onMounted 함수는 이전과 동일 ...

// 여러 장 파일 선택
const onFileChange = (e) => {
  const files = Array.from(e.target.files || [])
  if (files.length === 0) return

  // 최대 6장 제한
  if (files.length > 6) {
    alert('최대 6장까지만 업로드할 수 있습니다.')
    e.target.value = ''
    return
  }

  // 용량 제한 (10MB)
  const maxSize = 10 * 1024 * 1024
  const invalid = files.find(f => f.size > maxSize)
  if (invalid) {
    alert(`파일 "${invalid.name}" 용량이 10MB를 초과합니다.`)
    e.target.value = ''
    return
  }

  selectedFiles.value = files
  previewImages.value = files.map(file => URL.createObjectURL(file))
}

// 수정 모드일 경우 데이터 불러오기
onMounted(async () => {
  const id = route.params.id
  if (!id) return // 새 글 작성 모드

  isEditMode.value = true

  const docRef = doc(fbstore, 'missingPosts', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const data = docSnap.data()
    form.value = { ...form.value, ...data }

    // 로그인한 사용자만 수정 가능
    const auth = getAuth()
    const user = auth.currentUser
    if (!user || user.uid !== data.uid) {
      alert('본인 게시글만 수정할 수 있습니다.')
      router.back()
      return
    }

    previewImages.value = data.imageUrls || []
  } else {
    alert('게시글을 찾을 수 없습니다.')
    router.back()
  }
})


// 등록 및 수정 처리
const handleSubmit = async () => {
  isSubmitted.value = true
  const required = ['title', 'contactPublic', 'animalName', 'date', 'location']
  const isValid = required.every(k => form.value[k]?.trim())
  if (!isValid) {
    alert("필수 항목을 모두 입력해주세요.")
    isSubmitted.value = false // ⭐️ 유효성 검사 실패 시 제출 상태 해제
    return
  }

  // 금칙어 검사
  const allText = Object.values(form.value).join(' ').toLowerCase()
  const containsForbidden = forbiddenWords.some(word => allText.includes(word))
  if (containsForbidden) {
    alert('내용에 부적절한 단어가 포함되어 있습니다.')
    isSubmitted.value = false // ⭐️ 유효성 검사 실패 시 제출 상태 해제
    return
  }

  try {
    const auth = getAuth()
    const user = auth.currentUser
    if (!user) {
      alert("로그인이 필요합니다")
      isSubmitted.value = false // ⭐️ 유효성 검사 실패 시 제출 상태 해제
      return
    }

    // ⭐️ 1. 새로 업로드할 URL과 게시물 ID를 저장할 변수
    const newlyUploadedUrls = []
    let savedPostId = null;

    // ⭐️ 2. 이미지 업로드 (기존 URL + 새 URL)
    let imageUrls = [...(form.value.imageUrls || [])]
    for (const file of selectedFiles.value) {
      const fileRef = storageRef(storage, `missingPhotos/${Date.now()}_${file.name}`)
      await uploadBytes(fileRef, file)
      const url = await getDownloadURL(fileRef)
      imageUrls.push(url)
      newlyUploadedUrls.push(url) // ⭐️ 새로 업로드된 URL을 별도 저장
    }

    const postData = {
      ...form.value,
      imageUrls,
      uid: user.uid,
      updatedAt: serverTimestamp() // ⭐️ new Date() 대신 serverTimestamp() 사용
    }

    // ⭐️ 3. 게시물 저장 (수정 또는 신규)
    if (isEditMode.value) {
      // 수정 모드
      savedPostId = route.params.id;
      const docRef = doc(fbstore, 'missingPosts', savedPostId)
      await updateDoc(docRef, postData)
    } else {
      // 신규 등록
      const docRef = await addDoc(collection(fbstore, 'missingPosts'), {
        ...postData,
        createdAt: serverTimestamp() // ⭐️ new Date() 대신 serverTimestamp() 사용
      })
      savedPostId = docRef.id;
    }

    // ⭐️ 4. Vertex AI 인덱싱 트리거 (새 이미지가 있을 경우)
    if (newlyUploadedUrls.length > 0 && savedPostId) {
      console.log(`Vector Search 인덱싱 트리거 (${newlyUploadedUrls.length}개의 새 이미지)...`);
      const metadataCollectionRef = collection(fbstore, "image_metadata");
      
      for (const imageUrl of newlyUploadedUrls) {
        try {
          await addDoc(metadataCollectionRef, {
            path: imageUrl,                  // 새 이미지 URL
            status: "PENDING",               // Cloud Function이 감지할 상태
            createdAt: serverTimestamp(),    // 서버 시간
            originalPostId: savedPostId      // 원본 게시물 ID 연결
          });
          console.log(`[Vector Trigger] ${imageUrl}`);
        } catch (triggerError) {
          // 개별 트리거가 실패해도 사용자 흐름을 막지 않도록 로그만 남김
          console.error("Vector Search 트리거 실패 (개별):", triggerError, imageUrl);
        }
      }
    }

    // ⭐️ 5. 모든 작업 완료 후 사용자 알림 및 이동
    if (isEditMode.value) {
      alert('게시글이 수정되었습니다.')
      router.push({ name: 'missing-detail', params: { id: savedPostId } })
    } else {
      alert('게시글이 등록되었습니다.')
      router.push({ name: 'missing-detail', params: { id: savedPostId } })
    }

  } catch (err) {
    console.error("등록 실패:", err)
    alert("등록 중 오류가 발생했습니다.")
    isSubmitted.value = false // ⭐️ 오류 발생 시 제출 상태 해제
  }
}
</script>

<style scoped>
.required::after {
  content: '*';
  color: red;
  margin-left: 4px;
}
.input-error {
  border: 2px solid red;
  outline: none;
}
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
.report-table-td-w textarea {
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
.datetime-group {
  display: flex;
  gap: 0.5rem;
}
.datetime-group input[type='date'],
.datetime-group input[type='time'] {
  flex: 1;
  box-sizing: border-box;
}
.preview-box {
  margin-top: 8px;
  text-align: center;
}
.preview-box img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  border: 1px solid #ddd;
}
</style>
