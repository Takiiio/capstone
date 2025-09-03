<template>
  <div class="report-page">
    <h2 class="report-title">반려동물 분실 신고서</h2>

    <!-- 제목 / 연락처 -->
    <table class="report-table" border="1">
      <tbody>
        <tr>
          <td class="report-table-td required">제목</td>
          <td class="report-table-td-w">
            <input type="text" v-model="form.title" :class="{ 'input-error': isSubmitted && !form.title }" />
          </td>
          <td rowspan="2" class="report-table-td required">연락처</td>
          <td rowspan="2" class="report-table-td-w">
            <input type="text" v-model="form.contact" :class="{ 'input-error': isSubmitted && !form.contact }" />
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
          <td class="report-table-td">SNS 연동</td>
          <td class="report-table-td-w"></td>
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
            <input type="file" accept="image/*" @change="onFileChange" />
            <div v-if="previewImage" class="preview-box">
              <img :src="previewImage" alt="미리보기" />
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MapApiW from '@/components/MapApiW.vue'
import { fbstore, storage } from '../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const router = useRouter()
const isSubmitted = ref(false)
const selectedFile = ref(null)
const previewImage = ref(null)

const form = ref({
  title: '', contact: '', contactPublic: 'public',
  animalName: '', gender: '', age: '', weight: '', color: '',
  date: '', time: '', breed: '', location: '', radius: '',
  warning: '', note: '', reward: ''
})

const onFileChange = (e) => {
  if (e.target.files.length > 0) {
    selectedFile.value = e.target.files[0]
    previewImage.value = URL.createObjectURL(selectedFile.value)
  }
}

const handleSubmit = async () => {
  isSubmitted.value = true
  const required = ['title', 'contact', 'animalName', 'date', 'location']
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
      const fileRef = storageRef(storage, `missingPhotos/${Date.now()}_${selectedFile.value.name}`)
      await uploadBytes(fileRef, selectedFile.value)
      photoUrl = await getDownloadURL(fileRef)
    }
    const postData = {
      ...form.value,
      photoUrl,
      uid: user.uid,
      createdAt: new Date()
    }
    const docRef = await addDoc(collection(fbstore, 'missingPosts'), postData)
    router.push({ name: 'missing-detail', params: { id: docRef.id } })
  } catch (err) {
    console.error("등록 실패:", err)
    alert("등록 중 오류가 발생했습니다.")
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
