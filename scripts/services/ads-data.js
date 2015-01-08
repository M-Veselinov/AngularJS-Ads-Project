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

    return {
        getAds: getAllAds
    }
});