<template>
  <div class="mypage-container">
    <h1><User class="icon" /> 마이페이지</h1>

    <div v-if="user">
      <!-- 내 정보 카드 -->
      <div class="card">
        <h2>
          <Smile class="icon" />
          내 정보
        </h2>
        <button v-if="!isEditing" class="edit-button" title="프로필 편집" @click="startEditing">
          <Edit2 class="edit-icon" /> 편집
        </button>
        <div v-else>
          <button @click="saveChanges">저장</button>
          <button @click="cancelEditing">취소</button>
        </div>

        <p>
          <strong>닉네임:</strong>
          <template v-if="isEditing">
            <input v-model="editedUser.nickname" />
          </template>
          <template v-else>
            {{ user?.nickname }}
          </template>
        </p>

        <p>
          <strong>이메일:</strong>
          <template v-if="isEditing">
            <input v-model="editedUser.email" />
          </template>
          <template v-else>
            {{ user?.email }}
          </template>
        </p>

        <p>
          <strong>이름:</strong>
          <template v-if="isEditing">
            <input v-model="editedUser.name" />
          </template>
          <template v-else>
            {{ user?.name }}
          </template>
        </p>

        <p>
          <strong>전화번호:</strong>
          <template v-if="isEditing">
            <input v-model="editedUser.phone" />
          </template>
          <template v-else>
            {{ user?.phone }}
          </template>
        </p>

        <p>
          <strong>계좌번호:</strong>
          <template v-if="isEditing">
            <input v-model="editedUser.account" />
          </template>
          <template v-else>
            {{ user?.account }}
          </template>
        </p>

        <p>
          <strong>은행:</strong>
          <template v-if="isEditing">
            <input v-model="editedUser.bank" />
          </template>
          <template v-else>
            {{ user?.bank }}
          </template>
        </p>
      </div>

      <!-- 반려동물 정보 카드 -->
      <!-- 구매 내역 카드 -->
      <div class="card">
        <h2><BadgeDollarSign class="icon" /> 구매 내역</h2>

        <p v-if="isLoadingPurchases" class="loading">구매 내역을 불러오는 중...</p>

        <ul v-else-if="purchaseHistory.length > 0" class="list">
          <li
            v-for="item in purchaseHistory"
            :key="item.id"
            class="list-item"
          >
            <strong
              class="qr-link"
              @click="goToQRDetail(item)"
              style="cursor: pointer;"
            >
              {{ item.serviceType === 'basic' ? 'Basic 모델' : 'Premium 모델' }}
            </strong>

            <span class="status-badge">
              금액: {{ item.amount.toLocaleString() }} 원
            </span>

            <span class="date">{{ formatDate(item.timestamp) }}</span>
          </li>
        </ul>


        <p v-else>구매 내역이 없습니다.</p>
      </div>


      <div class="card">
  <h2><FileText class="icon" /> 작성한 게시글</h2>

  <!-- 로딩 중 -->
  <p v-if="isLoadingPosts" class="loading">게시글을 불러오는 중...</p>

  <!-- 게시글 있음 -->
  <ul v-else-if="userPosts.length > 0" class="list">
    <li v-for="post in userPosts" :key="post.id" class="list-item" @click="goToDetail(post)">
      <strong>{{ post.title || '제목 없음' }}</strong>
      <span
        class="status-badge"
        :class="post.type === 'missing' ? 'missing' : 'sighting'"
      >
        {{ post.type === 'missing' ? '실종' : '목격' }}
      </span>
      <span class="date">{{ formatDate(post.createdAt) }}</span>
    </li>
  </ul>

  <!-- 게시글 없음 -->
  <p v-else class="no-posts">내가 작성한 글이 없습니다.</p>
</div>


      <!-- 사례금 정보 카드 -->
      <div class="card" v-if="user.reward">
        <h2><BadgeDollarSign class="icon" /> 사례금 정보</h2>
        <p><strong>사례금 액수:</strong> {{ user.reward.amount?.toLocaleString() }} 원</p>
        <p v-if="user.reward.status === '지급 완료'">
          <strong>지급 일자:</strong> {{ user.reward.date }}
        </p>
        <p v-else>
          <strong>상태:</strong> {{ user.reward.status }}
        </p>
      </div>
    </div>

    <div v-else>
      <p>사용자 정보를 불러오는 중입니다...</p>
    </div>
  </div>
</template>

<script>
import { User, Smile, Edit2, FileText, BadgeDollarSign } from "lucide-vue-next";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { auth, fbstore } from "../firebaseConfig";
import { useUserStore } from "@/stores/user";

export default {
  name: "MyPage",
  components: {
    User,
    Smile,
    Edit2,
    FileText,
    BadgeDollarSign,
  },
  data() {
    return {
      user: null,
      isEditing: false,
      editedUser: null,
      userPosts: [], // ✅ 내가 작성한 게시글
      isLoadingPosts: false, // ✅ 로딩 상태 추가
      userStore: null,
      purchaseHistory: [],
      isLoadingPurchases: false,
    };
  },
  created() {
    this.userStore = useUserStore();
  },
  methods: {
    // ✅ 프로필 수정 시작
    startEditing() {
      this.isEditing = true;
      this.editedUser = { ...this.user };
    },

    // ✅ Firestore에 정보 저장
    async saveChanges() {
      const uid = auth.currentUser?.uid;
      if (!uid) return;

      try {
        await setDoc(doc(fbstore, "users", uid), this.editedUser, { merge: true });
        this.user = { ...this.editedUser };
        this.userStore.setUser(this.editedUser);
        this.isEditing = false;
        alert("정보가 저장되었습니다.");
      } catch (error) {
        console.error("저장 실패:", error);
        alert("오류가 발생했습니다.");
      }
    },

    cancelEditing() {
      this.isEditing = false;
      this.editedUser = null;
    },

    // ✅ 게시글 상세로 이동
    goToDetail(post) {
      if (post.type === "missing") {
        this.$router.push({ name: "missing-detail", params: { id: post.id } });
      } else {
        this.$router.push({ name: "sighting-detail", params: { id: post.id } });
      }
    },

    // ✅ 날짜 포맷
    formatDate(ts) {
      if (!ts) return "";
      const date = ts.toDate ? ts.toDate() : ts;
      return new Date(date).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
    // ✅ Firestore에서 내가 작성한 게시글 불러오기
    async fetchUserPosts(uid) {
      this.isLoadingPosts = true;
      const posts = [];

      try {
        // 🔹 실종 게시글
        const missingQ = query(
          collection(fbstore, "missingPosts"),
          where("uid", "==", uid),
          orderBy("createdAt", "desc")
        );
        const missingSnap = await getDocs(missingQ);
        missingSnap.forEach((docSnap) => {
          posts.push({ id: docSnap.id, type: "missing", ...docSnap.data() });
        });

        // 🔹 목격 게시글
        const sightQ = query(
          collection(fbstore, "sightPosts"),
          where("uid", "==", uid),
          orderBy("createdAt", "desc")
        );
        const sightSnap = await getDocs(sightQ);
        sightSnap.forEach((docSnap) => {
          posts.push({ id: docSnap.id, type: "sighting", ...docSnap.data() });
        });

        // 🔹 최신순 정렬
        posts.sort((a, b) => {
          const aTime = a.createdAt?.seconds || 0;
          const bTime = b.createdAt?.seconds || 0;
          return bTime - aTime;
        });

        this.userPosts = posts;
      } catch (err) {
        console.error("게시글 불러오기 실패:", err);
        alert("게시글 불러오는 중 오류가 발생했습니다.");
      } finally {
        this.isLoadingPosts = false; // ✅ 항상 false로 설정
      }
    },
    async fetchPurchaseHistory(uid) {
      this.isLoadingPurchases = true;

      try {
        const q = query(
          collection(fbstore, "buyers"),
          where("userId", "==", uid),
          orderBy("timestamp", "desc")
        );

        const snap = await getDocs(q);
        const history = [];

        snap.forEach(docSnap => {
          history.push({ id: docSnap.id, ...docSnap.data() });
        });

        this.purchaseHistory = history;
      } catch (err) {
        console.error("구매내역 로드 실패:", err);
        alert("구매내역을 불러오는 중 오류가 발생했습니다.");
      } finally {
        this.isLoadingPurchases = false;
      }
    },
    goToQRDetail(item) {
      if (!item || !item.lastQrId) {
        console.error("QR ID 없음:", item);
        alert("QR 코드 정보가 없습니다.");
        return;
      }

      this.$router.push({
        name: "user-info",
        params: { id: item.lastQrId }
      });
    }
  },
  mounted() {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const uid = currentUser.uid;
        try {
          // ✅ 유저 정보 불러오기
          const userRef = doc(fbstore, "users", uid);
          const snapshot = await getDoc(userRef);
          if (snapshot.exists()) {
            this.user = snapshot.data();
          }

          // ✅ 게시글 목록 불러오기
          await this.fetchUserPosts(uid);
          await this.fetchPurchaseHistory(uid);

        } catch (error) {
          console.error("유저 데이터 로드 실패:", error);
        }
      } else {
        console.log("로그인된 사용자 없음");
      }
    });
  },
  
};
</script>



<style scoped>
.mypage-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.card {
  border: 3px solid #D6CCC2;
  border-radius: 10px;
  padding: 20px;
  background-color: #fefefe;
  box-shadow: 0 2px 5px #EFE7DA;
  margin-bottom: 20px;
}

/* 편집 아이콘 위치 조정 */
.edit-icon {
  margin-left: auto;
  cursor: pointer;
  color: #666;
}

.card h2 {
  margin-bottom: 15px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-badge {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 12px;
  font-weight: bold;
  color: white;
  font-size: 14px;
  user-select: none;
}

.status-badge.ongoing {
  background-color: #51903B; /* 초록 */
}

.status-badge.completed {
  background-color: #6c757d; /* 회색 */
}

.edit-button {
  background: #EFE7DA;
  border: none;
  font-size: 12px;
  cursor: pointer;
  margin-left: auto;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
}

.edit-icon {
  width: 16px;
  height: 16px;
}

.icon {
  width: 20px;
  height: 20px;
  color: #A67C63;
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

.list-item:last-child {
  border-bottom: none;
}
.post-list {
  list-style: none;
  padding: 0;
}
.post-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: 0.2s;
}
.post-item:hover {
  background: #f0f8ff;
}
.post-type {
  color: #007aff;
  font-weight: bold;
}
.post-date {
  color: #888;
  font-size: 0.8rem;
}
</style>
