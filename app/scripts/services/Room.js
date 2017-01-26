(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var all = $firebaseArray(ref);
      
      var roomCreate = (function(newName){
          all.$add(newName).then(function(ref) {
              var id = ref.key;
              console.log("added room with id " + id);
              all.$indexFor(id);
          });
      });
      var getRoomKey = (function(roomId){
          var key = undefined;
          all.forEach(function(element){
              if (element.$value == roomId){
                  key = element.$id;
              }                                    
          });       
          return key;
      });
                  
    return {
        all: all,
        roomCreate : roomCreate,
        getRoomKey : getRoomKey
    };      
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();