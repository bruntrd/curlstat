var myApp= angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngMaterial', 'ngAria','chart.js','ngDragDrop','ngMdIcons']);

var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home',{
            templateUrl: "/assets/views/routes/home.html",
            controller: "HomeController"
        }).
        when('/contact', {
            templateUrl: '/assets/views/routes/contact.html',
            controller: "ContactController"
        }).
        when('/about', {
            templateUrl: '/assets/views/routes/about.html',
            controller: "AboutController"
        }).
        when('/approute', {
            templateUrl: '/assets/views/routes/approute.html',
            controller: "ApprouteController"
        }).
        when('/login', {
            templateUrl: '/assets/views/routes/login.html',
            controller: "LoginController"
        }).
        when('/register', {
            templateUrl: '/assets/views/routes/register.html',
            controller: "RegisterController"
        }).
        when('/event', {
            templateUrl: '/assets/views/routes/event.html',
            controller: "AppController"
        }).
        when('/results', {
            templateUrl: '/assets/views/routes/results.html',
            controller: "ResultsController"
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);

myApp.controller('MainController', ['$scope', '$mdSidenav', function($scope,$mdSidenav){
    $scope.toggleSidenav = function(menuId){
        $mdSidenav(menuId).toggle();
    }
}]);

myApp.controller('AppController', ['$scope', function($scope){


}]);


