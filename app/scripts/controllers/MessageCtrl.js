(function() {
     function MessageCtrl(Message) {
         this.messageInfo = Message.getByRoomId;
         this.registerMessage = Message.send;         
     }
     angular
         .module('blocChat')
         .controller('MessageCtrl', ['Message', MessageCtrl]);
 })();