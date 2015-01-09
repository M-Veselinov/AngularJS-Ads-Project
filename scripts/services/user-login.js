/**
 * Created by Mario on 8.1.2015 г..
 */
app.factory('userRegister', function userRegister($http) {
    function registerUser (data, success, error) {
        $http({
            method: 'POST',
            url: 'http://softuni-ads.azurewebsites.net/api/user/register',
            data: data
        })
            .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    function loginUser (data, success, error) {
        $http({
            method: 'POST',
            url: 'http://softuni-ads.azurewebsites.net/api/user/login',
            data: data
        })
            .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    return {
        userRegistration: registerUser,
        userLogin: loginUser
    }
});