// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZQqivXXDXHazP5kif9kSp_AZPzeWt9W8",
  authDomain: "perfume-626e9.firebaseapp.com",
  projectId: "perfume-626e9",
  storageBucket: "perfume-626e9.appspot.com",
  messagingSenderId: "493505504421",
  appId: "1:493505504421:web:aa218d63d1ec810c89994c",
  measurementId: "G-K6RH24V5C4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
