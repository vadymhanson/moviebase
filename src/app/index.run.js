(function() {
  'use strict';

  angular
    .module('testAngular')
    .run(runBlock);

  /** @ngInject */
  runBlock.$inject = ['$log', '$state', 'FBApi', '$rootScope', '$http'];
  function runBlock($log, $state, FBApi, $rootScope, $http) {
      window.fbAsyncInit = function() {
          FB.init({
              appId      : '1596560003986416',
              xfbml      : true,
              version    : 'v2.8',
              cookie     : true,
              oauth: true
          });
          FB.AppEvents.logPageView();
          FBApi.FBGetLoginStatus();
          
      };

      (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    
    
    
    $log.debug('runBlock end');
  }

})();
