
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDQa22UHrbVyeY7bGwhYMjnzvkqLPNLm0s",
    authDomain: "tactical-oxide-383415.firebaseapp.com",
    projectId: "tactical-oxide-383415",
    storageBucket: "tactical-oxide-383415.appspot.com",
    messagingSenderId: "863535757055",
    appId: "1:863535757055:web:29cbafc4623f9d22f0beca"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const Auth = getAuth()

  var username = document.getElementById("username")
  var email = document.getElementById("email")
  var passwords = document.getElementById("password")

  window.signup = function(e){
    e.preventDefault();
    var obj = {
        username:username.value,
        email:email.value,
        passwords:passwords.value,
    }
  createUserWithEmailAndPassword(auth,obj.email,obj.passwords)
  .then(function(success){
    alert("Sign up successfully")
  })
  .catch(function(err){
    alert("error" + err)
  })

  console.log(obj)
};