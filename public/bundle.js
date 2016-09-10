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

  $urlRouterProvider
  .otherwise('/home')


});//end of app

angular.module('noServerApp')
.controller('mainCtrl',mainCtrl)

function mainCtrl($scope,mainService){








}//end of controller

angular.module('noServerApp')
.directive('navDirective',function(){

return {
restrict: 'E',
templateUrl: 'directives/navtemplate.html'
}






})

angular.module('noServerApp')
.controller('homeCtrl',homeCtrl)



function homeCtrl($scope,homeService){





}//end of home controller

angular.module('noServerApp')
.service('homeService',homeService)


function homeService(){




}//end of home service

angular.module('noServerApp')
.service('mainService',mainService)

function mainService(){







}// end of service

angular.module('noServerApp')
.service('quoteService',quoteService)


function quoteService($q,$http){

this.getSwanson = function(){
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:"http://ron-swanson-quotes.herokuapp.com/v2/quotes/15"
  }).then(function(swanson){
    deffered.resolve(swanson.data)
  })
  return deffered.promise;
}




this.getQuote = function(){
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:"https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    headers:{
    'X-Mashape-Key': 'oC9v2QMVysmshJv05yR4iGGrvPFcp1jbgXnjsneE43T2XbmtG7'
    }
  }).then(function(quote){
    deffered.resolve(quote.data)
  })
  return deffered.promise;
}



this.getProgrammerQuote = function(){
  console.log('fired!!');
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:'quote/programQuotes.json'

  }).then(function(programquote){
    // console.log(programquote.data);
    deffered.resolve(programquote.data)
  })
  return deffered.promise;
}







}//end of quoteService

angular.module('noServerApp')
.service('weatherService',weatherService);


function weatherService($q,$http){


this.getWeather =function(location){
  var deffered = $q.defer();
  $http({
    method:'GET',
    url:'http://api.openweathermap.org/data/2.5/weather?q=zip='+location+'&units=imperial&appid=c10ef99c5afdee3fdfba78e8c981a9b6'
  }).then(function(data){
    // console.log(data.data.main);
    deffered.resolve(data.data);
  });
  return deffered.promise;
};




}//end of weather service

angular.module('noServerApp')
.controller('weatherCtrl',weatherCtrl);

function weatherCtrl($scope,weatherService){
// $(document).ready(function(){

$scope.hidden =true;


$scope.getlocation = function(location){

  weatherService.getWeather(location)
  .then(function(weatherresults){
    $scope.weather = weatherresults;
    $scope.hidden=false;
    $scope.weathersearch = '';
  });
};





// });//end of jquery


}//end of weather controller

angular.module('noServerApp')
.controller('quoteCtrl',quoteCtrl);



function quoteCtrl($scope,quoteService){

  $scope.ronQuotes=[];

var getRonQuotes = quoteService.getSwanson()
  .then(function(swanson){

    for(var i=0;i<swanson.length;i++){
      var ronald = {
        Quote: swanson[i],
        Author: "Ron Swanson"
      };
      $scope.ronQuotes.push(ronald);
    }
  });

$scope.getRonQuotes = function(ron){
  $scope.quotes = ron;
};


// Get famousQuotes
$scope.famousQuotes=[];

 var famousQuotes = function(){
          quoteService.getQuote()

            .then(function(quote){
                var letters = {
                  Quote: quote.quote,
                  Author:  quote.author
                };
                $scope.famousQuotes.push(letters);


            });
};

var oneQuote=famousQuotes();
var twoQuote = famousQuotes();
var threeQuote = famousQuotes();
var fourQuote = famousQuotes();
var fiveQuote = famousQuotes();
var sixQuote = famousQuotes();
var sevenQuote =famousQuotes();
var eigthQuote =famousQuotes();
var nineQuote =famousQuotes();
var tenQuote=famousQuotes();

$scope.getMovieQuotes = function(getQuotes){
  $scope.quotes = getQuotes;
};





 $scope.getProgramQuotes = function() {
quoteService.getProgrammerQuote()
    .then(function(quote) {
      var programArr = [];
      for(var i = 0;i<quote.length; i++){
        var programObj = {
          Quote: quote[i].quote,
          Author: quote[i].author
        };
        programArr.push(programObj);
      }
        $scope.quotes = programArr;
    });
};




}// end of quote controller

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1haW5DdHJsLmpzIiwibmF2LWJhci1kaXJlY3RpdmUuanMiLCJob21lQ3RybC5qcyIsImhvbWVTZXJ2aWNlLmpzIiwibWFpblNlcnZpY2UuanMiLCJxdW90ZVNlcnZpY2UuanMiLCJ3ZWF0aGVyU2VydmljZS5qcyIsIndlYXRoZXJDdHJsLmpzIiwicXVvdGVDdHJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ25vU2VydmVyQXBwJyxbJ3VpLnJvdXRlciddKVxuLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgLnN0YXRlKCdob21lJyx7XG4gICAgdXJsOicvaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6J2hvbWUvaG9tZVZpZXcuaHRtbCcsXG4gICAgY29udHJvbGxlcjonaG9tZUN0cmwnXG4gIH0pXG4gIC5zdGF0ZSgncXVvdGVzJyx7XG4gICAgdXJsOicvcXVvdGVzJyxcbiAgICB0ZW1wbGF0ZVVybDoncXVvdGUvcXVvdGVWaWV3Lmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6J3F1b3RlQ3RybCdcbiAgfSlcbiAgLnN0YXRlKCd3ZWF0aGVyJyx7XG4gICAgdXJsOicvd2VhdGhlcicsXG4gICAgdGVtcGxhdGVVcmw6J3dlYXRoZXIvd2VhdGhlclZlaXcuaHRtbCcsXG4gICAgY29udHJvbGxlcjond2VhdGhlckN0cmwnXG4gIH0pXG5cbiAgJHVybFJvdXRlclByb3ZpZGVyXG4gIC5vdGhlcndpc2UoJy9ob21lJylcblxuXG59KTsvL2VuZCBvZiBhcHBcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uY29udHJvbGxlcignbWFpbkN0cmwnLG1haW5DdHJsKVxuXG5mdW5jdGlvbiBtYWluQ3RybCgkc2NvcGUsbWFpblNlcnZpY2Upe1xuXG5cblxuXG5cblxuXG5cbn0vL2VuZCBvZiBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLmRpcmVjdGl2ZSgnbmF2RGlyZWN0aXZlJyxmdW5jdGlvbigpe1xuXG5yZXR1cm4ge1xucmVzdHJpY3Q6ICdFJyxcbnRlbXBsYXRlVXJsOiAnZGlyZWN0aXZlcy9uYXZ0ZW1wbGF0ZS5odG1sJ1xufVxuXG5cblxuXG5cblxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uY29udHJvbGxlcignaG9tZUN0cmwnLGhvbWVDdHJsKVxuXG5cblxuZnVuY3Rpb24gaG9tZUN0cmwoJHNjb3BlLGhvbWVTZXJ2aWNlKXtcblxuXG5cblxuXG59Ly9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLnNlcnZpY2UoJ2hvbWVTZXJ2aWNlJyxob21lU2VydmljZSlcblxuXG5mdW5jdGlvbiBob21lU2VydmljZSgpe1xuXG5cblxuXG59Ly9lbmQgb2YgaG9tZSBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLnNlcnZpY2UoJ21haW5TZXJ2aWNlJyxtYWluU2VydmljZSlcblxuZnVuY3Rpb24gbWFpblNlcnZpY2UoKXtcblxuXG5cblxuXG5cblxufS8vIGVuZCBvZiBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLnNlcnZpY2UoJ3F1b3RlU2VydmljZScscXVvdGVTZXJ2aWNlKVxuXG5cbmZ1bmN0aW9uIHF1b3RlU2VydmljZSgkcSwkaHR0cCl7XG5cbnRoaXMuZ2V0U3dhbnNvbiA9IGZ1bmN0aW9uKCl7XG4gIHZhciBkZWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICRodHRwKHtcbiAgICBtZXRob2Q6XCJHRVRcIixcbiAgICB1cmw6XCJodHRwOi8vcm9uLXN3YW5zb24tcXVvdGVzLmhlcm9rdWFwcC5jb20vdjIvcXVvdGVzLzE1XCJcbiAgfSkudGhlbihmdW5jdGlvbihzd2Fuc29uKXtcbiAgICBkZWZmZXJlZC5yZXNvbHZlKHN3YW5zb24uZGF0YSlcbiAgfSlcbiAgcmV0dXJuIGRlZmZlcmVkLnByb21pc2U7XG59XG5cblxuXG5cbnRoaXMuZ2V0UXVvdGUgPSBmdW5jdGlvbigpe1xuICB2YXIgZGVmZmVyZWQgPSAkcS5kZWZlcigpO1xuICAkaHR0cCh7XG4gICAgbWV0aG9kOlwiR0VUXCIsXG4gICAgdXJsOlwiaHR0cHM6Ly9hbmRydXhuZXQtcmFuZG9tLWZhbW91cy1xdW90ZXMucC5tYXNoYXBlLmNvbS8/Y2F0PWZhbW91c1wiLFxuICAgIGhlYWRlcnM6e1xuICAgICdYLU1hc2hhcGUtS2V5JzogJ29DOXYyUU1WeXNtc2hKdjA1eVI0aUdHcnZQRmNwMWpiZ1huanNuZUU0M1QyWGJtdEc3J1xuICAgIH1cbiAgfSkudGhlbihmdW5jdGlvbihxdW90ZSl7XG4gICAgZGVmZmVyZWQucmVzb2x2ZShxdW90ZS5kYXRhKVxuICB9KVxuICByZXR1cm4gZGVmZmVyZWQucHJvbWlzZTtcbn1cblxuXG5cbnRoaXMuZ2V0UHJvZ3JhbW1lclF1b3RlID0gZnVuY3Rpb24oKXtcbiAgY29uc29sZS5sb2coJ2ZpcmVkISEnKTtcbiAgdmFyIGRlZmZlcmVkID0gJHEuZGVmZXIoKTtcbiAgJGh0dHAoe1xuICAgIG1ldGhvZDpcIkdFVFwiLFxuICAgIHVybDoncXVvdGUvcHJvZ3JhbVF1b3Rlcy5qc29uJ1xuXG4gIH0pLnRoZW4oZnVuY3Rpb24ocHJvZ3JhbXF1b3RlKXtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9ncmFtcXVvdGUuZGF0YSk7XG4gICAgZGVmZmVyZWQucmVzb2x2ZShwcm9ncmFtcXVvdGUuZGF0YSlcbiAgfSlcbiAgcmV0dXJuIGRlZmZlcmVkLnByb21pc2U7XG59XG5cblxuXG5cblxuXG5cbn0vL2VuZCBvZiBxdW90ZVNlcnZpY2VcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uc2VydmljZSgnd2VhdGhlclNlcnZpY2UnLHdlYXRoZXJTZXJ2aWNlKTtcblxuXG5mdW5jdGlvbiB3ZWF0aGVyU2VydmljZSgkcSwkaHR0cCl7XG5cblxudGhpcy5nZXRXZWF0aGVyID1mdW5jdGlvbihsb2NhdGlvbil7XG4gIHZhciBkZWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICRodHRwKHtcbiAgICBtZXRob2Q6J0dFVCcsXG4gICAgdXJsOidodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9emlwPScrbG9jYXRpb24rJyZ1bml0cz1pbXBlcmlhbCZhcHBpZD1jMTBlZjk5YzVhZmRlZTNmZGZiYTc4ZThjOTgxYTliNidcbiAgfSkudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmRhdGEubWFpbik7XG4gICAgZGVmZmVyZWQucmVzb2x2ZShkYXRhLmRhdGEpO1xuICB9KTtcbiAgcmV0dXJuIGRlZmZlcmVkLnByb21pc2U7XG59O1xuXG5cblxuXG59Ly9lbmQgb2Ygd2VhdGhlciBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLmNvbnRyb2xsZXIoJ3dlYXRoZXJDdHJsJyx3ZWF0aGVyQ3RybCk7XG5cbmZ1bmN0aW9uIHdlYXRoZXJDdHJsKCRzY29wZSx3ZWF0aGVyU2VydmljZSl7XG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4kc2NvcGUuaGlkZGVuID10cnVlO1xuXG5cbiRzY29wZS5nZXRsb2NhdGlvbiA9IGZ1bmN0aW9uKGxvY2F0aW9uKXtcblxuICB3ZWF0aGVyU2VydmljZS5nZXRXZWF0aGVyKGxvY2F0aW9uKVxuICAudGhlbihmdW5jdGlvbih3ZWF0aGVycmVzdWx0cyl7XG4gICAgJHNjb3BlLndlYXRoZXIgPSB3ZWF0aGVycmVzdWx0cztcbiAgICAkc2NvcGUuaGlkZGVuPWZhbHNlO1xuICAgICRzY29wZS53ZWF0aGVyc2VhcmNoID0gJyc7XG4gIH0pO1xufTtcblxuXG5cblxuXG4vLyB9KTsvL2VuZCBvZiBqcXVlcnlcblxuXG59Ly9lbmQgb2Ygd2VhdGhlciBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLmNvbnRyb2xsZXIoJ3F1b3RlQ3RybCcscXVvdGVDdHJsKTtcblxuXG5cbmZ1bmN0aW9uIHF1b3RlQ3RybCgkc2NvcGUscXVvdGVTZXJ2aWNlKXtcblxuICAkc2NvcGUucm9uUXVvdGVzPVtdO1xuXG52YXIgZ2V0Um9uUXVvdGVzID0gcXVvdGVTZXJ2aWNlLmdldFN3YW5zb24oKVxuICAudGhlbihmdW5jdGlvbihzd2Fuc29uKXtcblxuICAgIGZvcih2YXIgaT0wO2k8c3dhbnNvbi5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciByb25hbGQgPSB7XG4gICAgICAgIFF1b3RlOiBzd2Fuc29uW2ldLFxuICAgICAgICBBdXRob3I6IFwiUm9uIFN3YW5zb25cIlxuICAgICAgfTtcbiAgICAgICRzY29wZS5yb25RdW90ZXMucHVzaChyb25hbGQpO1xuICAgIH1cbiAgfSk7XG5cbiRzY29wZS5nZXRSb25RdW90ZXMgPSBmdW5jdGlvbihyb24pe1xuICAkc2NvcGUucXVvdGVzID0gcm9uO1xufTtcblxuXG4vLyBHZXQgZmFtb3VzUXVvdGVzXG4kc2NvcGUuZmFtb3VzUXVvdGVzPVtdO1xuXG4gdmFyIGZhbW91c1F1b3RlcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgcXVvdGVTZXJ2aWNlLmdldFF1b3RlKClcblxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocXVvdGUpe1xuICAgICAgICAgICAgICAgIHZhciBsZXR0ZXJzID0ge1xuICAgICAgICAgICAgICAgICAgUXVvdGU6IHF1b3RlLnF1b3RlLFxuICAgICAgICAgICAgICAgICAgQXV0aG9yOiAgcXVvdGUuYXV0aG9yXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmFtb3VzUXVvdGVzLnB1c2gobGV0dGVycyk7XG5cblxuICAgICAgICAgICAgfSk7XG59O1xuXG52YXIgb25lUXVvdGU9ZmFtb3VzUXVvdGVzKCk7XG52YXIgdHdvUXVvdGUgPSBmYW1vdXNRdW90ZXMoKTtcbnZhciB0aHJlZVF1b3RlID0gZmFtb3VzUXVvdGVzKCk7XG52YXIgZm91clF1b3RlID0gZmFtb3VzUXVvdGVzKCk7XG52YXIgZml2ZVF1b3RlID0gZmFtb3VzUXVvdGVzKCk7XG52YXIgc2l4UXVvdGUgPSBmYW1vdXNRdW90ZXMoKTtcbnZhciBzZXZlblF1b3RlID1mYW1vdXNRdW90ZXMoKTtcbnZhciBlaWd0aFF1b3RlID1mYW1vdXNRdW90ZXMoKTtcbnZhciBuaW5lUXVvdGUgPWZhbW91c1F1b3RlcygpO1xudmFyIHRlblF1b3RlPWZhbW91c1F1b3RlcygpO1xuXG4kc2NvcGUuZ2V0TW92aWVRdW90ZXMgPSBmdW5jdGlvbihnZXRRdW90ZXMpe1xuICAkc2NvcGUucXVvdGVzID0gZ2V0UXVvdGVzO1xufTtcblxuXG5cblxuXG4gJHNjb3BlLmdldFByb2dyYW1RdW90ZXMgPSBmdW5jdGlvbigpIHtcbnF1b3RlU2VydmljZS5nZXRQcm9ncmFtbWVyUXVvdGUoKVxuICAgIC50aGVuKGZ1bmN0aW9uKHF1b3RlKSB7XG4gICAgICB2YXIgcHJvZ3JhbUFyciA9IFtdO1xuICAgICAgZm9yKHZhciBpID0gMDtpPHF1b3RlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHByb2dyYW1PYmogPSB7XG4gICAgICAgICAgUXVvdGU6IHF1b3RlW2ldLnF1b3RlLFxuICAgICAgICAgIEF1dGhvcjogcXVvdGVbaV0uYXV0aG9yXG4gICAgICAgIH07XG4gICAgICAgIHByb2dyYW1BcnIucHVzaChwcm9ncmFtT2JqKTtcbiAgICAgIH1cbiAgICAgICAgJHNjb3BlLnF1b3RlcyA9IHByb2dyYW1BcnI7XG4gICAgfSk7XG59O1xuXG5cblxuXG59Ly8gZW5kIG9mIHF1b3RlIGNvbnRyb2xsZXJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
