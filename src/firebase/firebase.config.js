// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeiQLQKdiXy2U7GKLDH-EfluNuFZ3T3I0",
  authDomain: "tourism-management-clien-3a227.firebaseapp.com",
  projectId: "tourism-management-clien-3a227",
  storageBucket: "tourism-management-clien-3a227.firebasestorage.app",
  messagingSenderId: "887090794501",
  appId: "1:887090794501:web:c66498770b1a73a9e40c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth