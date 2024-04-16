import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu8-Ij_3PxmZ6HddmA6M3q5Som5d9GPBM",
  authDomain: "podcast-platform-d3bf2.firebaseapp.com",
  projectId: "podcast-platform-d3bf2",
  storageBucket: "podcast-platform-d3bf2.appspot.com",
  messagingSenderId: "875730106571",
  appId: "1:875730106571:web:6d24db3bc162dd201a034e",
  measurementId: "G-Z06M7CX0M6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth,db,storage };