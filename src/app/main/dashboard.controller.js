(function() {
    'use strict';

    angular
        .module('testAngular')
        .controller('DashboardController', ['$scope', '$location', '$state', 'FBApi', '$rootScope', '$http','$cookies', function($scope, $location, $state, FBApi, $rootScope, $http, $cookies) {

            $http.post('http://localhost:5000/userInfo', {access_token:$cookies.get('access_token')}).success(function (response) {
                console.log(response);
                if(response.auth == false){
                    $state.go('login')
                }
            });
            $scope.filmData = [];
            
        }]);
})();
