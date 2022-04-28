// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd_lTnhLs7Tr1_VbIgWiJ0_kFcrNjOLpw",
  authDomain: "firecontactapp.firebaseapp.com",
  databaseURL: "https://firecontactapp-default-rtdb.firebaseio.com",
  projectId: "firecontactapp",
  storageBucket: "firecontactapp.appspot.com",
  messagingSenderId: "332728701423",
  appId: "1:332728701423:web:544530c8f63d9d15fb261a",
  measurementId: "G-9ETGYMYMDG"
};



// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

