
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYKkxv5NbDUj2HwsD4TtX2OaicaZ0pkOI",
  authDomain: "mernai-39d84.firebaseapp.com",
  projectId: "mernai-39d84",
  storageBucket: "mernai-39d84.firebasestorage.app",
  messagingSenderId: "548084731571",
  appId: "1:548084731571:web:b5c5b2c639bf7b03fd6ac6",
  measurementId: "G-ZNTB218BH3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };