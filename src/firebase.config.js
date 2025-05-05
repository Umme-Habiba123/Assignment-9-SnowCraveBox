// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcazdUpKVAfyZx-noNJwELNxGlb9RaIL8",
  authDomain: "assignment-9-c808d.firebaseapp.com",
  projectId: "assignment-9-c808d",
  storageBucket: "assignment-9-c808d.firebasestorage.app",
  messagingSenderId: "690522186113",
  appId: "1:690522186113:web:e771d00c50aed64a80c880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);