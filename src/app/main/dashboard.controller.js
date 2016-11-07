(function() {
    'use strict';

    angular
        .module('testAngular')
        .controller('DashboardController', ['$scope', '$location', '$state', 'FBApi', '$rootScope', '$http', function($scope, $location, $state, FBApi, $rootScope, $http) {
            $scope.filmData = [];
            $scope.FBLogout = FBApi.FBLogout;
            $http
                .get('http://localhost:5000/films/limit-50')
                .success(function(response) {
                    $scope.filmData = response;
                })
                .error(function(response) {
                    console.log(response);
                });



        }]);
})();
