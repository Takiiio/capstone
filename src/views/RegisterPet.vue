<template>
  <div class="register-container">
    <h2>QR 코드 소유자 정보</h2>

    <p v-if="uid">UID: {{ uid }}</p>

    <!-- 사용자 정보 -->
    <ul>
      <li class="form-group">
        <strong>닉네임</strong>
        <span>{{ user.nickname }}</span>
      </li>

      <li class="form-group">
        <strong>이메일</strong>
        <span>{{ user.email }}</span>
      </li>

      <li class="form-group">
        <strong>전화번호</strong>
        <span>{{ user.phone }}</span>
      </li>
    </ul>

    <h3 style="margin-top: 20px;">사용자가 작성한 실종 게시글</h3>

    <p v-if="isLoadingPosts">게시글을 불러오는 중...</p>

    <ul v-else-if="missingPosts.length > 0" class="list">
      <li v-for="post in missingPosts" :key="post.id" class="list-item">
        <strong @click="goToDetail(post.id)" style="cursor: pointer;">{{ post.title }}</strong>
        <span class="date">{{ formatDate(post.createdAt) }}</span>
      </li>
    </ul>

    <p v-else>작성한 실종 게시글이 없습니다.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { fbstore } from "../firebaseConfig";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";

const route = useRoute();
const qrid = route.params.id || null;  // URL에서 QR 고유 ID 받기

const user = ref({ nickname: "", email: "", phone: "" });
const missingPosts = ref([]);
const isLoadingPosts = ref(false);

const formatDate = (ts) => {
  if (!ts) return "";
  const date = ts.toDate ? ts.toDate() : ts;
  return new Date(date).toLocaleDateString("ko-KR");
};

onMounted(async () => {
  if (!qrid) {
    alert("QR 코드가 올바르지 않습니다.");
    return;
  }

  // 1) QR 문서 조회
  const qrRef = doc(fbstore, "qrcodes", qrid);
  const qrSnap = await getDoc(qrRef);

  if (!qrSnap.exists()) {
    alert("유효하지 않은 QR 코드입니다.");
    return;
  }

  const ownerUid = qrSnap.data().ownerUid;
  // QR에 저장된 실제 사용자 UID

//  2) users/ownerUid 정보 조회
  const userRef = doc(fbstore, "users", ownerUid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const data = userSnap.data();
    user.value.nickname = data.nickname || "";
    user.value.email = data.email || "";
    user.value.phone = data.phone || "";
  }

  // 3) 실종 게시글 조회
  try {
    isLoadingPosts.value = true;

    const q = query(
      collection(fbstore, "missingPosts"),
      where("uid", "==", ownerUid),
      orderBy("createdAt", "desc")
    );

    const result = [];
    const snaps = await getDocs(q);

    snaps.forEach((docSnap) => {
      result.push({ id: docSnap.id, ...docSnap.data() });
    });

    missingPosts.value = result;

  } catch (e) {
    console.error("게시글 로딩 오류:", e);
  } finally {
    isLoadingPosts.value = false;
  }
});

const router = useRouter();

function goToDetail(id) {
  router.push({ name: "missing-detail", params: { id } });
}
</script>



<style scoped>
.register-container {
  max-width: 500px;
  margin: 60px auto;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

h2 {
  text-align: center;
  color: #5a4634;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

label {
  font-weight: bold;
  margin-bottom: 6px;
  color: #333;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #a18f7a;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}

button:hover {
  background-color: #8d7b68;
}

.list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.list-item {
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
}

</style>
