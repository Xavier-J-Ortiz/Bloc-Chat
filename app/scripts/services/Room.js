(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
                  
    return {
        all: rooms,
        roomCreate : (function(newName){
            rooms.$add(newName).then(function(ref) {
//                verify that the room is actually being added with this function via console.log
                var id = ref.key;
                console.log("added room with id " + id);
                rooms.$indexFor(id);
            });
        }),
        getRoomKey : (function(roomId){
            var answer = undefined;
            //                console.log(rooms);
            rooms.forEach(function(element){
                //                    console.log("element == roomId: " + (element.$value == roomId));
                if (element.$value == roomId){
//                    console.log("element.$id: " + element.$id)
                    answer = element.$id;
                }                    
                
            })
            
//            var roomIndex = rooms.$indexFor(roomId);
//            var answer = rooms[roomIndex].$id;
//            console.log("This is the room key: " + answer)
//            console.log(answer);            
            return answer;
        })
    };      
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();