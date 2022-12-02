// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyDsaFaPn3TzaYWia-JSIrzykVQqmW0HQTw",
  authDomain: "groceries-94ecb.firebaseapp.com",
  projectId: "groceries-94ecb",
  storageBucket: "groceries-94ecb.appspot.com",
  messagingSenderId: "239461850316",
  appId: "1:239461850316:web:6ab2c52047feacb106b669",
  measurementId: "G-KFQX68L0EZ"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
// document.querySelectorAll('li') ==> nodelist
// for loop to go through each nodelist
// and then get the text content

  $('li').each(function(){
    var value = $(this).text();
    console.log(value);

    firebase
    .firestore()
    .collection("mylist")
    .add({
      item: value//?
    });


  });

});
