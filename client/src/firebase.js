// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-9ebc1.firebaseapp.com",
  projectId: "mern-auth-9ebc1",
  storageBucket: "mern-auth-9ebc1.appspot.com",
  messagingSenderId: "84177339432",
  appId: "1:84177339432:web:da099b5f1800f08b34a11d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);