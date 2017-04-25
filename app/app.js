(function() {
    
    var app = angular.module('zipApp', ['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/zips.html',
                controller: 'ZipsController'
            })
            .when('/regionMap', {
                templateUrl: 'app/views/regionMap.html',
                controller: 'RegionMapController'
            })
            .when('/map/:zipId', {
                templateUrl: 'app/views/map.html',
                controller: 'MapController'
            })
            .otherwise( { redirectTo: '/' } );
        });
    
}());
