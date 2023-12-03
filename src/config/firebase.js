// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FIREBASE,
  authDomain: "js09-1.firebaseapp.com",
  projectId: "js09-1",
  storageBucket: "js09-1.appspot.com",
  messagingSenderId: "403878214928",
  appId: "1:403878214928:web:ffef9fcf524422d171f995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)