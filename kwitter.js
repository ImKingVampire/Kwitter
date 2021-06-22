function addUser(){
    var Name=document.getElementById("name_input").value;
    localStorage.setItem("UserName",Name);
    window.location="kwitter_room.html";
}