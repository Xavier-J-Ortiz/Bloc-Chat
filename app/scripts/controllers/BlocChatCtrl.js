(function() {
     function BlocChatCtrl(Room) {
         this.roomData = Room.all;
         this.newRoom = Room.roomCreate;
     }
     angular
         .module('blocChat')
         .controller('BlocChatCtrl', ['Room', BlocChatCtrl]);
 })();