// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKsWtE5NKU8nd-He73kBd9Yxd8SN3PY08",
  authDomain: "react-firebase-ecommerce-e0106.firebaseapp.com",
  projectId: "react-firebase-ecommerce-e0106",
  storageBucket: "react-firebase-ecommerce-e0106.appspot.com",
  messagingSenderId: "925383737767",
  appId: "1:925383737767:web:f20d7b9c0ec235ac0b3682"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);