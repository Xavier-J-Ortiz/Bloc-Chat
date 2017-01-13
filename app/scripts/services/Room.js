(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
                  
    return {
        all: rooms,
        roomCreate : (function(){
            var newIndex = rooms.length + 1;
            var roomName = "room" + newIndex;
            rooms.$add(roomName).then(function(ref) {
                var id = ref.key;
                console.log("added record with id " + id);
                rooms.$indexFor(id);
            });
        })
    };      
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();