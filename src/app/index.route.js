(function() {
  'use strict';

  angular
    .module('testAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/main/login.html',
        controller: 'LoginCtrl',
        data: {
          'noLogin': true
        }

      })
      .state('about', {
          url: '/about',
          templateUrl: 'app/main/about.html',
          controller: 'AboutController'
      })  
      .state('dashboard', {
              url: '/dashboard',
              templateUrl: 'app/main/dashboard.html',
              controller: 'DashboardController'
          });

      $urlRouterProvider.otherwise('/dashboard');
      $locationProvider.html5Mode(true);
  }
    
})();
