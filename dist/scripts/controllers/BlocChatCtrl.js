(function() {
     function BlocChatCtrl(Room) {
         this.activeRoomId = "";
         this.roomData = Room.all;
         this.newRoom = Room.roomCreate;
         this.activeRoomKey = Room.getRoomKey;
     }
     angular
         .module('blocChat')
         .controller('BlocChatCtrl', ['Room', BlocChatCtrl]);
 })();