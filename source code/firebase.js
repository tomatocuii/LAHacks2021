import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyB3Y8z3nbwbIAj6tOTfBXO8AkvzogTHRh8",
  authDomain: "pugchamp-1312a.firebaseapp.com",
  projectId: "pugchamp-1312a",
  storageBucket: "pugchamp-1312a.appspot.com",
  messagingSenderId: "536762718841",
  appId: "1:536762718841:web:e578c221837e3f63c612a8",
  measurementId: "G-W298FTGKEE"
};
firebase.initializeApp(config);

const _db = firebase.firestore();

export default firebase;