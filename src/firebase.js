import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMyJJVEnW9clLdN1Jw0GL--UcsX1zTmNs",
  authDomain: "saylani-discount-store-6cbc4.firebaseapp.com",
  projectId: "saylani-discount-store-6cbc4",
  storageBucket: "saylani-discount-store-6cbc4.appspot.com",
  messagingSenderId: "950462690674",
  appId: "1:950462690674:web:7080940c9dd961ac3ad9eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app)