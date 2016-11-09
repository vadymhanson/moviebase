(function () {
    'use strict';

    angular
        .module('testAngular')
        .directive('datatable', datatable);

    function datatable() {

        return {
            scope: {
                films: '='
            },
            restrict: 'EA',
            templateUrl: '/app/directives/datatable.html',
            controller: 'datatableController',
            link: link
        };
        
        function link(scope) {
           
        }
    }
})();