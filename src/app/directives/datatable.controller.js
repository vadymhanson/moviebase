(function() {
    'use strict';

    angular
        .module('testAngular')
        .controller('datatableController', datatableController);

    datatableController.$inject=['$scope', '$http'];

    function datatableController($scope, $http) {

        console.log($scope);

        $http
            .get('http://localhost:5000/films/limit-50')
            .success(function(response) {
                $scope.films= response;
            })
            .error(function(response) {
                console.log(response);
            });
    }


})();
