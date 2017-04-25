angular
    .module('zipApp')
    .factory('zipsFactory', function($http) {
    
        var factory = {};
        
        function getZips() {
            return $http.get('/places');
        };
    
        function getRegionMap() {
            return $http.get('/regionMap');
        };
        
        function getMap(zipId) {
            return $http.get('/map/'+ zipId);
        };
        
        return { 
            getZips: getZips,
            getRegionMap: getRegionMap,
            getMap: getMap
        }
    });
