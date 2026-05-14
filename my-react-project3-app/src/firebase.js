// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiFRXoXKHmrs9JtDzXDbV6XAFDYVSzvhU",
  authDomain: "gospel-blooms-kitengela.firebaseapp.com",
  projectId: "gospel-blooms-kitengela",
  storageBucket: "gospel-blooms-kitengela.firebasestorage.app",
  messagingSenderId: "130272412548",
  appId: "1:130272412548:web:37858ff96c3dca8e5293d1",
  measurementId: "G-TFDT2LC7SR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };