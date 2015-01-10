/**
 * Created by Mario on 8.1.2015 г..
 */
var app = angular.module('Ads', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html'
        });
        $routeProvider.when('/home', {
            templateUrl: 'templates/home.html'
        });
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'TownsController'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html'
        });
        $routeProvider.when('/user-home', {
            templateUrl: 'templates/user-home.html'
        });
        $routeProvider.when('/publish-new-ad', {
            templateUrl: 'templates/publish-new-ad.html'
        });
        $routeProvider.when('/my-ads', {
            templateUrl: 'templates/my-ads.html'
        });
    });