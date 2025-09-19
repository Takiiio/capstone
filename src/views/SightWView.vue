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
          <td class="report-table-td">사진</td>
          <td class="report-table-td-w">
            <input type="file" @change="onFileChange" accept="image/*" required />
          </td>
          <td class="report-table-td">목격 날짜</td>
          <td class="report-table-td-w">
            <div class="datetime-group">
              <input type="date" v-model="form.date" :class="{ 'input-error': isSubmitted && !form.title }" />
              <input type="time" v-model="form.time" :class="{ 'input-error': isSubmitted && !form.title }" />
            </div>
          </td>
        </tr>
        <tr>
          <td class="report-table-td">목격 위치</td>
          <td class="report-table-td-w">
            <input type="text" placeholder="목격 위치" v-model="form.location" :class="{ 'input-error': isSubmitted && !form.title }"/>
            <MapApiW v-model="form.location" />
          </td>
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
import { fbstore, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import MapApiW from '@/components/MapApiW.vue'

const router = useRouter()
const route = useRoute()

const form = ref({
  title: '', contactPublic: 'public',
  date: '', time: '', location: '', content:''
})

const isSubmitted = ref(false)
const selectedFile = ref(null)
const previewImage = ref(null)

const onFileChange = (e) => {
  if (e.target.files.length > 0) {
    selectedFile.value = e.target.files[0]
    previewImage.value = URL.createObjectURL(selectedFile.value)
  }
}

const handleSubmit = async () => {
  isSubmitted.value = true
  const required = ['title', 'contactPublic', 'date', 'location']
  const isValid = required.every(k => form.value[k]?.trim())
  if (!isValid) {
    alert("필수 항목을 모두 입력해주세요.")
    return
  }
  try {
    const auth = getAuth()
    const user = auth.currentUser
    if (!user) {
      alert("로그인이 필요합니다")
      return
    }
    let photoUrl = ''
    if (selectedFile.value) {
      const fileRef = storageRef(storage, `sightPosts/${Date.now()}_${selectedFile.value.name}`)
      await uploadBytes(fileRef, selectedFile.value)
      photoUrl = await getDownloadURL(fileRef)
    }
    const postData = {
      ...form.value,
      photoUrl,
      uid: user.uid,
      missingId: route.params.id, 
      createdAt: new Date()
    }
    const docRef = await addDoc(collection(fbstore, 'sightPosts'), postData)
    router.push({ name: 'sighting-detail', params: { id: docRef.id } })
  } catch (err) {
    console.error("등록 실패:", err)
    alert("등록 중 오류가 발생했습니다.")
  }
}

    // ✅ 성공 시 디테일 페이지로 이동
  //   router.push({ name: 'sighting-detail', params: { id: docRef.id } })
  // } catch (error) {
  //   console.error("작성 중 오류 발생:", error)
  // }
// }
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