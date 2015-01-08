/**
 * Created by Mario on 8.1.2015 г..
 */
app.controller('TownsController', function ($scope, adsTowns)  {
    adsTowns.getTowns(
        function (data, status, headers, config) {
            $scope.towns = data;
        },
        function (data, status, headers, config) {
            requestError('Error occured!');
        }
    )
});