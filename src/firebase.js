// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "react-agustin-92127.firebaseapp.com",
    projectId: "react-agustin-92127",
    storageBucket: "react-agustin-92127.firebasestorage.appspot.com",
    messagingSenderId: "120170926061",
    appId: "1:120170926061:web:c0b8e85dc5bf846612e1e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getItems() {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return items;
}
