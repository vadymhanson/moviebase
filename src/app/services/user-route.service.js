(function () {
    'use strict';

    angular
        .module('testAngular')
        .service('UserRouteService', UserRouteService);

    UserRouteService.$inject = ['FBApi', '$state'];

    
        function UserRouteService(FBApi, $state) {
            
            
       

    // function UserRouteService(FBApi, $state) {
    //     this.checkLogin = function (scope) {
    //         scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    //             console.log(FBApi.checkLogin());
    //             if(!FBApi.checkLogin()) {
    //                 event.preventDefault();
    //                 $state.go('login')
    //             }
    //         });
    //     }
        
   }


})();
