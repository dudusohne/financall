import {
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { User } from "~~/types";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";


export function initUser() {
  const auth = getAuth();

  const userCookie = useCookie<User>("userCookie");

  onAuthStateChanged(auth, (user) => (userCookie.value = user));

  // checkIfUserExists(userCookie.value);
}

export async function logIn() {
  await signInWithPopup(getAuth(), new GoogleAuthProvider());
}

export async function logOut() {
  await signOut(getAuth());
}


