(function() {
     function CookieCtrl(Cookie) {
//         $cookies.put('blocChatCurrentUser', "testeroonie"); 
         this.setUsername = Cookie.cookiePut;
         this.checkUsername = Cookie.whatUsername;
     }
    
     angular
         .module('blocChat')
         .controller('CookieCtrl', ['Cookie', CookieCtrl]);
 })();