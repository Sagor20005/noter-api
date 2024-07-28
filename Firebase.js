const admin = require("firebase-admin");
const firebase = require("firebase")
const firebaseConfig = {
  apiKey: "AIzaSyDeVZFUHESuN5rp87yL-dZCmZbGyQvGrU8",
  authDomain: "note-app-ce6a3.firebaseapp.com",
  projectId: "note-app-ce6a3",
  storageBucket: "note-app-ce6a3.appspot.com",
  messagingSenderId: "1084508980723",
  appId: "1:1084508980723:web:05a2bbd1d458793774be86",
  measurementId: "G-2924M5X4SD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const users = db.collection("users");
const notes = db.collection("notes");
const fdb = {
  users:users,
  notes:notes
}
module.exports = fdb;