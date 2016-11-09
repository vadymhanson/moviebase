(function() {
  'use strict';

  angular
    .module('testAngular')
    .run(runBlock);

  /** @ngInject */
  runBlock.$inject = ['$log', '$state', 'FBApi', '$rootScope', '$http', '$stateParams'];
  function runBlock($log, $state, FBApi, $rootScope, $http, $stateParams) {

    $http
        .post('http://localhost:5000/check_auth')
        .success(function (response) {
          if(response.auth == "false") {
            $state.go('login')
          }
        });
    
    $log.debug('runBlock end');
  }

})();
