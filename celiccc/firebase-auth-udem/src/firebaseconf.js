import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBWeVepbboBdIECAGq_7ufiVr8lEVp7FGM",
  authDomain: "react-proyect-fa224.firebaseapp.com",
  projectId: "react-proyect-fa224",
  storageBucket: "react-proyect-fa224.appspot.com",
  messagingSenderId: "409740681407",
  appId: "1:409740681407:web:bf13e805abef56bd3ae60a",
  measurementId: "G-6B3E71R7YE"
};

// Initialize Firebase

const firebaseAppInstance = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseAppInstance);

