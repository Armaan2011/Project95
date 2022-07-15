var firebaseConfig = {
  apiKey: "AIzaSyBmR4JCH2vGqOIZ2LXTBv-J0QbER3o__D0",
  authDomain: "kwitter-6999e.firebaseapp.com",
  databaseURL: "https://kwitter-6999e-default-rtdb.firebaseio.com",
  projectId: "kwitter-6999e",
  storageBucket: "kwitter-6999e.appspot.com",
  messagingSenderId: "908172369280",
  appId: "1:908172369280:web:fa34a9fbf55c6c40407565"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome " +username +"!";

    function addroom()
    {
          roomname = document.getElementById("room_name").value;
          firebase.database().ref("/").child(roomname).update({Purpose:"Adding Room Name"});

          localStorage.setItem("roomname", roomname);
          window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name-"+Room_names);

row = "<div class='room_name' id="+Room_names+" onclick='redirect_to_roomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
window.location = "kwitter_page.html";
//End code
});});}
getData();

function redirect_to_roomname(name){
  console.log(name);
  localStorage.setItem("roomname", roomname);
  window.location = "kwitter_page.html";
}

    

       

       function logout(){
        localStorage.removeItem("username");
        localStorage.removeItem("roomname");
        window.location = "kwitter.html";    
      }