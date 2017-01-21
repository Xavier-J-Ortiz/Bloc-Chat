(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
                  
    return {
        all: rooms,
        roomCreate : (function(newName){
            rooms.$add(newName).then(function(ref) {
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