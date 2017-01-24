(function() {
  function Passer() {
      // create a function that returns  the passed object
      var roomId = "nothing";
      return {
          roomIdent : function(input){
              roomId = input;
              console.log("This is Passer's roomId: " + roomId);
              return roomId;
          },          
          getRoomId : function() {
              console.log("getRoomId has been called. the roomId is " + roomId);
              return roomId;
              
          }
      };
  }

  angular
    .module('blocChat')
    .factory('Passer', Passer);
})();