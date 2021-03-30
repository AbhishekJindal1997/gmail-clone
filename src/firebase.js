import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa4FFCw6oJYSd1dyehDq1CLP2cTmhQyks",
  authDomain: "clone-8d98b.firebaseapp.com",
  projectId: "clone-8d98b",
  storageBucket: "clone-8d98b.appspot.com",
  messagingSenderId: "213702358571",
  appId: "1:213702358571:web:7f7fb0a5f8f5d994901c6e",
  measurementId: "G-846DRX7FJQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
