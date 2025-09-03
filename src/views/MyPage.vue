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
        <p><strong>이름:</strong>
        <template v-if="isEditing">
            <input v-model="editedUser.name" />
          </template>
          <template v-else>
           {{ user?.name }}
           </template>
          </p>
        <p><strong>전화번호:</strong>
        <template v-if="isEditing">
            <input v-model="editedUser.phone" />
          </template>
          <template v-else>
           {{ user?.phone }}
          </template>
           </p>
        <p><strong>계좌번호:</strong>
        <template v-if="isEditing">
            <input v-model="editedUser.account" />
          </template>
          <template v-else>
           {{ user?.account }}
          </template>
           </p>
        <p><strong>은행:</strong>
        <template v-if="isEditing">
            <input v-model="editedUser.bank" />
          </template>
          <template v-else>
           {{ user?.bank }}
          </template>
           </p>
      </div>

      <!-- 반려동물 정보 카드 -->
      <div class="card">
        <h2>
          <PawPrint class="icon" />
          내 반려동물
        </h2>
        <ul>
          <li v-for="pet in user.pets" :key="pet.id" style="margin-bottom: 8px;">
            <strong>{{ pet.name }}</strong> ({{ pet.species }}, {{ pet.age }}살)
          </li>
        </ul>
      </div>

      <!-- 작성한 게시글 관리 카드 -->
      <div class="card">
        <h2>
          <FileText class="icon" />
          작성한 게시글 관리
        </h2>
        <ul v-if="user.posts && user.posts.length > 0" class="list">
          <li v-for="post in user.posts" :key="post.id" class="list-item">
            <strong>{{ post.title }}</strong>
            <span
              :class="['status-badge', post.status === '진행중' ? 'ongoing' : 'completed']"
              style="margin-left: 12px;"
            >
              {{ post.status }}
            </span>
          </li>
        </ul>
        <p v-else>작성한 게시글이 없습니다.</p>
      </div>

      <!-- 사례금 정보 카드 -->
      <div class="card" v-if="user.reward">
        <h2>
          <BadgeDollarSign class="icon" />
          사례금 정보
        </h2>
        <p><strong>사례금 액수:</strong> {{ user.reward.amount.toLocaleString() }} 원</p>
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
import { User, Smile, Edit2, PawPrint, FileText, BadgeDollarSign } from "lucide-vue-next";
import { onValue, ref as dbRef, set } from "firebase/database";
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from '@/stores/user' 


export default {
  name: "MyPage",
  components: {
    User,
    Smile,
    Edit2,
    PawPrint,
    FileText,
    BadgeDollarSign,
  },
    created() {
    this.userStore = useUserStore();
  },
  data() {
    return {
      user: null,
      isEditing: false,
      editedUser: null,
    };
  },
  methods: {
    startEditing() {
      this.isEditing = true;
      this.editedUser = { ...this.user };
    },
    async saveChanges() {
      const uid = auth.currentUser?.uid;
      if (!uid) return;

      try {
        await set(dbRef(db, `users/${uid}`), this.editedUser);

        this.user = { ...this.editedUser };
        this.userStore.setUser(this.editedUser); // store 갱신
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
  },
  mounted() {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const uid = currentUser.uid;
        const userRef = dbRef(db, `users/${uid}`);

        onValue(userRef, (snapshot) => {
          if (snapshot.exists()) {
            this.user = snapshot.val();
          } else {
            console.log("No user data found.");
          }
        });
      } else {
        console.log("User not logged in.");
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
</style>
