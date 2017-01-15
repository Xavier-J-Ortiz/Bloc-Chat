(function() {
     function MessageCtrl(Message, Passer) {
         this.clickedRoomId = Passer.roomId;
         this.messageInfo = Message.getByRoomId;
         this.roomId = Passer.roomIdent;
         this.setRoomId = Passer.roomIdent;
         this.getRoomId = Passer.roomId;
         
     }
     angular
         .module('blocChat')
         .controller('MessageCtrl', ['Message', 'Passer', MessageCtrl]);
 })();