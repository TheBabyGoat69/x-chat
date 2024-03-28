// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import 'dotenv/config'

const firebaseConfig = {
  apiKey: "AIzaSyCcdmkRFt2khr5-N1YARngIGWzfFxH9ps8",
  authDomain: "x-chat-8b98a.firebaseapp.com",
  projectId: "x-chat-8b98a",
  storageBucket: "x-chat-8b98a.appspot.com",
  messagingSenderId: "858479624058",
  appId: "1:858479624058:web:49b51b0f732fd65fb660c3",
  measurementId: "G-K312XQ4YTP",
};
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
// };

//  const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: String(process.env.NEXT_PRIVATE_AUTH_DOMAIN),
//   projectId: "process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID",
//   storageBucket: "process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
//   messagingSenderId: "process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
//   appId: "process.env.NEXT_PUBLIC_FIREBASE_APP_ID",
//   measurementId: "process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID",
// };







const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
