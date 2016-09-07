angular.module('noServerApp',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){


  $stateProvider
  .state('home',{
    url:'/home',
    templateUrl:'home/homeView.html',
    controller:'homeCtrl'
  })
  .state('quotes',{
    url:'/quotes',
    templateUrl:'quote/quoteView.html',
    controller:'quoteCtrl'
  })
  .state('weather',{
    url:'/weather',
    templateUrl:'weather/weatherVeiw.html',
    controller:'weatherCtrl'
  })
  .state('wikipedia',{
    url:'/wikipedia',
    templateUrl:'wikipedia/wikipediaView.html',
    controller:'wikipediaCtrl'
  })

  $urlRouterProvider
  .otherwise('/home')


});//end of app
