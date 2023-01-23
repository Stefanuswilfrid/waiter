// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm20FR4NuEeY9IkoBSrw_R9VxyP5eMcWM",
  authDomain: "fir-react-e1938.firebaseapp.com",
  projectId: "fir-react-e1938",
  storageBucket: "fir-react-e1938.appspot.com",
  messagingSenderId: "869977043761",
  appId: "1:869977043761:web:dc682cbcf7d487ba4db610",
  measurementId: "G-ZQ8F5D78EG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
