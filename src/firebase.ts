import { initializeApp } from "firebase/app"
import { getStorage } from '@firebase/storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOS-Skmvt89BeHFQhY8M-Xkdu2TJqbXug",
  authDomain: "apptesanos.firebaseapp.com",
  projectId: "apptesanos",
  storageBucket: "gs://apptesanos.appspot.com",
  messagingSenderId: "1051682356181",
  appId: "1:1051682356181:web:b56f86fac534f2505a9b5c"
};

initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const storage = getStorage()
const db = getFirestore(app)


export {
  storage,
  db
}