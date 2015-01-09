/**
 * Created by Mario on 8.1.2015 г..
 */
app.controller('UserController', function ($scope, userRegister) {
    var user = JSON.stringify({
    });

    $scope.registerUser = function (user) {
        userRegister.userRegistration(user,
        function (data, status, header, config) {
            requestSuccessfull('Registered successfull you may now login !');
        },
        function (error, status, headers, config) {
            console.log(error, status);
        })
    };

    var userLoginData = JSON.stringify({
    });

    $scope.loginUser = function (user) {
        userRegister.userLogin(user,
        function (data, status, headers, config) {
            requestSuccessfull('Login Successful your access token is: ' + data.access_token);
            localStorage.setItem('accessToken', data.access_token);
            localStorage.setItem('username',data.username);
        }),
        function (error, status, headers, config) {
            console.log(error,status);
        }
    };
});