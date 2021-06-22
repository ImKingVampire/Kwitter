
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyA8QkzeggJ9hO7FVJ2T1tObHeKDfngT01U",
      authDomain: "kwit-b672d.firebaseapp.com",
      databaseURL: "https://kwit-b672d-default-rtdb.firebaseio.com",
      projectId: "kwit-b672d",
      storageBucket: "kwit-b672d.appspot.com",
      messagingSenderId: "113575280930",
      appId: "1:113575280930:web:92841eb8f778b73f6e657b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  var un=localStorage.getItem("UserName");
  document.getElementById("Welcome").innerHTML="Welcome "+un+"!";

    function addRooom(){
        var Roomname=document.getElementById("text_addRoom").value;
        console.log(Roomname);
        document.getElementById("text_addRoom").value="";
        firebase.database().ref("/").child(Roomname).update({purpose:"Adding new room.Pls have patience"});
        localStorage.setItem("Roomname",Roomname);
        window.location="kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       var row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;

      //Start code

      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("Roomname",name);
      window.location="kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("UserName");
      window.location="index.html";
}