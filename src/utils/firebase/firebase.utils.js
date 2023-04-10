// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIB68V_33JIe9yn0r-qo-sG9eMVCrtXvM",
  authDomain: "sk-clothing-6e728.firebaseapp.com",
  projectId: "sk-clothing-6e728",
  storageBucket: "sk-clothing-6e728.appspot.com",
  messagingSenderId: "907240104281",
  appId: "1:907240104281:web:982e68f8a607693a2dac48"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// creat db
export const db = getFirestore();

export const createUserDocumentFormAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  // 检查数据是否存在
  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createAt
      });
    }catch(error){
      console.log('创建用户报错',error.message);
    }
  }

  return userDocRef;
}