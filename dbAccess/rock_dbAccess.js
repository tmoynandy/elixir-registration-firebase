  var config = {
    apiKey: "AIzaSyD-9I7yWlo3MB-OUf__oezXmpvuQ5xy5S4",
    authDomain: "elixir-19.firebaseapp.com",
    databaseURL: "https://elixir-19.firebaseio.com",
    projectId: "elixir-19",
    storageBucket: "elixir-19.appspot.com",
    messagingSenderId: "804570312349"
  };
  firebase.initializeApp(config);

//Reference registrations collection
//var registrationsRef = firebase.database().ref('registrations');

// registrationsRef.on("child_added", function(data,previousChildKey) {
	
// 	var data = data.val()
// 	console.log(typeof data)
//    console.log(data.name);
//    console.log(data.email);
//    console.log(data.phone);
//    console.log(data.college);
//    console.log(data.event);

// }, function (error) {
//    console.log("Error: " + error.code);
// });


//new add
var database = firebase.database();
    database.ref('registrations').once('value', function(snapshot){
        if(snapshot.exists()){
            var content = '';
            snapshot.forEach(function(data){
                var val = data.val();
                if (val.event === "Rock-o-calypse") {
                	content +='<tr>';
	                content += '<td>' + val.name + '</td>';
	                content += '<td>' + val.email + '</td>';
	                content += '<td>' + val.phone + '</td>';
	                content += '<td>' + val.college + '</td>';
	                content += '<td>' + val.event + '</td>';
	                content += '</tr>';
                }
                
            });
            $('#ex-table').append(content);
        }
    });


