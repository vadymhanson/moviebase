(function() {
    'use strict';

    angular
        .module('testAngular')
        .controller('AboutController', ['$scope', '$location', '$state', 'FBApi', '$rootScope', '$http','$cookies', function($scope, $location, $state, FBApi, $rootScope, $http, $cookies) {
            $scope.FBLogout = FBApi.FBLogout;
            
        }]);
})();
