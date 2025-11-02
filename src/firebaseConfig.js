// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIv28FhqZ0V72njaIWOYCMCylZuUtRmO0",
  authDomain: "capstone-presentation-9bf34.firebaseapp.com",
  projectId: "capstone-presentation-9bf34",
  storageBucket: "capstone-presentation-9bf34.firebasestorage.app",
  messagingSenderId: "762241221303",
  appId: "1:762241221303:web:6d3d2280ddcc7d85570332",
  measurementId: "G-DJ8HFTQ3M5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const storage = getStorage(app)
const fbstore = getFirestore(app);

export { auth, storage, fbstore }