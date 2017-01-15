(function() {
     function MessageCtrl(Message) {
         this.messageInfo = Message.getByRoomId;
         
     }
     angular
         .module('blocChat')
         .controller('MessageCtrl', ['Message', MessageCtrl]);
 })();