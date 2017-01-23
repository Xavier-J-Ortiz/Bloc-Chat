(function() {
     function CookieCtrl($cookies) {
//         $cookies.put('blocChatCurrentUser', "testeroonie"); 
         this.setUsername = $cookies.put;
         this.checkUsername = function(){
             if ($cookies.get('blocChatCurrentUser') && $cookies.get('blocChatCurrentUser') !== '') {
                 $("#userModal").modal('hide');
             }
         };
     }
    

     angular
         .module('blocChat')
         .controller('CookieCtrl', ['$cookies', CookieCtrl]);
 })();