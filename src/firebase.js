import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAS6khmipLUlfclsUNdKh-1k6TYVNL63m0",
  authDomain: "resturant-type-shit.firebaseapp.com",
  projectId: "resturant-type-shit",
  storageBucket: "resturant-type-shit.appspot.com",
  messagingSenderId: "543673559256",
  appId: "1:543673559256:web:3780ef8b29162ac1948fad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}