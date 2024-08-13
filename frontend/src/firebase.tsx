// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3e1FtAzV2eQqd9h3-kF6xozvf26zMwl4",
  authDomain: "videostore-4c40b.firebaseapp.com",
  projectId: "videostore-4c40b",
  storageBucket: "videostore-4c40b",
  messagingSenderId: "647934314532",
  appId: "1:647934314532:web:578f88ade853fb1b8ab0b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth: Auth = getAuth(app);

export default app;
