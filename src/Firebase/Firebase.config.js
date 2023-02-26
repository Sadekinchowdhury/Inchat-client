// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1rXVtGTAmeTQuq3wzWRmPGO-RdGD4Xb4",
    authDomain: "inchat-35188.firebaseapp.com",
    projectId: "inchat-35188",
    storageBucket: "inchat-35188.appspot.com",
    messagingSenderId: "199930562403",
    appId: "1:199930562403:web:fbeebde3d0cb8d6f9e7556",
    measurementId: "G-124L0V2B7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;