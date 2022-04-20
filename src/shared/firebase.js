import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAjGMOJ8POYWHzMKU506JwJtlovNAzENtM',
  authDomain: 'react-magazine-93d52.firebaseapp.com',
  projectId: 'react-magazine-93d52',
  storageBucket: 'react-magazine-93d52.appspot.com',
  messagingSenderId: '556362849707',
  appId: '1:556362849707:web:4e478b3b7908745990c6ee',
  measurementId: 'G-7FY1J5ECP8',
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export { auth, apiKey, firestore, storage, realtime };
