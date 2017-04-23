angular
    .module('zipApp')
    .filter('capitalizeCity', function() {
            return function(input) {
                if (input !== null) {
                return input.replace(/\w\S*/g, function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            }
        }
    })
    .directive('capitalizeStateInput', function() {
            return {
              require: 'ngModel',
              link: function(scope, element, attrs, modelCtrl) {
                var capitalize = function(inputValue) {
                  if (inputValue == undefined) inputValue = '';
                  var capitalized = inputValue.toUpperCase();
                  if (capitalized !== inputValue) {
                    modelCtrl.$setViewValue(capitalized);
                    modelCtrl.$render();
                  }
                  return capitalized;
                }
                modelCtrl.$parsers.push(capitalize);
                capitalize(scope[attrs.ngModel]); // capitalize initial value
              }
            };
    })
    .controller('ZipsController', function ($scope, $log, $window, zipsFactory, appSettings) {
        
        $scope.places = [];
        $scope.flag = "images/neflag.jpg";
        $scope.map = "images/nemap.jpg";
        $scope.appSettings = appSettings;
        
        $scope.zipFilter = {};
        $scope.userInput = {};
        
        function init() {
            zipsFactory.getZips()
                .then(function(response) {
                    $scope.places = response.data;
                }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }
        init();
        
//        Apply search filter function
    
        $scope.applySearch = function() {
            for(prop in $scope.userInput) {
                $scope.zipFilter[prop] = $scope.userInput[prop];
            }
        };
        
        $scope.sort = {
            active: '_id',
            descending: undefined
        } 
        
         	
//        Sorting table column function
        
        $scope.changeSorting = function(column) {

            var sort = $scope.sort;
 
            if (sort.active == column) {
                sort.descending = !sort.descending;
				
            } else {
                sort.active = column;
                sort.descending = false;
            }
        };
        
//        Table column sort icon display
    
        $scope.getIcon = function(column) {
                     
            var sort = $scope.sort;
            
            if (sort.active == column) {
              return sort.descending
                ? 'glyphicon-chevron-up'
                : 'glyphicon-chevron-down';
            }
            
            return 'glyphicon-star';
        };

    });

    