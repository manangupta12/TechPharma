import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBHWzCmMN0QZ9ix4drexdf-mOrUERa_DH8",
    authDomain: "doctor-tarp.firebaseapp.com",
    databaseURL: "https://doctor-tarp.firebaseio.com",
    projectId: "doctor-tarp",
    storageBucket: "doctor-tarp.appspot.com",
    messagingSenderId: "589544158461",
    appId: "1:589544158461:web:03786af4dcd86474453a94",
    measurementId: "G-6X3YGJWPF9"
  };
  firebase.initializeApp(config);
  
export default firebase 
