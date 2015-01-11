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

    function getAdsByStatus(accessToken, adStatus, success, error) {
        var url = 'http://softuni-ads.azurewebsites.net/api/user/ads';
        if (adStatus != '') {
            url += '?status=' + adStatus;
        }
        $http({
            method: 'GET',
            url: url,
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

    function deactivateUserAd(id, accessToken, success, error) {
        $http({
            method: 'PUT',
            url: 'http://softuni-ads.azurewebsites.net/api/user/ads/deactivate/' + id,
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

    function publishAdAgain (id,accessToken, success, error) {
        $http({
            method: 'PUT',
            url: 'http://softuni-ads.azurewebsites.net/api/user/ads/publishagain/' + id,
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

    function deleteUserAd (id, accessToken, success, error) {
        $http({
            method: 'DELETE',
            url: 'http://softuni-ads.azurewebsites.net/api/user/ads/' + id,
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

    function getAdsByCategory (category, success, error) {
        $http({
            method: 'GET',
            url: 'http://softuni-ads.azurewebsites.net/api/ads?CategoryId=' + category
        })
            .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            });
    }

    return {
        getAds: getAllAds,
        createAd: createNewAd,
        getUserAds: userAds,
        getSortedAds: getAdsByStatus,
        deactivateAd: deactivateUserAd,
        publishAgain: publishAdAgain,
        deleteAd: deleteUserAd,
        getAdsCategory: getAdsByCategory
    }

});