// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWBKipxIW1IsiMFODeDEdikWJLXBA9g9I",
  authDomain: "university-placement-portal.firebaseapp.com",
  projectId: "university-placement-portal",
  storageBucket: "university-placement-portal.firebasestorage.app",
  messagingSenderId: "762805371032",
  appId: "1:762805371032:web:aef290d987a26402f750ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;