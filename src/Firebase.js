// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2QpTclqgJqkxRCYc1dIpiz9b-MCca2v4",
  authDomain: "chattle-79c24.firebaseapp.com",
  projectId: "chattle-79c24",
  storageBucket: "chattle-79c24.appspot.com",
  messagingSenderId: "1094177581113",
  appId: "1:1094177581113:web:d124eb353b9d24b46505e8"
};

// Initialize Firebase 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
