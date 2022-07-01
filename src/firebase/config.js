// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf7nvHoh4bTMbtdKTI4Drqa23E0aSSEV4",
  authDomain: "moin-di.firebaseapp.com",
  projectId: "moin-di",
  storageBucket: "moin-di.appspot.com",
  messagingSenderId: "38295157016",
  appId: "1:38295157016:web:04c8be3fe82df728e0866d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=> {
    return app;
}