import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default firebase.firestore();
