import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABN7sOrTFpQEgPWp3M3p5w3iM8FLvPraI",
  authDomain: "ecomerce-neumaticos-imperium.firebaseapp.com",
  projectId: "ecomerce-neumaticos-imperium",
  storageBucket: "ecomerce-neumaticos-imperium.firebasestorage.app",
  messagingSenderId: "483911580107",
  appId: "1:483911580107:web:a4a09a803730eb1afe5e4e"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db