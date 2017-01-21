(function() {
  function Message($firebaseArray) {
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);
      
      return {          
          getByRoomId : function(roomId){
              var answer = null;
              if (roomId != null){
                  var queryRef = ref.orderByChild("roomId").equalTo(roomId).on('value', function(snapshot) {
                      answer = snapshot.val();
//                      console.log(answer);
                  });
              }
              return answer;       
          }          
      };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();