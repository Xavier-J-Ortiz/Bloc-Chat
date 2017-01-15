(function() {
     function BlocChatCtrl($scope, Room) {
         this.activeRoomId = "";
         this.roomData = Room.all;
         this.newRoom = Room.roomCreate;
         
         this.logIt = function(input)  {
             console.log(input);
         };
         
     }
     angular
         .module('blocChat')
         .controller('BlocChatCtrl', ['$scope', 'Room', BlocChatCtrl]);
 })();