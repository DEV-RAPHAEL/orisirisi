
import firebase from "firebase/app";
import "firebase/firestore";

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFeAei85gOoanVRh8HGloSLwWV0FGvLPE",
  authDomain: "code-cube-app.firebaseapp.com",
  projectId: "code-cube-app",
  storageBucket: "code-cube-app.appspot.com",
  messagingSenderId: "90039267",
  appId: "1:90039267:web:1ca9b28d091b1459c776d6",
  measurementId: "G-Z3W2P82J5S"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db
