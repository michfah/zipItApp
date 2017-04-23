angular
    .module('zipApp')
    .factory('zipsFactory', function($http) {
    
        var factory = {};
        
        function getZips() {
            return $http.get('/places');
        };
        
        function getMap(zipId) {
            return $http.get('/map/' + zipId);
        };
        
        return { 
            getZips: getZips,
            getMap: getMap
        }
    });