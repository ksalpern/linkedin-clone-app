import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD2mSDzynjAmRxH2hYWu-Zo2YMSZpUEHfc",
    authDomain: "linkedin-clone-app-20e1c.firebaseapp.com",
    projectId: "linkedin-clone-app-20e1c",
    storageBucket: "linkedin-clone-app-20e1c.appspot.com",
    messagingSenderId: "301671720005",
    appId: "1:301671720005:web:2b1a428f49b671030f2f2c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
