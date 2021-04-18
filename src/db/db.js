import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDrLG_bwVYhcouP28I1SWtfy-uLXPzNJdw",
  authDomain: "reactshop-c2323.firebaseapp.com",
  projectId: "reactshop-c2323",
  storageBucket: "reactshop-c2323.appspot.com",
  messagingSenderId: "730534112278",
  appId: "1:730534112278:web:ad00b363f6993037a99937"
};
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;