import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-0hul7ma55Y5QRHUqDRifwfdWNW35lJs",
  authDomain: "flipkart-clone-14047.firebaseapp.com",
  projectId: "flipkart-clone-14047",
  storageBucket: "flipkart-clone-14047.firebasestorage.app",
  messagingSenderId: "792357974428",
  appId: "1:792357974428:web:cade68e5aea0d378e25859"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);