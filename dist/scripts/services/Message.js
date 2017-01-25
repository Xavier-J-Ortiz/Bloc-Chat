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
      
      var send = function(newMessage){
          
          
          
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