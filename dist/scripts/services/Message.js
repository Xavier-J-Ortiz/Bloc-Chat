(function() {
  function Message($firebaseArray) {
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);
      
      return {          
          getByRoomId : function(roomId){
              console.log(messages);
              var queryRef = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));              
              return queryRef;       
          }          
      };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();