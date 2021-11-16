
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDEsPXb3YeBYex2XGdp6SX0ViCg3YKGkLQ",
    authDomain: "challenge-b1643.firebaseapp.com",
    projectId: "challenge-b1643",
    storageBucket: "challenge-b1643.appspot.com",
    messagingSenderId: "290337271899",
    appId: "1:290337271899:web:a0f3e2cbe4fee72308cf7e",
    measurementId: "G-YKZD0XMDBM"
  };

  const firebaseApp = firebase.intializeApp(firebaseConfig); //intializing firebaseApp
  
  const db = firebaseApp.firestore(); //intializing database variable
  const auth = firebase.auth();

  export{ db, auth};