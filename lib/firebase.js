// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcdmkRFt2khr5-N1YARngIGWzfFxH9ps8",
  authDomain: "x-chat-8b98a.firebaseapp.com",
  projectId: "x-chat-8b98a",
  storageBucket: "x-chat-8b98a.appspot.com",
  messagingSenderId: "858479624058",
  appId: "1:858479624058:web:49b51b0f732fd65fb660c3",
  measurementId: "G-K312XQ4YTP",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
