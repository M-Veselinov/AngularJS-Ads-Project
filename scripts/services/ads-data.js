/**
 * Created by Mario on 8.1.2015 г..
 */
app.factory('adsData', function adsData($http) {
    function getAllAds(success, error) {
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/ads'
        })
        .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
        })
        .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
        });
    }

    function createNewAd(data, success, error) {
        $http({
            method: 'POST',
            url: 'http://softuni-ads.azurewebsites.net/api/user/ads',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
            },
            data: data
        })
            .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            })
    }

    function userAds (accessToken, success, error) {
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/user/ads',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
            .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            })
    }



    return {
        getAds: getAllAds,
        createAd: createNewAd,
        getUserAds: userAds
    }

});