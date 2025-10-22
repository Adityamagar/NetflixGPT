// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMQDFD9tkIuJEH1iU-iehuLlDEtbgjNMc",
  authDomain: "netflixgpt-9aac4.firebaseapp.com",
  projectId: "netflixgpt-9aac4",
  storageBucket: "netflixgpt-9aac4.firebasestorage.app",
  messagingSenderId: "1091582735847",
  appId: "1:1091582735847:web:55c5a19ff165fc07263942",
  measurementId: "G-H6EYJBGW9D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
