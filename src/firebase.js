import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDM6p2Sug1CGkyHgFBIvwFqciLP16BPmw0",
    authDomain: "chatterbox-cd26a.firebaseapp.com",
    projectId: "chatterbox-cd26a",
    storageBucket: "chatterbox-cd26a.appspot.com",
    messagingSenderId: "736639463145",
    appId: "1:736639463145:web:09e7b71e74f5381e944a78",
    measurementId: "G-79BYCRXK88"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();