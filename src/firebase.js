import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDwyZ1saaB18vhTgTx4EB5vaH8vOtTZakM",
  authDomain: "sick-chat-app.firebaseapp.com",
  databaseURL: "https://sick-chat-app.firebaseio.com",
  projectId: "sick-chat-app",
  storageBucket: "sick-chat-app.appspot.com",
  messagingSenderId: "563030882120",
  appId: "1:563030882120:web:5200eb7cc53de1563ae57d"
};

firebase.initializeApp(firebaseConfig);

let database = firebase.firestore();

export default database;
