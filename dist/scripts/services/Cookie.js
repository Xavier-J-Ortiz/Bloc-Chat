(function() {
  function Cookie($cookies) {
      
      var cookiePut = $cookies.put;
      var whatUsername = function(){
          if ($cookies.get('blocChatCurrentUser') && $cookies.get('blocChatCurrentUser') !== '') {
                 $("#userModal").modal('hide');
          }
      };
      
      return {
          cookiePut : cookiePut,
          whatUsername : whatUsername          
      };
  }

  angular
    .module('blocChat')
    .factory('Cookie', ['$cookies', Cookie]);
})();