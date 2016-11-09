(function () {
    'use strict';

    angular
        .module('testAngular')
        .directive('searchFilter', searchFilter);

    function searchFilter() {

        return {
            scope: {
                films: '='
            },
            restrict: 'EA',
            templateUrl: '/app/directives/search-filter.html',
            controller: 'searchFilterController'
        };
    }
})();