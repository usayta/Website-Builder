import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aiwebsitebuilder-24c53.firebaseapp.com",
  projectId: "aiwebsitebuilder-24c53",
  storageBucket: "aiwebsitebuilder-24c53.firebasestorage.app",
  messagingSenderId: "1005048747881",
  appId: "1:1005048747881:web:df5b85c5be6f8732e18ff8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };