/**
 * Created by Mario on 8.1.2015 г..
 */
var app = angular.module('Ads', ['ngRoute'])
    .config(function ($routeProvider) {
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
    });