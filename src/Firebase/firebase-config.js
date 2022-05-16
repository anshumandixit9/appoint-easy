import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCNMgU7rvsvVjAFVebl62svQ6lLfAae-04",
  authDomain: "appoint-easy.firebaseapp.com",
  projectId: "appoint-easy",
  storageBucket: "appoint-easy.appspot.com",
  messagingSenderId: "344376587026",
  appId: "1:344376587026:web:b156958469f6bda4e9f9cb",
  measurementId: "G-8FMGYTRY3B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function signUp(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}