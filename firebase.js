import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {initializeFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCQSyDoVCaQLD8ewygXlWyL5XbbVzvj1VM",
  authDomain: "ez-bulletin.firebaseapp.com",
  projectId: "ez-bulletin",
  storageBucket: "ez-bulletin.appspot.com",
  messagingSenderId: "10727486680",
  appId: "1:10727486680:web:d178ababe6f275d48093ad",
  measurementId: "G-WZ98WV2YPV"
};

// Initialize Firebase
 let app;
 
// if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  
const auth = firebase.auth()
// const db = firebase.firestore()

  firebase.firestore().settings({ experimentalForceLongPolling: true });


 export const firestore = firebase.firestore();
 export {app};
export { auth};
