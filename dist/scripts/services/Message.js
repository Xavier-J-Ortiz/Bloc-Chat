(function() {
  function Message($firebaseArray) {
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);
      
      return {          
          getByRoomId : function(roomId){
              var relevantMessages = messages.orderByChild("roomId").equalTo(roomId).on("child_added", function(snapshot) {
                  console.log(snapshot.key());
              });            
              
              return relevantMessages;
          }          
      };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();