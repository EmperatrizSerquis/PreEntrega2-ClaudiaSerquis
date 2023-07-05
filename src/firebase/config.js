// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzn82A33Vt2pcUegjt6W3wbFHBxQI4eIY",
  authDomain: "react-e271c.firebaseapp.com",
  projectId: "react-e271c",
  storageBucket: "react-e271c.appspot.com",
  messagingSenderId: "197487154698",
  appId: "1:197487154698:web:7aec3332428f8ae8f471f3",
  measurementId: "G-BL0909LH51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
/* const analytics = getAnalytics(app); */