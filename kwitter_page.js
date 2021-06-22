//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("UserName");
    room_name=localStorage.getItem("Roomname");
    function Sent(){
          msg=document.getElementById("message_send_text").value;
          firebase.database().ref(room_name).push({
             Uname:user_name,
             message:msg,
             like:0
          });
          document.getElementById("message_send_text").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['Uname'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>"
like_with_tag="<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id);'>";
span_with_tag=" <span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_with_tag+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatedLikes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedLikes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}