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

    var ad = JSON.stringify({ });

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

    this.status = '';

    this.setStatus = function (status) {
        this.status = status;
    };

});