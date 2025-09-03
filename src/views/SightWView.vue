<template>
  <div class="report-page">
    <h2 class="report-title">동물 목격 신고서</h2>

    <!-- 상단 테이블 -->
    <table class="report-table" border="1">
      <tbody>
        <tr>
          <td class="report-table-td">제목</td>
          <td class="report-table-td-w">
            <input v-model="title" type="text" placeholder="제목" required />
          </td>
          <td rowspan="2" class="report-table-td">연락처</td>
          <td rowspan="2" class="report-table-td-w">
            <input v-model="phoneno" type="text" placeholder="연락처" />
            <div class="radio-group">
              <label>
                <input type="radio" name="contactPublic" value="public" />
                연락처 공개
              </label>
              <label>
                <input type="radio" name="contactPublic" value="private" />
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

    <!-- 목격 상세 테이블 -->
    <table class="report-table" border="1">
      <tbody>
        <tr>
          <td class="report-table-td">사진</td>
          <td class="report-table-td-w">
            <input type="file" @change="handleFileChange" accept="image/*" required />
          </td>
          <td class="report-table-td">목격 날짜</td>
          <td class="report-table-td-w">
            <div class="datetime-group">
              <input type="date" v-model="date" required />
              <input type="time" v-model="time" required />
            </div>
          </td>
        </tr>
        <tr>
          <td class="report-table-td">목격 위치</td>
          <td class="report-table-td-w">
            <input type="text" placeholder="목격 위치" v-model="address" required />
            <MapApiW v-model="address" />
          </td>
          <td class="report-table-td">내용</td>
          <td class="report-table-td-w">
            <textarea placeholder="목격 내용을 입력하세요" v-model="content"></textarea>
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
import { useRouter } from 'vue-router'
import { fbstore } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore'

const router = useRouter()

const title = ref('');
const phoneno = ref('');
const contactPublic = ref('public');
const date = ref('');
const time = ref('');
const address = ref('');
const content = ref('');

const handleSubmit = async () => {
  try {
    const docRef = await addDoc(collection(fbstore, "sightPosts"), {
      title: title.value,
      phoneno: phoneno.value,
      contactPublic: contactPublic.value,
      date: date.value,
      time: time.value,
      address: address.value,
      content: content.value,
      createdAt: new Date()
    })

    // ✅ 성공 시 디테일 페이지로 이동
    router.push({ name: 'sighting-detail', params: { id: docRef.id } })
  } catch (error) {
    console.error("작성 중 오류 발생:", error)
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