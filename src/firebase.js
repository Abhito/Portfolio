// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore'

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYKuDUdbhp3HyF2uzLtvpOCGT6SLKa-k8",
    authDomain: "react-portfolio-dashboar-1666e.firebaseapp.com",
    projectId: "react-portfolio-dashboar-1666e",
    storageBucket: "react-portfolio-dashboar-1666e.appspot.com",
    messagingSenderId: "427283131467",
    appId: "1:427283131467:web:cffba545bc0a82a315f1ce",
    measurementId: "G-CCTZBHNT2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);