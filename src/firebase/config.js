import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPrAe6n6JF3UoMy_NEbzfB9HrPUZlSwmQ",
    authDomain: "tikkingnotes.firebaseapp.com",
    databaseURL: "https://tikkingnotes.firebaseio.com",
    projectId: "tikkingnotes",
    storageBucket: "tikkingnotes.appspot.com",
    messagingSenderId: "941694897398",
    appId: "1:941694897398:web:175c7c779071b3e44670d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firestore = firebase.firestore();

  export { firestore }