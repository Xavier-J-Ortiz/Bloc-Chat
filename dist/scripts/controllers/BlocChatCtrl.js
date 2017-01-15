(function() {
     function BlocChatCtrl(Room, Passer) {
         this.roomData = Room.all;
         this.newRoom = Room.roomCreate;
         this.setRoomId = Passer.roomIdent;
         this.getRoomId = Passer.roomId;
         
         this.logIt = function(input)  {
             console.log(input);
         };
         
     }
     angular
         .module('blocChat')
         .controller('BlocChatCtrl', ['Room', 'Passer', BlocChatCtrl]);
 })();