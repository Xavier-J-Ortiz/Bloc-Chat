(function() {
  function Message($firebaseArray) {
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);
      var getByRoomId = function(roomId){
          var roomMessages = [];
          if (roomId !== undefined){                  
              ref.orderByChild("roomId").equalTo(roomId).on('value', function(snapshot) {
                  snapshot.val().forEach(function(element){
                      if (element != null){
                          roomMessages.push(element);
                      }
                  });
              });                  
          }
          return roomMessages;
      };      
      var send = function(newMessage, roomId){
          message.$add(newMessage).then(function(ref){
              var username = $cookies.get('blocChatCurrentUser');
              console.log(username);
              messages.$indexFor();
              
              var timeNow = new Date;
              mm = today.getMonth() + 1;
              dd = today.getDate();
              yy = today.getFullYear() - 2000;
              hh = today.getHours();
              mm = today.getMinutes();
              ss = today.getSeconds();
              
              var formattedTime = mm + "/" + dd + "/" + yy + " " + hh + ":" + mm + ":" +ss;
          });
          
      };
      
      
      
      return {          
          getByRoomId : getByRoomId,
          send: send
      };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();