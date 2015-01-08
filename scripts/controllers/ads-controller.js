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
})