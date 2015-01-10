/**
 * Created by Mario on 8.1.2015 г..
 */

app.controller('UserController', function ($scope, userRegister) {
    var user = JSON.stringify({
    });

    $scope.registerUser = function (user) {
        userRegister.userRegistration(user,
        function (data, status, header, config) {
            requestSuccessfull('Registration successfull !');
            sessionStorage.setItem('accessToken', data.access_token);
            sessionStorage.setItem('username',data.username);
            username = localStorage.getItem('username');
        },
        function (error, status, headers, config) {
            requestError('Registration failed !')
        })
    };


    var userLoginData = JSON.stringify({
    });

    this.logoutUser = function () {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('username');
    };

    if(sessionStorage.getItem('username') != null) {
        $scope.username = sessionStorage.getItem('username');
    }

    $scope.loginUser = function (user) {
        userRegister.userLogin(user,
        function (data, status, headers, config) {
            requestSuccessfull('Login Successful !');
            sessionStorage.setItem('accessToken', data.access_token);
            sessionStorage.setItem('username',data.username);

        }),
        function (error, status, headers, config) {
            requestError('Login failed !');
        }
    };
});