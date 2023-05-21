import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBDASDZolprRJ3V3hdMTO4YcrDIgPCl-MM",
  authDomain: "linkedin-mhvats.firebaseapp.com",
  projectId: "linkedin-mhvats",
  storageBucket: "linkedin-mhvats.appspot.com",
  messagingSenderId: "628085535642",
  appId: "1:628085535642:web:ab0d9bb4625cdd63a7c023",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
