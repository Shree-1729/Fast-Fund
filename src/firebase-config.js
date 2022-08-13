// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP7-ER6Y0DQ9R9qjKCZe1FdZAoNGybXL8",
  authDomain: "fury-a08ec.firebaseapp.com",
  projectId: "fury-a08ec",
  storageBucket: "fury-a08ec.appspot.com",
  messagingSenderId: "412178093044",
  appId: "1:412178093044:web:8a2f64303807436f051fa1",
  measurementId: "G-ZBMCYTDDG4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getFirestore(app);
