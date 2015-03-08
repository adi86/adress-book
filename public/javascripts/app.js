var adressBook = angular.module('adressBook', ['ngRoute', 'ngResource']);

adressBook.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: '/views/book.html',
        controller: 'bookController'
    }).when('/add', {
        templateUrl: '/views/addBook.html',
        controller: 'addBookController'
    })
});

