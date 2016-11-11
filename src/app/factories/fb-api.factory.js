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
                        $state.go('dashboard');
                        updateAuthData(response);
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
                        $cookies.remove('access_token');
                        $state.go('login');
                    });
                }
            });
        }

        function FBUserInfo(){
            FB.api(
                "/me?fields=first_name,last_name,email",
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
                    updateAuthData(response);
                }
                else {
                    $state.go('login');
                }
            });
        }
        
        function updateAuthData(response) {
            var expire = new Date();
            expire.setSeconds(expire.getSeconds() + response.authResponse.expiresIn);
            $cookies.put('access_token',response.authResponse.accessToken,{expires:expire.toUTCString()});
            $http.defaults.headers.common.Authentication = response.authResponse.accessToken;
            
        }
       
        return {
            FBLogin: FBLogin,
            FBLogout: FBLogout,
            FBGetLoginStatus: FBGetLoginStatus
        };
    }
        
        
    
})();