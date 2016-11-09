(function () {
    'use strict';

    angular
        .module('testAngular')
        .factory('FBApi', FBApi);
    FBApi.$inject = ['$state', '$rootScope', '$timeout', '$http', '$cookies'];
    function FBApi($state, $rootScope, $timeout, $http, $cookies) {
        
        function FBLogin() {
                FB.login(function(response) {
                    console.log('FBLogin');
                    if (response.status === 'connected') {
                        console.log(response);
                        // $http.post(
                        // '/authentication'
                        // );
                        //FBUserInfo();
                        //$state.go('dashboard');                            
                    } else if (response.status === 'not_authorized') {
                        $state.go('login')
                    } else {
                        $state.go('login')
                    }
                });
        }


        function FBLogout() {
            FB.getLoginStatus(function(response) {
                if(response.status == 'connected') {
                    FB.logout(function() { 
                        $state.go('login');
                    });
                }
            });
        }

        function FBUserInfo(){
            FB.api(
                "/me",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response, 'response');
                        $rootScope.fbData = response;                      
                    }
                }
            );
        }

        function FBGetLoginStatus() {
            FB.getLoginStatus(function(response) {
                if(response.status == 'connected') {
                    $state.go('dashboard');
                    $cookies.put('accessToken', response.authResponse.accessToken);
                }
                else {
                    $state.go('login');
                    $cookies.remove('accessToken');
                }
            });
        }
        
        function checkLogin() {
            return $cookies.get('accessToken') ? true:false;
        }

        return {
            FBLogin: FBLogin,
            FBLogout: FBLogout,
            FBGetLoginStatus: FBGetLoginStatus,
            checkLogin: checkLogin
        };
    }
        
        
    
})();