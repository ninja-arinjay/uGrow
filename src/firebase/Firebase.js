import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getStorage } from "firebase/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAwYo-OXHmSyr49mBowPpMWmQWS8y9hL9w",
  authDomain: "ugrow-2f6c7.firebaseapp.com",
  projectId: "ugrow-2f6c7",
  storageBucket: "ugrow-2f6c7.appspot.com",
  messagingSenderId: "160656132451",
  appId: "1:160656132451:web:74d6edd5e66870ebd5eb56",
  measurementId: "G-XCMK0KB7D1"
});

export const storage = getStorage(firebaseApp);
export default firebaseApp;
