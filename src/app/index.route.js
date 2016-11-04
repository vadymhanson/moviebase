(function() {
  'use strict';

  angular
    .module('testAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/main/login.html',
        controller: 'LoginCtrl'
      })
      .state('about', {
          url: '/about',
          templateUrl: 'app/main/about.html',
          controller: 'LoginCtrl'
      })  
      .state('dashboard', {
              url: '/dashboard',
              templateUrl: 'app/main/dashboard.html',
              controller: 'LoginCtrl'
          });

    $urlRouterProvider.otherwise('/dashboard');
  }

})();
