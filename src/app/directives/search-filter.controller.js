(function() {
    'use strict';

    angular
        .module('testAngular')
        .controller('searchFilterController', searchFilterController);
    
    searchFilterController.$inject=['$scope', '$http'];
    
    function searchFilterController($scope, $http) {
        $scope.searchData = {
            title : '',
            description: '',
            category_name: '',
            actors: '',
            language_name: ''

        };
        
        $scope.onSearch = function() {   
            console.log($scope.searchData);
           $http
               .post('http://localhost:5000/films/search', $scope.searchData)
               .success(function(response) {
                   console.log(response);                   
               })
      }
    }
    
            
})();