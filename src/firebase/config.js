// import firebase from 'firebase';
import * as firebase from "firebase/app";
// import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCBypOT0nxUCak94ZQN3TkYhS930ZlUa-s",
    authDomain: "fir-67f6b.firebaseapp.com",
    projectId: "fir-67f6b",
    storageBucket: "fir-67f6b.appspot.com",
    messagingSenderId: "366028959684",
    appId: "1:366028959684:web:c695276c0476162070be91",
    measurementId: "G-BFVCMQED33"
  };


 export const fireBase = firebase.initializeApp(firebaseConfig)