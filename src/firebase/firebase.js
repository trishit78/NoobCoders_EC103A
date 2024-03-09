import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBrdCQnGVdWN6yfiNvLkOEt3rvn9vNVRCQ",
//     authDomain: "fitclub-76edb.firebaseapp.com",
//     projectId: "fitclub-76edb",
//     storageBucket: "fitclub-76edb.appspot.com",
//     messagingSenderId: "479332189222",
//     appId: "1:479332189222:web:89b2b80776bf5f05b8d2e7"
//   };


  const firebaseConfig = {
    apiKey: "AIzaSyDRyJkHxl2eknkcdqJMPWO0yITCvBlyH9I",
    authDomain: "fitclub-devwrap.firebaseapp.com",
    projectId: "fitclub-devwrap",
    storageBucket: "fitclub-devwrap.appspot.com",
    messagingSenderId: "930699217564",
    appId: "1:930699217564:web:82fe5f5af9f4fbab053b59"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};


export const signOutUser = async() => await signOut(auth);


export const onAuthStateChangedListener = (callback) =>{
  onAuthStateChanged(auth,callback);
}
