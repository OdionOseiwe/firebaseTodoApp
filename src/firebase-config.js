
// //// install firebase and get the  config from from firebase docs

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD4Yxu5cnDnIcgxSVLVRSj0WXfWDSA-CEo",
  authDomain: "todo-app-cp-17b07.firebaseapp.com",
  projectId: "todo-app-cp-17b07",
  storageBucket: "todo-app-cp-17b07.appspot.com",
  messagingSenderId: "151549617392",
  appId: "1:151549617392:web:6d065eab2e278e05224e35",
  measurementId: "G-V37NSFTVT5"
}) 


const db = firebaseApp.firestore();

export default db;