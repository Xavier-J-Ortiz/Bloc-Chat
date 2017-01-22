(function() {
  function Message($firebaseArray) {
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);
      
      return {          
          getByRoomId : function(roomId){
//              var queryAnswer = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
              var roomMessages = [];
//              console.log(roomId);
              if (roomId !== undefined){                  
                  ref.orderByChild("roomId").equalTo(roomId).on('value', function(snapshot) {
                      snapshot.val().forEach(function(element){
//                          console.log("element: " + element);
                          if (element != null){
                              roomMessages.push(element);
                          }
                      });
                  });                  
              }
              
              return roomMessages;
          }          
      };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();