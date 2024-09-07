// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY,
  authDomain: "fir-blog-94958.firebaseapp.com",
  projectId: "fir-blog-94958",
  storageBucket: "fir-blog-94958.appspot.com",
  messagingSenderId: "331737365596",
  appId: "1:331737365596:web:f760dbf4d6d84214327a99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const provider=new GoogleAuthProvider
export const storage=getStorage()
export const db=getFirestore()
