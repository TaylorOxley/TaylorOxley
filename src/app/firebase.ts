import firebase from "firebase/app";
import "firebase/firestore";

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

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
