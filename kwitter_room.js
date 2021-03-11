var firebaseConfig = {
      apiKey: "AIzaSyD4HV2QAwWazx9-3Qw4oztXAmR1X0xqe5I",
      authDomain: "kwitter-e9519.firebaseapp.com",
      databaseURL: "https://kwitter-e9519-default-rtdb.firebaseio.com",
      projectId: "kwitter-e9519",
      storageBucket: "kwitter-e9519.appspot.com",
      messagingSenderId: "131875196390",
      appId: "1:131875196390:web:e25af380cc9e9acab71a27"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+username+"!";

function addroom()
{
roomname=document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update({ purpose: "adding room name" });
localStorage.setItem("roomname",roomname);
window.location="kwitter_page.html";

}


 function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log(Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                   document.getElementById("output").innerHTML += row;    

            });
      });
}
getData();
function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("roomname",name); 
   window.location="kwitter_room.html";
}

function logout()
{
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location="index.html";
}

