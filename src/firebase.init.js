// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDg4fDHat0M8s7Juevw0BQa6HXQ5KEBUDw",
    authDomain: "laptop-house-54e56.firebaseapp.com",
    projectId: "laptop-house-54e56",
    storageBucket: "laptop-house-54e56.appspot.com",
    messagingSenderId: "541620248340",
    appId: "1:541620248340:web:5eee33ffa8435f2353ac01"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;