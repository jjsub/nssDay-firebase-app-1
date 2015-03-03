/*var firebase = require("firebase");

var myFirebaseRef = new Firebase("https://fiery-fire-2497.firebaseio.com/");
*/


var jjCurrentMessage    = document.getElementById('jjCurrentMessage'), 
          txtNewMassage       = document.getElementById('txtNewMassage'),
          btUpdateMessage     = document.getElementById('btUpdateMessage'),
          rootRef = new Firebase('https://realtime-messege.firebaseio.com/'),
          currentMessageRef = rootRef.child('currentMessage');

          btUpdateMessage.addEventListener('click', function(){

            currentMessageRef.set(txtNewMassage.value);
            //this will clear the input box after summit
            txtNewMassage.value = '';

          });

          currentMessageRef.on('value', function(snapshot){
              jjCurrentMessage.innerText = snapshot.val();
          });
