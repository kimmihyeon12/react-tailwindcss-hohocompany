import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDD9osA1iI2rJEh3EpXBh6lyY3zr8_vVrk",
  authDomain: "hohocompany-c7698.firebaseapp.com",
  projectId: "hohocompany-c7698",
  storageBucket: "hohocompany-c7698.appspot.com",
  messagingSenderId: "1054838764511",
  appId: "1:1054838764511:web:dec7f9c2eb4e749a714a6a",
  measurementId: "G-Z8VCV7RNK0",
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
