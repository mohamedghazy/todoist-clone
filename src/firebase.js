// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4e8oP_4rBM9bYa6hV4Fg9LQCiCbRqxhk",
  authDomain: "todoist-4c7d4.firebaseapp.com",
  databaseURL: "https://todoist-4c7d4.firebaseio.com",
  projectId: "todoist-4c7d4",
  storageBucket: "todoist-4c7d4.appspot.com",
  messagingSenderId: "544765089249",
  appId: "1:544765089249:web:ca954c944b5133e411eea0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
