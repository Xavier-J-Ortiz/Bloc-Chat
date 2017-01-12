(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
      var roomCreate = function(){
          var newIndex = rooms.length + 1;
          var roomName = "room" + newIndex;
          rooms.$add({newIndex : roomName}).then(function(ref) {
              var id = ref.key;
              console.log("added record with id " + id);
              list.$indexFor(id);
          });
      };
      
    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();