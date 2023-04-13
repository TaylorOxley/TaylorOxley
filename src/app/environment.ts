export const environment = {
    production: false
    };

 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3x52ageaQQwuaRvSpbaH2pQRnCEjWCLk",
  authDomain: "hollister-app-fb5ab.firebaseapp.com",
  databaseURL: "https://hollister-app-fb5ab-default-rtdb.firebaseio.com",
  projectId: "hollister-app-fb5ab",
  storageBucket: "hollister-app-fb5ab.appspot.com",
  messagingSenderId: "326212044252",
  appId: "1:326212044252:web:46c4221ff467f1659abb19",
  measurementId: "G-VMFMRFZS6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);