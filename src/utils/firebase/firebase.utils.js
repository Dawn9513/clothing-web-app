// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBec-Nn9gg9iVZuhVMIJ5mFhJrpPNbDbWs",
  authDomain: "one-clothing-db.firebaseapp.com",
  projectId: "one-clothing-db",
  storageBucket: "one-clothing-db.appspot.com",
  messagingSenderId: "447787644630",
  appId: "1:447787644630:web:4b341414337a83af59bb77"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);