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
        controller: 'LoginCtrl',
        data: {
          'noLogin': true
        }

      })
      .state('about', {
          url: '/about',
          templateUrl: 'app/main/about.html',
          controller: 'LoginCtrl'
      })  
      .state('dashboard', {
              url: '/dashboard',
              templateUrl: 'app/main/dashboard.html',
              controller: 'DashboardController'
          });

    $urlRouterProvider.otherwise('/dashboard');
  }

})();
