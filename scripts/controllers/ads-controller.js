/**
 * Created by Mario on 8.1.2015 г..
 */
app.controller('AdsController', function AdsController($scope, adsData) {
    adsData.getAds(
        function (data, status, headers, config) {
            $scope.data = data;
        },
        function (error, status, headers, config) {
            console.log(status, error); // Try with invalid url
        });
    $scope.createNewAd = function (ad) {
        adsData.createAd(ad,
            function (data, status, headers, config) {
                requestSuccessfull('Ad sucessfully created !');
            },
            function (data, status, headers, config) {
                requestError('Creating new Ad failed !');
                console.log(status,data)
            });
        };

        var accessToken = sessionStorage.getItem('accessToken');
        adsData.getUserAds(accessToken,
            function (data, status, headers, config) {
                $scope.userData = data;
            },
            function (error, status, headers, config) {
                console.log(status, error); // Try with invalid url
            });

    $scope.getSAds = function (status) {
        var accessToken = sessionStorage.getItem('accessToken');
        adsData.getSortedAds(accessToken, status,
            function (data, status, headers, config) {
                $scope.userSortedData = data;
                requestSuccessfull('SDSDSD');
            },
            function (error, status, headers, config) {
                console.log(status, error); // Try with invalid url
            });
    };

    $scope.deactivateUserAd = function (id) {
        var accessToken = sessionStorage.getItem('accessToken');

        adsData.deactivateAd(id, accessToken,
            function (data, status, headers, config) {
                requestSuccessfull(data.message);
            },
            function (error,status, headers, config) {
                console.log(status,error);
            });
    };

    $scope.publishAdAgain = function (id) {
        var accessToken = sessionStorage.getItem('accessToken');

        adsData.publishAgain(id, accessToken,
            function (data, status, headers, config) {
                requestSuccessfull(data.message);
            },
            function (error,status, headers, config) {
                console.log(status,error);
            });
    };

    $scope.deleteUserAd = function (id) {
        var accessToken = sessionStorage.getItem('accessToken');

        adsData.deleteAd(id, accessToken,
            function (data, status, headers, config) {
                requestSuccessfull(data.message);
            },
            function (error,status, headers, config) {
                console.log(status,error);
            });
    }

    $scope.getAdsByCategory = function (category) {
        adsData.getAdsCategory(category,
            function (data, status, headers, config) {
                requestSuccessfull('asdSda');
                $scope.data = data;
            },
            function (error,status, headers, config) {
                console.log(status,error);
            });
    }
});