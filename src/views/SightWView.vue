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
             <input type="file" multiple accept="image/*" @change="onFileChange" />
          </td>
          <td class="report-table-td">장소 사진</td>
          <td class="report-table-td-w">
             <input type="file" multiple accept="image/*" @change="onFileChange" />
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
// ⭐️ serverTimestamp를 임포트합니다.
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import MapApiW from '@/components/MapApiW.vue'

const router = useRouter()
const route = useRoute()

// --- 상태 변수
const isSubmitting = ref(false)
const selectedFiles = ref([]) // 여러 장 업로드 파일
const previewUrls = ref([]) // 로컬 미리보기
const uploadProgress = ref(0) // 전체 진행률

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

// --- 파일 선택 핸들러
const onFileChange = (e) => {
  const files = Array.from(e.target.files || [])
  if (files.length === 0) return

  // 파일 개수 제한
  if (files.length > 5) {
    alert("최대 5장까지만 업로드할 수 있습니다.")
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

  selectedFiles.value = files
  previewUrls.value = files.map(file => URL.createObjectURL(file))
}

// --- 신고서 제출
const handleSubmit = async () => {
  if (isSubmitting.value) return
  isSubmitting.value = true

  try {
    // 1️⃣ 필수값 체크
    const required = ['title', 'contactPublic', 'date', 'location']
    const isValid = required.every(k => form.value[k]?.trim())
    if (!isValid) {
      alert("필수 항목을 모두 입력해주세요.")
      isSubmitting.value = false
      return
    }

    // 2️⃣ 로그인 확인
    const auth = getAuth()
    const user = auth.currentUser
    if (!user) {
      alert("로그인이 필요합니다.")
      isSubmitting.value = false
      return
    }

    // 3️⃣ 금칙어 검사
    const allText = Object.values(form.value).join(' ').toLowerCase()
    const containsForbidden = forbiddenWords.some(word => allText.includes(word))
    if (containsForbidden) {
      alert("내용에 부적절한 단어가 포함되어 있습니다.")
      isSubmitting.value = false
      return
    }

    // 4️⃣ 파일 업로드
    if (selectedFiles.value.length === 0) {
      alert("사진을 1장 이상 업로드해주세요.")
      isSubmitting.value = false
      return
    }

    const totalFiles = selectedFiles.value.length
    let uploadedUrls = []

    for (let i = 0; i < totalFiles; i++) {
      const file = selectedFiles.value[i]
      try {
        const uniqueName = `${Date.now()}_${file.name}`
        const fileRef = storageRef(storage, `sightPosts/${uniqueName}`)
        await uploadBytes(fileRef, file)
        const url = await getDownloadURL(fileRef)
        uploadedUrls.push(url)

        // 업로드 진행률 (대략적인 %)
        uploadProgress.value = (((i + 1) / totalFiles) * 100).toFixed(1)
        console.log(`✅ [${i + 1}/${totalFiles}] 업로드 완료: ${url}`)
      } catch (uploadErr) {
        console.error(`🚨 ${file.name} 업로드 실패:`, uploadErr)
        alert(`파일 "${file.name}" 업로드 중 오류가 발생했습니다.`)
      }
    }

    if (uploadedUrls.length === 0) {
      alert("이미지를 업로드하지 못했습니다.")
      isSubmitting.value = false
      return
    }

    // 5️⃣ Firestore 저장
    const postData = {
      ...form.value,
      imageUrls: uploadedUrls,
      uid: user.uid,
      missingId: route.params.id || null,
      createdAt: serverTimestamp() // ⭐️ new Date() 대신 serverTimestamp() 사용
    }

    let docRef
    let savedPostId // ⭐️ 저장된 ID를 받기 위한 변수
    try {
      docRef = await addDoc(collection(fbstore, 'sightPosts'), postData)
      savedPostId = docRef.id // ⭐️ ID 저장
      console.log("✅ Firestore 저장 완료:", savedPostId)
    } catch (dbErr) {
      console.error("🚨 Firestore 저장 실패:", dbErr)
      alert("게시글 저장 중 오류가 발생했습니다.")
      isSubmitting.value = false
      return
    }

    // ⭐️ 6️⃣ Vertex AI 인덱싱 트리거 (새 이미지가 있을 경우)
    if (uploadedUrls.length > 0 && savedPostId) {
      console.log(`[Vector Trigger] ${uploadedUrls.length}개의 이미지 인덱싱 시작...`);
      const metadataCollectionRef = collection(fbstore, "image_metadata");
      
      for (const imageUrl of uploadedUrls) {
        try {
          await addDoc(metadataCollectionRef, {
            path: imageUrl,               // 새 이미지 URL
            status: "PENDING",            // Cloud Function이 감지할 상태
            createdAt: serverTimestamp(), // 서버 시간
            originalPostId: savedPostId   // 원본 게시물 ID 연결
          });
          console.log(`[Vector Trigger] ${imageUrl} 등록`);
        } catch (triggerError) {
          // 개별 트리거가 실패해도 사용자 흐름을 막지 않도록 로그만 남김
          console.error("Vector Search 트리거 실패 (개별):", triggerError, imageUrl);
        }
      }
    }

    // 7️⃣ 이동
    try {
      // ⭐️ 저장된 ID를 사용하여 이동
      router.push({ name: 'sighting-detail', params: { id: savedPostId } }) 
    } catch (navErr) {
      console.error("🚨 페이지 이동 실패:", navErr)
      alert("게시글은 저장되었지만 이동 중 문제가 발생했습니다.")
    }

  } catch (err) {
    console.error("🚨 알 수 없는 오류 발생:", err)
    alert("예상치 못한 오류가 발생했습니다.")
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