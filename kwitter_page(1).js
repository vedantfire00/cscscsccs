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
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send()
  {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value=" ";
  }
   





function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData; 

      } });  }); }
getData();
