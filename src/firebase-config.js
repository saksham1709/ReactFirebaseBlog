// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUgjiXVH2VgyLeJQlnYeUeyiq8k3BwuoE",
  authDomain: "reactblog-84238.firebaseapp.com",
  projectId: "reactblog-84238",
  storageBucket: "reactblog-84238.appspot.com",
  messagingSenderId: "489924824565",
  appId: "1:489924824565:web:b5b4f9991f7bd1b74224bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();