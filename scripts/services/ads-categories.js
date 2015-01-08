/**
 * Created by Mario on 8.1.2015 г..
 */
app.factory('adsCategories', function adsCategories($http) {
   function getAllCategories (success,error) {
       $http({
           method: 'GET',
           url: 'http://softuni-ads.azurewebsites.net/api/categories'
       })
           .success(function (data, status, headers, config) {
               success(data, status, headers(), config);
           })
           .error(function (data, status, headers, config) {
             error(data, status, headers(), config);
           });
   }

    return {
        getCategories: getAllCategories
    }
});