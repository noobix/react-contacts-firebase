// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKeij4TCx64oOBGofmQ28HRKCtHw-Fi6o",
  authDomain: "contacts-app-f3a7b.firebaseapp.com",
  projectId: "contacts-app-f3a7b",
  storageBucket: "contacts-app-f3a7b.appspot.com",
  messagingSenderId: "355809317835",
  appId: "1:355809317835:web:7932733f488fe570ba9c4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;