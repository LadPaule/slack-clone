import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyC92THqWI3TjQN2jjiURAo2PEjPUWI_Oho",
  authDomain: "scu-forum.firebaseapp.com",
  projectId: "scu-forum",
  storageBucket: "scu-forum.appspot.com",
  messagingSenderId: "474948613541",
  appId: "1:474948613541:web:5b86d6b1ae6c20524d244c",
});


// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
const db = getFirestore();
const provider = new GoogleAuthProvider();

export { provider, db, firebaseApp };
