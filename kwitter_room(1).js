var firebaseConfig = {
      apiKey: "AIzaSyDKJYNM6dBwkI97np6GZUavTXAcGZMOz00",
      authDomain: "vvvsftbd.firebaseapp.com",
      databaseURL: "https://vvvsftbd-default-rtdb.firebaseio.com",
      projectId: "vvvsftbd",
      storageBucket: "vvvsftbd.appspot.com",
      messagingSenderId: "428442659006",
      appId: "1:428442659006:web:b6567434e83fd2f82796ef",
      measurementId: "G-Y5C51EBF3V" 
 };
  firebase.initializeApp(firebaseConfig);


function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({pur:"vedant" });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page(1).html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name" + room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row; 
      });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page(1).html";
}
