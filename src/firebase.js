// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl0cDFMMBc4VWVYBnvlaJXwCUcLCb_rvg",
  authDomain: "react-fb-out.firebaseapp.com",
  projectId: "react-fb-out",
  storageBucket: "react-fb-out.appspot.com",
  messagingSenderId: "190615993810",
  appId: "1:190615993810:web:22b3ac177318969c18dc0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)