import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJBylIzNFadtG4YiOO7MQtTeUdtt6iSlo",
  authDomain: "frist-db-firebase.firebaseapp.com",
  databaseURL: "https://frist-db-firebase-default-rtdb.firebaseio.com",
  projectId: "frist-db-firebase",
  storageBucket: "frist-db-firebase.appspot.com",
  messagingSenderId: "454284675414",
  appId: "1:454284675414:web:e1db832bf7f5ca7b816ef7",
  measurementId: "G-934QE99YZP"
};

export const app = initializeApp(firebaseConfig);
