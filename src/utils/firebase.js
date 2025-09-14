// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxY6YWHliDFQ4jAC_FgOTc0tvt3nvf1M8",
  authDomain: "netflixpro-a6184.firebaseapp.com",
  projectId: "netflixpro-a6184",
  storageBucket: "netflixpro-a6184.firebasestorage.app",
  messagingSenderId: "395903101147",
  appId: "1:395903101147:web:ab7ae54d5292f9aea9c4fe",
  measurementId: "G-SVCBR79BM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);