angular
    .module('zipApp')
    .directive('mapLocation', function ($compile) {
          return {
            controller: function ($scope) {
                
              var map;
              this.registerMap = function (myMap) {
                var center = myMap.getCenter(),
                  latitude = center.lat(),
                  longitude = center.lng();
                map = myMap;
                $scope.latitude = latitude;
                $scope.longitude = longitude;
              };
                
              $scope.$watch('latitude + longitude', function (newValue, oldValue) {
                if (newValue !== oldValue) { 
                  var center = map.getCenter(),
                    latitude = center.lat(),
                    longitude = center.lng();
                  if ($scope.latitude !== latitude || $scope.longitude !== longitude)
                    map.setCenter(new google.maps.LatLng($scope.latitude, $scope.longitude));
                }
              });
                
            },
              
            link: function (scope, elem, attrs, ctrl) {
              var mapOptions,
                latitude = attrs.latitude,
                longitude = attrs.longitude,
                controlTemplate,
                controlElem,
                map;
                
              // parsing latLong or setting default location
              latitude = latitude && parseFloat(latitude, 10) || 43.72199754241489;
              longitude = longitude && parseFloat(longitude, 10) || -69.80062596289063;
                
              mapOptions = {
                zoom: 13,
                disableDefaultUI: true,
                center: new google.maps.LatLng(latitude, longitude),
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };
                
              map = new google.maps.Map(elem[0], mapOptions);
              ctrl.registerMap(map);
              controlTemplate = document.getElementById('locationControl').innerHTML.trim();
              controlElem = $compile(controlTemplate)(scope);
              map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlElem[0]);
              
                function centerChangedCallback (scope, map) {
                return function () {
                  var center = map.getCenter();
                  scope.latitude = center.lat();
                  scope.longitude = center.lng();
                  if(!scope.$$phase) scope.$apply();
                };
                    
            }
                
          google.maps.event.addListener(map, 'center_changed', centerChangedCallback(scope, map));
        }
      };
    })    
    .controller('MapController', function ($scope, $routeParams, zipsFactory) {

        var zipId = $routeParams.zipId;
            $scope.city = null;

            function init() {
                 zipsFactory.getMap(zipId)
                    .then(function(response) {
                        $scope.city = response.data;
                    }, function(data, status, headers, config) {
                        //handle error
                    });
            }        

            init();
    });
    
