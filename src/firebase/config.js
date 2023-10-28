import { initializeApp } from "firebase/app";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr9Q97NIjzcaQdhQWoSGKH1SFaNcvnYSw",
  authDomain: "lanfvet.firebaseapp.com",
  databaseURL: "https://lanfvet-default-rtdb.firebaseio.com",
  projectId: "lanfvet",
  storageBucket: "lanfvet.appspot.com",
  messagingSenderId: "771853011208",
  appId: "1:771853011208:web:50da89bae1662ed2d144bd"
};

export const app = initializeApp(firebaseConfig);
