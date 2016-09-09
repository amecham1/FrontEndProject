
mainCtrl.$inject = ["$scope", "mainService"];
homeCtrl.$inject = ["$scope", "homeService"];
quoteService.$inject = ["$q", "$http"];
weatherCtrl.$inject = ["$scope", "weatherService"];
wikipediaCtrl.$inject = ["$scope", "wikipediaService"];
quoteCtrl.$inject = ["$scope", "quoteService"];angular.module('noServerApp',['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){


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


}]);//end of app

angular.module('noServerApp')
.controller('mainCtrl',mainCtrl)

function mainCtrl($scope,mainService){








}//end of controller

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



// this.getProgrammerQuote = function(){
//   console.log('fired!!');
//   var deffered = $q.defer();
//   $http({
//     method:"GET",
//     url:'quote/programQuotes.json'
//
//   }).then(function(programquote){
//     // console.log(programquote.data);
//     deffered.resolve(programquote.data)
//   })
//   return deffered.promise;
// }







}//end of quoteService

angular.module('noServerApp')
.service('weatherService',weatherService)


function weatherService(){








}//end of weather service

angular.module('noServerApp')
.service('wikipediaService',wikipediaService)


function wikipediaService(){






}//end of wikipediaService

angular.module('noServerApp')
.controller('weatherCtrl',weatherCtrl)

function weatherCtrl($scope,weatherService){




}//end of weather controller

angular.module('noServerApp')
.controller('wikipediaCtrl',wikipediaCtrl)


function wikipediaCtrl($scope,wikipediaService){






}// end of wikipedia controller

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
                // console.log($scope.famousQuotes);


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
  // console.log(getQuotes[0]['Quote']);
  $scope.quotes = getQuotes;
};
// console.log($scope.famousQuotes);
 // console.log($scope.famousQuotes.Author);

// var quoteArr =[];




//  $scope.getProgramQuotes = function(){
//   //  console.log('fired!');
//           quoteService.getProgrammerQuote()
//             .then(function(quote){
//              quoteArr = quote;
//            });
//         // console.log(quote);
// };
// console.log(quoteArr);
// $scope.getProgrammingQuotes = function(programmingQuotes){
//   console.log('fired!');
//   quoteService.getProgrammerQuotes()
//   .then(function(quote){
//     $scope.quotes = quotes;
//   });
// };



}// end of quote controller

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1haW5DdHJsLmpzIiwiaG9tZUN0cmwuanMiLCJob21lU2VydmljZS5qcyIsIm1haW5TZXJ2aWNlLmpzIiwicXVvdGVTZXJ2aWNlLmpzIiwid2VhdGhlclNlcnZpY2UuanMiLCJ3aWtpcGVkaWFTZXJ2aWNlLmpzIiwid2VhdGhlckN0cmwuanMiLCJ3aWtpcGVkaWFDdHJsLmpzIiwicXVvdGVDdHJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OzsrQ0FBQSxRQUFBLE9BQUEsY0FBQSxDQUFBO0NBQ0EsZ0RBQUEsU0FBQSxlQUFBLG1CQUFBOzs7RUFHQTtHQUNBLE1BQUEsT0FBQTtJQUNBLElBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTs7R0FFQSxNQUFBLFNBQUE7SUFDQSxJQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7O0dBRUEsTUFBQSxVQUFBO0lBQ0EsSUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBOztHQUVBLE1BQUEsWUFBQTtJQUNBLElBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTs7O0VBR0E7R0FDQSxVQUFBOzs7OztBQzNCQSxRQUFBLE9BQUE7Q0FDQSxXQUFBLFdBQUE7O0FBRUEsU0FBQSxTQUFBLE9BQUEsWUFBQTs7Ozs7Ozs7Ozs7QUNIQSxRQUFBLE9BQUE7Q0FDQSxXQUFBLFdBQUE7Ozs7QUFJQSxTQUFBLFNBQUEsT0FBQSxZQUFBOzs7Ozs7OztBQ0xBLFFBQUEsT0FBQTtDQUNBLFFBQUEsY0FBQTs7O0FBR0EsU0FBQSxhQUFBOzs7Ozs7O0FDSkEsUUFBQSxPQUFBO0NBQ0EsUUFBQSxjQUFBOztBQUVBLFNBQUEsYUFBQTs7Ozs7Ozs7OztBQ0hBLFFBQUEsT0FBQTtDQUNBLFFBQUEsZUFBQTs7O0FBR0EsU0FBQSxhQUFBLEdBQUEsTUFBQTs7QUFFQSxLQUFBLGFBQUEsVUFBQTtFQUNBLElBQUEsV0FBQSxHQUFBO0VBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxJQUFBO0tBQ0EsS0FBQSxTQUFBLFFBQUE7SUFDQSxTQUFBLFFBQUEsUUFBQTs7RUFFQSxPQUFBLFNBQUE7Ozs7OztBQU1BLEtBQUEsV0FBQSxVQUFBO0VBQ0EsSUFBQSxXQUFBLEdBQUE7RUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLElBQUE7SUFDQSxRQUFBO0lBQ0EsaUJBQUE7O0tBRUEsS0FBQSxTQUFBLE1BQUE7SUFDQSxTQUFBLFFBQUEsTUFBQTs7RUFFQSxPQUFBLFNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQSxRQUFBLE9BQUE7Q0FDQSxRQUFBLGlCQUFBOzs7QUFHQSxTQUFBLGdCQUFBOzs7Ozs7Ozs7OztBQ0pBLFFBQUEsT0FBQTtDQUNBLFFBQUEsbUJBQUE7OztBQUdBLFNBQUEsa0JBQUE7Ozs7Ozs7OztBQ0pBLFFBQUEsT0FBQTtDQUNBLFdBQUEsY0FBQTs7QUFFQSxTQUFBLFlBQUEsT0FBQSxlQUFBOzs7Ozs7O0FDSEEsUUFBQSxPQUFBO0NBQ0EsV0FBQSxnQkFBQTs7O0FBR0EsU0FBQSxjQUFBLE9BQUEsaUJBQUE7Ozs7Ozs7OztBQ0pBLFFBQUEsT0FBQTtDQUNBLFdBQUEsWUFBQTs7OztBQUlBLFNBQUEsVUFBQSxPQUFBLGFBQUE7O0VBRUEsT0FBQSxVQUFBOztBQUVBLElBQUEsZUFBQSxhQUFBO0dBQ0EsS0FBQSxTQUFBLFFBQUE7O0lBRUEsSUFBQSxJQUFBLEVBQUEsRUFBQSxFQUFBLFFBQUEsT0FBQSxJQUFBO01BQ0EsSUFBQSxTQUFBO1FBQ0EsT0FBQSxRQUFBO1FBQ0EsUUFBQTs7TUFFQSxPQUFBLFVBQUEsS0FBQTs7OztBQUlBLE9BQUEsZUFBQSxTQUFBLElBQUE7RUFDQSxPQUFBLFNBQUE7Ozs7O0FBS0EsT0FBQSxhQUFBOztDQUVBLElBQUEsZUFBQSxVQUFBO1VBQ0EsYUFBQTs7YUFFQSxLQUFBLFNBQUEsTUFBQTtnQkFDQSxJQUFBLFVBQUE7a0JBQ0EsT0FBQSxNQUFBO2tCQUNBLFNBQUEsTUFBQTs7Z0JBRUEsT0FBQSxhQUFBLEtBQUE7Ozs7Ozs7QUFPQSxJQUFBLFNBQUE7QUFDQSxJQUFBLFdBQUE7QUFDQSxJQUFBLGFBQUE7QUFDQSxJQUFBLFlBQUE7QUFDQSxJQUFBLFlBQUE7QUFDQSxJQUFBLFdBQUE7QUFDQSxJQUFBLFlBQUE7QUFDQSxJQUFBLFlBQUE7QUFDQSxJQUFBLFdBQUE7QUFDQSxJQUFBLFNBQUE7O0FBRUEsT0FBQSxpQkFBQSxTQUFBLFVBQUE7O0VBRUEsT0FBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ25vU2VydmVyQXBwJyxbJ3VpLnJvdXRlciddKVxuLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgLnN0YXRlKCdob21lJyx7XG4gICAgdXJsOicvaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6J2hvbWUvaG9tZVZpZXcuaHRtbCcsXG4gICAgY29udHJvbGxlcjonaG9tZUN0cmwnXG4gIH0pXG4gIC5zdGF0ZSgncXVvdGVzJyx7XG4gICAgdXJsOicvcXVvdGVzJyxcbiAgICB0ZW1wbGF0ZVVybDoncXVvdGUvcXVvdGVWaWV3Lmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6J3F1b3RlQ3RybCdcbiAgfSlcbiAgLnN0YXRlKCd3ZWF0aGVyJyx7XG4gICAgdXJsOicvd2VhdGhlcicsXG4gICAgdGVtcGxhdGVVcmw6J3dlYXRoZXIvd2VhdGhlclZlaXcuaHRtbCcsXG4gICAgY29udHJvbGxlcjond2VhdGhlckN0cmwnXG4gIH0pXG4gIC5zdGF0ZSgnd2lraXBlZGlhJyx7XG4gICAgdXJsOicvd2lraXBlZGlhJyxcbiAgICB0ZW1wbGF0ZVVybDond2lraXBlZGlhL3dpa2lwZWRpYVZpZXcuaHRtbCcsXG4gICAgY29udHJvbGxlcjond2lraXBlZGlhQ3RybCdcbiAgfSlcblxuICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgLm90aGVyd2lzZSgnL2hvbWUnKVxuXG5cbn0pOy8vZW5kIG9mIGFwcFxuIiwiYW5ndWxhci5tb2R1bGUoJ25vU2VydmVyQXBwJylcbi5jb250cm9sbGVyKCdtYWluQ3RybCcsbWFpbkN0cmwpXG5cbmZ1bmN0aW9uIG1haW5DdHJsKCRzY29wZSxtYWluU2VydmljZSl7XG5cblxuXG5cblxuXG5cblxufS8vZW5kIG9mIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uY29udHJvbGxlcignaG9tZUN0cmwnLGhvbWVDdHJsKVxuXG5cblxuZnVuY3Rpb24gaG9tZUN0cmwoJHNjb3BlLGhvbWVTZXJ2aWNlKXtcblxuXG5cblxuXG59Ly9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLnNlcnZpY2UoJ2hvbWVTZXJ2aWNlJyxob21lU2VydmljZSlcblxuXG5mdW5jdGlvbiBob21lU2VydmljZSgpe1xuXG5cblxuXG59Ly9lbmQgb2YgaG9tZSBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLnNlcnZpY2UoJ21haW5TZXJ2aWNlJyxtYWluU2VydmljZSlcblxuZnVuY3Rpb24gbWFpblNlcnZpY2UoKXtcblxuXG5cblxuXG5cblxufS8vIGVuZCBvZiBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLnNlcnZpY2UoJ3F1b3RlU2VydmljZScscXVvdGVTZXJ2aWNlKVxuXG5cbmZ1bmN0aW9uIHF1b3RlU2VydmljZSgkcSwkaHR0cCl7XG5cbnRoaXMuZ2V0U3dhbnNvbiA9IGZ1bmN0aW9uKCl7XG4gIHZhciBkZWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICRodHRwKHtcbiAgICBtZXRob2Q6XCJHRVRcIixcbiAgICB1cmw6XCJodHRwOi8vcm9uLXN3YW5zb24tcXVvdGVzLmhlcm9rdWFwcC5jb20vdjIvcXVvdGVzLzE1XCJcbiAgfSkudGhlbihmdW5jdGlvbihzd2Fuc29uKXtcbiAgICBkZWZmZXJlZC5yZXNvbHZlKHN3YW5zb24uZGF0YSlcbiAgfSlcbiAgcmV0dXJuIGRlZmZlcmVkLnByb21pc2U7XG59XG5cblxuXG5cbnRoaXMuZ2V0UXVvdGUgPSBmdW5jdGlvbigpe1xuICB2YXIgZGVmZmVyZWQgPSAkcS5kZWZlcigpO1xuICAkaHR0cCh7XG4gICAgbWV0aG9kOlwiR0VUXCIsXG4gICAgdXJsOlwiaHR0cHM6Ly9hbmRydXhuZXQtcmFuZG9tLWZhbW91cy1xdW90ZXMucC5tYXNoYXBlLmNvbS8/Y2F0PWZhbW91c1wiLFxuICAgIGhlYWRlcnM6e1xuICAgICdYLU1hc2hhcGUtS2V5JzogJ29DOXYyUU1WeXNtc2hKdjA1eVI0aUdHcnZQRmNwMWpiZ1huanNuZUU0M1QyWGJtdEc3J1xuICAgIH1cbiAgfSkudGhlbihmdW5jdGlvbihxdW90ZSl7XG4gICAgZGVmZmVyZWQucmVzb2x2ZShxdW90ZS5kYXRhKVxuICB9KVxuICByZXR1cm4gZGVmZmVyZWQucHJvbWlzZTtcbn1cblxuXG5cbi8vIHRoaXMuZ2V0UHJvZ3JhbW1lclF1b3RlID0gZnVuY3Rpb24oKXtcbi8vICAgY29uc29sZS5sb2coJ2ZpcmVkISEnKTtcbi8vICAgdmFyIGRlZmZlcmVkID0gJHEuZGVmZXIoKTtcbi8vICAgJGh0dHAoe1xuLy8gICAgIG1ldGhvZDpcIkdFVFwiLFxuLy8gICAgIHVybDoncXVvdGUvcHJvZ3JhbVF1b3Rlcy5qc29uJ1xuLy9cbi8vICAgfSkudGhlbihmdW5jdGlvbihwcm9ncmFtcXVvdGUpe1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2dyYW1xdW90ZS5kYXRhKTtcbi8vICAgICBkZWZmZXJlZC5yZXNvbHZlKHByb2dyYW1xdW90ZS5kYXRhKVxuLy8gICB9KVxuLy8gICByZXR1cm4gZGVmZmVyZWQucHJvbWlzZTtcbi8vIH1cblxuXG5cblxuXG5cblxufS8vZW5kIG9mIHF1b3RlU2VydmljZVxuIiwiYW5ndWxhci5tb2R1bGUoJ25vU2VydmVyQXBwJylcbi5zZXJ2aWNlKCd3ZWF0aGVyU2VydmljZScsd2VhdGhlclNlcnZpY2UpXG5cblxuZnVuY3Rpb24gd2VhdGhlclNlcnZpY2UoKXtcblxuXG5cblxuXG5cblxuXG59Ly9lbmQgb2Ygd2VhdGhlciBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLnNlcnZpY2UoJ3dpa2lwZWRpYVNlcnZpY2UnLHdpa2lwZWRpYVNlcnZpY2UpXG5cblxuZnVuY3Rpb24gd2lraXBlZGlhU2VydmljZSgpe1xuXG5cblxuXG5cblxufS8vZW5kIG9mIHdpa2lwZWRpYVNlcnZpY2VcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uY29udHJvbGxlcignd2VhdGhlckN0cmwnLHdlYXRoZXJDdHJsKVxuXG5mdW5jdGlvbiB3ZWF0aGVyQ3RybCgkc2NvcGUsd2VhdGhlclNlcnZpY2Upe1xuXG5cblxuXG59Ly9lbmQgb2Ygd2VhdGhlciBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLmNvbnRyb2xsZXIoJ3dpa2lwZWRpYUN0cmwnLHdpa2lwZWRpYUN0cmwpXG5cblxuZnVuY3Rpb24gd2lraXBlZGlhQ3RybCgkc2NvcGUsd2lraXBlZGlhU2VydmljZSl7XG5cblxuXG5cblxuXG59Ly8gZW5kIG9mIHdpa2lwZWRpYSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLmNvbnRyb2xsZXIoJ3F1b3RlQ3RybCcscXVvdGVDdHJsKTtcblxuXG5cbmZ1bmN0aW9uIHF1b3RlQ3RybCgkc2NvcGUscXVvdGVTZXJ2aWNlKXtcblxuICAkc2NvcGUucm9uUXVvdGVzPVtdO1xuXG52YXIgZ2V0Um9uUXVvdGVzID0gcXVvdGVTZXJ2aWNlLmdldFN3YW5zb24oKVxuICAudGhlbihmdW5jdGlvbihzd2Fuc29uKXtcblxuICAgIGZvcih2YXIgaT0wO2k8c3dhbnNvbi5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciByb25hbGQgPSB7XG4gICAgICAgIFF1b3RlOiBzd2Fuc29uW2ldLFxuICAgICAgICBBdXRob3I6IFwiUm9uIFN3YW5zb25cIlxuICAgICAgfTtcbiAgICAgICRzY29wZS5yb25RdW90ZXMucHVzaChyb25hbGQpO1xuICAgIH1cbiAgfSk7XG5cbiRzY29wZS5nZXRSb25RdW90ZXMgPSBmdW5jdGlvbihyb24pe1xuICAkc2NvcGUucXVvdGVzID0gcm9uO1xufTtcblxuXG4vLyBHZXQgZmFtb3VzUXVvdGVzXG4kc2NvcGUuZmFtb3VzUXVvdGVzPVtdO1xuXG4gdmFyIGZhbW91c1F1b3RlcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgcXVvdGVTZXJ2aWNlLmdldFF1b3RlKClcblxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocXVvdGUpe1xuICAgICAgICAgICAgICAgIHZhciBsZXR0ZXJzID0ge1xuICAgICAgICAgICAgICAgICAgUXVvdGU6IHF1b3RlLnF1b3RlLFxuICAgICAgICAgICAgICAgICAgQXV0aG9yOiAgcXVvdGUuYXV0aG9yXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmFtb3VzUXVvdGVzLnB1c2gobGV0dGVycyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJHNjb3BlLmZhbW91c1F1b3Rlcyk7XG5cblxuICAgICAgICAgICAgfSk7XG59O1xuXG52YXIgb25lUXVvdGU9ZmFtb3VzUXVvdGVzKCk7XG52YXIgdHdvUXVvdGUgPSBmYW1vdXNRdW90ZXMoKTtcbnZhciB0aHJlZVF1b3RlID0gZmFtb3VzUXVvdGVzKCk7XG52YXIgZm91clF1b3RlID0gZmFtb3VzUXVvdGVzKCk7XG52YXIgZml2ZVF1b3RlID0gZmFtb3VzUXVvdGVzKCk7XG52YXIgc2l4UXVvdGUgPSBmYW1vdXNRdW90ZXMoKTtcbnZhciBzZXZlblF1b3RlID1mYW1vdXNRdW90ZXMoKTtcbnZhciBlaWd0aFF1b3RlID1mYW1vdXNRdW90ZXMoKTtcbnZhciBuaW5lUXVvdGUgPWZhbW91c1F1b3RlcygpO1xudmFyIHRlblF1b3RlPWZhbW91c1F1b3RlcygpO1xuXG4kc2NvcGUuZ2V0TW92aWVRdW90ZXMgPSBmdW5jdGlvbihnZXRRdW90ZXMpe1xuICAvLyBjb25zb2xlLmxvZyhnZXRRdW90ZXNbMF1bJ1F1b3RlJ10pO1xuICAkc2NvcGUucXVvdGVzID0gZ2V0UXVvdGVzO1xufTtcbi8vIGNvbnNvbGUubG9nKCRzY29wZS5mYW1vdXNRdW90ZXMpO1xuIC8vIGNvbnNvbGUubG9nKCRzY29wZS5mYW1vdXNRdW90ZXMuQXV0aG9yKTtcblxuLy8gdmFyIHF1b3RlQXJyID1bXTtcblxuXG5cblxuLy8gICRzY29wZS5nZXRQcm9ncmFtUXVvdGVzID0gZnVuY3Rpb24oKXtcbi8vICAgLy8gIGNvbnNvbGUubG9nKCdmaXJlZCEnKTtcbi8vICAgICAgICAgICBxdW90ZVNlcnZpY2UuZ2V0UHJvZ3JhbW1lclF1b3RlKClcbi8vICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHF1b3RlKXtcbi8vICAgICAgICAgICAgICBxdW90ZUFyciA9IHF1b3RlO1xuLy8gICAgICAgICAgICB9KTtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2cocXVvdGUpO1xuLy8gfTtcbi8vIGNvbnNvbGUubG9nKHF1b3RlQXJyKTtcbi8vICRzY29wZS5nZXRQcm9ncmFtbWluZ1F1b3RlcyA9IGZ1bmN0aW9uKHByb2dyYW1taW5nUXVvdGVzKXtcbi8vICAgY29uc29sZS5sb2coJ2ZpcmVkIScpO1xuLy8gICBxdW90ZVNlcnZpY2UuZ2V0UHJvZ3JhbW1lclF1b3RlcygpXG4vLyAgIC50aGVuKGZ1bmN0aW9uKHF1b3RlKXtcbi8vICAgICAkc2NvcGUucXVvdGVzID0gcXVvdGVzO1xuLy8gICB9KTtcbi8vIH07XG5cblxuXG59Ly8gZW5kIG9mIHF1b3RlIGNvbnRyb2xsZXJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
