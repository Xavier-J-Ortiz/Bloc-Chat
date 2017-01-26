(function() {
  function Message($firebaseArray, $cookies) {
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);
      //
      var getByRoomId = function(roomId){
          var roomMessages = [];
          if (roomId !== undefined){                  
              ref.orderByChild("roomId").equalTo(roomId).on('value', function(snapshot) {
                  var testStructure = snapshot.val();
                  console.log(testStructure);
                  angular.forEach(testStructure, function(value, key){
                      if (key != null){
                          roomMessages.push(value);
                      }
                  });
              });                  
          }
          return roomMessages;
      };
      
      var send = function(newMessage, roomId){
          var username = $cookies.get('blocChatCurrentUser');
          console.log("This is the saved username: " + username);
          
          var timeNow = new Date;
          mm = timeNow.getMonth() + 1;
          dd = timeNow.getDate();
          yy = timeNow.getFullYear() - 2000;
          hh = timeNow.getHours();
          mm = timeNow.getMinutes();
          ss = timeNow.getSeconds();              
          var formattedTime = mm + "/" + dd + "/" + yy + " " + hh + ":" + mm + ":" +ss;          
          
          var packagedMessage = {
              content : newMessage,
              roomId : roomId,
              sentAt : formattedTime,
              username : username
          };
          console.log(packagedMessage);
          messages.$add(packagedMessage).then(function(ref){
              var id = ref.key;
              console.log("added Message with id " + id);
              rooms.$indexFor(id);
          });
          
      };
      
      
      
      return {          
          getByRoomId : getByRoomId,
          send: send
      };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();