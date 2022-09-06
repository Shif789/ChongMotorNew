// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVrrPEqlWAT1Nc6ItxPk0rhpP4AFQY_mo",
  authDomain: "chong-motor-97141.firebaseapp.com",
  projectId: "chong-motor-97141",
  storageBucket: "chong-motor-97141.appspot.com",
  messagingSenderId: "582146901931",
  appId: "1:582146901931:web:5ddfb1da9f3a7a16a4f4ee",
};

// Initialize Firebase
/*let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
export { auth };*/

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
