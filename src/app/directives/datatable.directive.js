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
            link: link
        };
        
        function link(scope) {
           
        }
    }
})();