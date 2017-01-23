(function() {
    function BlocChatCookies($cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser');        
        if (!currentUser || currentUser === '') {
            $("#userModal").modal(
                { 
                    backdrop : 'static',
                    keyboard: false
                });
            
            $("#userModal").modal('show');        
        }
    }    
    angular
        .module('blocChat')
        .run(['$cookies', BlocChatCookies]);
})();
