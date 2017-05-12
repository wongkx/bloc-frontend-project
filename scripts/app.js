(function(){
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/pages/home.html'
            });
    }

    angular
        .module('blocChat', ['firebase', 'ui.bootstrap', 'ui.router', 'ngCookies'])
        .config(config);
})();
