//INFO EXTRAIDA DE FIREBASE PARA AUTENTICAR O CONSUMIR SERVICIO

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCagwUjUJ9psPtsXXhB9dKgO86a8JQwIGA",
  authDomain: "app1-38549.firebaseapp.com",
  projectId: "app1-38549",
  storageBucket: "app1-38549.appspot.com",
  messagingSenderId: "646996527779",
  appId: "1:646996527779:web:51e5d6d3acbbe37a1b4d16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);