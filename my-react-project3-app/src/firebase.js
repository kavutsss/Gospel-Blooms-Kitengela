// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export { app };