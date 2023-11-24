import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

export const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "codedragi-98b4a.firebaseapp.com",
    projectId: "codedragi-98b4a",
    storageBucket: "codedragi-98b4a.appspot.com",
    messagingSenderId: "152074744674",
    appId: "1:152074744674:web:982dc5f57a50a53be0723b",
    measurementId: "G-B7RXT6474P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
