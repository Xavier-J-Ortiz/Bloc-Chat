(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
            enabled: true,
            requireBase: false
        });
        
        $stateProvider        
            .state('home', {
            url: '/',
            controller: 'MessageCtrl as message',
            templateUrl: '/templates/home.html'
        });
    }
    
    angular
        .module('blocChat', ['ngCookies', 'ui.router', 'firebase'])
        .config(config);
})();
