(function() {
    'use strict';

    angular
        .module('testAngular')
        .controller('LoginCtrl', ['$scope', '$location', '$state', 'FBApi', '$rootScope', function($scope, $location, $state, FBApi, $rootScope) {
            
            $scope.tittle = 'Please login';
            $scope.FBLogin = FBApi.FBLogin;
            
        }]);
})();

