import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAbGXEAuLskXCFuNvFq2pQnnbbjFioFq3U",
  authDomain: "crwn-4e2fa.firebaseapp.com",
  databaseURL: "https://crwn-4e2fa.firebaseio.com",
  projectId: "crwn-4e2fa",
  storageBucket: "crwn-4e2fa.appspot.com",
  messagingSenderId: "543950488891",
  appId: "1:543950488891:web:06b7c1cd63d9495058a31e",
  measurementId: "G-267D6Q9VVW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
