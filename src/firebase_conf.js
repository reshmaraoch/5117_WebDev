// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANSz0F2x6UxdI7O318S5NicN9Y8D9lDPs",
  authDomain: "webdev-a2ee3.firebaseapp.com",
  projectId: "webdev-a2ee3",
  storageBucket: "webdev-a2ee3.firebasestorage.app",
  messagingSenderId: "937703972687",
  appId: "1:937703972687:web:a276027831020945c82f3a",
  measurementId: "G-LKLW6WY6RH"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp)