// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4MwSmfD8W7pjOjuHd-zJEkGccn6v6te0",
  authDomain: "alex-rayer-portfolio.firebaseapp.com",
  projectId: "alex-rayer-portfolio",
  storageBucket: "alex-rayer-portfolio.appspot.com",
  messagingSenderId: "332995914005",
  appId: "1:332995914005:web:b47b6022d215203685211c",
  measurementId: "G-TJP5CDYQWQ"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const firestore = getFirestore(App);
