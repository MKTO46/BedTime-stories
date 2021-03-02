import firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyBuaW82Y35lEIbBQba5bMkewxFQtMgoxcI",
    authDomain: "project-72-bc5c7.firebaseapp.com",
    projectId: "project-72-bc5c7",
    storageBucket: "project-72-bc5c7.appspot.com",
    messagingSenderId: "209437605373",
    appId: "1:209437605373:web:9caee5b33b11665e41ed94"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default  firebase.firestore() 