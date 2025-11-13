import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
apiKey: "AIzaSyBb_In4DHiv7vaean8kGWNWpsbsRzULTM8",
authDomain: "pokeapi-c69f2.firebaseapp.com",
projectId: "pokeapi-c69f2",
storageBucket: "pokeapi-c69f2.firebasestorage.app",
messagingSenderId: "947648807822",
appId: "1:947648807822:web:5086568ccb2860a00b1adf"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };