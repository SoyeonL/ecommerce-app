// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIah3VgJK_PICDKG6PRQ7tF46g4mnABfA",
  authDomain: "ecommerce-db-d3bc0.firebaseapp.com",
  projectId: "ecommerce-db-d3bc0",
  storageBucket: "ecommerce-db-d3bc0.appspot.com",
  messagingSenderId: "739507583776",
  appId: "1:739507583776:web:4ad803c4dfe69e230d7545",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
