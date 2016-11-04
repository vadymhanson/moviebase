(function() {
    'use strict';

    angular
        .module('testAngular')
        .controller('LoginCtrl', ['$scope', '$location', '$state', 'FBApi', '$rootScope', function($scope, $location, $state, FBApi, $rootScope) {
            $scope.tittle = 'Welcome to our movie database';
            $scope.FBLogin = FBApi.FBLogin;
            $scope.FBLogout = FBApi.FBLogout;
            // $scope.FBUserInfo = function () {
            //     !($scope.$$phase)&&$scope.apply();
            // };
            
            // $rootScope.fbData;
            
            // $rootScope.$watch('fbData', function (nVal, oVal) {
            //     console.log(nVal, oVal, 111);
            // });


        }]);
})();

