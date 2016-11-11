(function() {
    'use strict';

    angular
        .module('testAngular')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$location', '$state', 'FBApi', '$rootScope', '$http','$cookies'];

    function DashboardController($scope, $location, $state, FBApi, $rootScope, $http, $cookies) {
        $scope.filmData = [];
        $scope.FBLogout = FBApi.FBLogout;
        
        $http
            .post('http://localhost:5000/user-info')
            .success(function (response) {
                console.log(response);
                $scope.userFirstName = response.first_name + ' ' + response.last_name;
                $scope.userEmail = response.email
            });
        
        $scope.check = function () {
            // FB.api(
            //     "/me?fields=first_name,last_name,email",
            //     function (response) {
            //         if (response && !response.error) {
            //             /* handle the result */
            //             console.log(response, 'response');
            //         }
            //     }
            // );
            FB.api(
                '/me',
                'GET',
                {"fields":"first_name,last_name,email"},
                function(response) {
                    console.log(response, 'response');
                }
            );
        }
    }
})();
