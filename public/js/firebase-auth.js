function logIn() {

  var googleAuthProvider = new firebase.auth.GoogleAuthProvider
  firebase.auth().signInWithPopup(googleAuthProvider)
  .then(function(data){
    console.log(data);
    location.href = "/register/";
    request.session.variablename = data
  })
  .catch(function(err){
    console.log(error)
  })  
}


function signOut(){
  firebase.auth().signOut().then(function() {
    console.log('Signed Out');
    location.href = "/"
  }, function(error) {
    console.error('Sign Out Error', error);
  });
}

var userKey = Object.keys(window.localStorage)
.filter(it => it.startsWith('firebase:authUser'))[0];
var user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;