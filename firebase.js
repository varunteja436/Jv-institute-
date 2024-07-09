// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDLWwQkrUCC3rl87p5GO72ONvFscJPr1QA",
  authDomain: "data-ee515.firebaseapp.com",
  databaseURL: "https://data-ee515-default-rtdb.firebaseio.com",
  projectId: "data-ee515",
  storageBucket: "data-ee515.appspot.com",
  messagingSenderId: "909556280514",
  appId: "1:909556280514:web:5e027940d547cb9bd65f5b",
  measurementId: "G-ZFNC5GGSE7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
