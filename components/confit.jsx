// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmTAYCVhtBoJnyles0QSb709r7RjFOhVc",
  authDomain: "firestore-crud-c5bae.firebaseapp.com",
  projectId: "firestore-crud-c5bae",
  storageBucket: "firestore-crud-c5bae.appspot.com",
  messagingSenderId: "859728630391",
  appId: "1:859728630391:web:3e2689ace3650f2d542c72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initiaiye firestor
export const db = getFirestore(app);