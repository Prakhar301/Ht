  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCxMHCfNl1-9S1r4Vz4nkS6hrJOdRcE0o4",
    authDomain: "practice-16c78.firebaseapp.com",
    databaseURL: "https://practice-16c78-default-rtdb.firebaseio.com",
    projectId: "practice-16c78",
    storageBucket: "practice-16c78.appspot.com",
    messagingSenderId: "157043169049",
    appId: "1:157043169049:web:02e6b7ab967c48da409788"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function add(){
    username=document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({
        purpose:"adding user"
    }
    );
}