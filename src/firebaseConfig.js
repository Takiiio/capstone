// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB45W71QT5UfZoatfE2sNGJ8gInNP27yF4",
  authDomain: "capstone-12e6910598105066.firebaseapp.com",
  databaseURL: "https://capstone-12e6910598105066-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "capstone-12e6910598105066",
  storageBucket: "capstone-12e6910598105066.firebasestorage.app",
  messagingSenderId: "674117232169",
  appId: "1:674117232169:web:a3d3f00dbf0f5aa4419e38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const storage = getStorage(app)
const fbstore = getFirestore(app);

export { auth, storage, fbstore }