/**
 * Created by Mario on 8.1.2015 г..
 */
app.controller('CategoriesController', function ($scope, adsCategories) {
   adsCategories.getCategories(
       function (data, status, headers, config) {
           $scope.categories = data;
       },
       function (data, status,headers,config) {
           console.log('error occured');
       }
   );
});