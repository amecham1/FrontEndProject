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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1haW5DdHJsLmpzIiwiaG9tZUN0cmwuanMiLCJob21lU2VydmljZS5qcyIsIm1haW5TZXJ2aWNlLmpzIiwicXVvdGVTZXJ2aWNlLmpzIiwid2VhdGhlclNlcnZpY2UuanMiLCJ3ZWF0aGVyQ3RybC5qcyIsInF1b3RlQ3RybC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcsWyd1aS5yb3V0ZXInXSlcbi5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsJHVybFJvdXRlclByb3ZpZGVyKXtcblxuXG4gICRzdGF0ZVByb3ZpZGVyXG4gIC5zdGF0ZSgnaG9tZScse1xuICAgIHVybDonL2hvbWUnLFxuICAgIHRlbXBsYXRlVXJsOidob21lL2hvbWVWaWV3Lmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6J2hvbWVDdHJsJ1xuICB9KVxuICAuc3RhdGUoJ3F1b3Rlcycse1xuICAgIHVybDonL3F1b3RlcycsXG4gICAgdGVtcGxhdGVVcmw6J3F1b3RlL3F1b3RlVmlldy5odG1sJyxcbiAgICBjb250cm9sbGVyOidxdW90ZUN0cmwnXG4gIH0pXG4gIC5zdGF0ZSgnd2VhdGhlcicse1xuICAgIHVybDonL3dlYXRoZXInLFxuICAgIHRlbXBsYXRlVXJsOid3ZWF0aGVyL3dlYXRoZXJWZWl3Lmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6J3dlYXRoZXJDdHJsJ1xuICB9KVxuXG4gICR1cmxSb3V0ZXJQcm92aWRlclxuICAub3RoZXJ3aXNlKCcvaG9tZScpXG5cblxufSk7Ly9lbmQgb2YgYXBwXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLmNvbnRyb2xsZXIoJ21haW5DdHJsJyxtYWluQ3RybClcblxuZnVuY3Rpb24gbWFpbkN0cmwoJHNjb3BlLG1haW5TZXJ2aWNlKXtcblxuXG5cblxuXG5cblxuXG59Ly9lbmQgb2YgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ25vU2VydmVyQXBwJylcbi5jb250cm9sbGVyKCdob21lQ3RybCcsaG9tZUN0cmwpXG5cblxuXG5mdW5jdGlvbiBob21lQ3RybCgkc2NvcGUsaG9tZVNlcnZpY2Upe1xuXG5cblxuXG5cbn0vL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uc2VydmljZSgnaG9tZVNlcnZpY2UnLGhvbWVTZXJ2aWNlKVxuXG5cbmZ1bmN0aW9uIGhvbWVTZXJ2aWNlKCl7XG5cblxuXG5cbn0vL2VuZCBvZiBob21lIHNlcnZpY2VcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uc2VydmljZSgnbWFpblNlcnZpY2UnLG1haW5TZXJ2aWNlKVxuXG5mdW5jdGlvbiBtYWluU2VydmljZSgpe1xuXG5cblxuXG5cblxuXG59Ly8gZW5kIG9mIHNlcnZpY2VcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uc2VydmljZSgncXVvdGVTZXJ2aWNlJyxxdW90ZVNlcnZpY2UpXG5cblxuZnVuY3Rpb24gcXVvdGVTZXJ2aWNlKCRxLCRodHRwKXtcblxudGhpcy5nZXRTd2Fuc29uID0gZnVuY3Rpb24oKXtcbiAgdmFyIGRlZmZlcmVkID0gJHEuZGVmZXIoKTtcbiAgJGh0dHAoe1xuICAgIG1ldGhvZDpcIkdFVFwiLFxuICAgIHVybDpcImh0dHA6Ly9yb24tc3dhbnNvbi1xdW90ZXMuaGVyb2t1YXBwLmNvbS92Mi9xdW90ZXMvMTVcIlxuICB9KS50aGVuKGZ1bmN0aW9uKHN3YW5zb24pe1xuICAgIGRlZmZlcmVkLnJlc29sdmUoc3dhbnNvbi5kYXRhKVxuICB9KVxuICByZXR1cm4gZGVmZmVyZWQucHJvbWlzZTtcbn1cblxuXG5cblxudGhpcy5nZXRRdW90ZSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBkZWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICRodHRwKHtcbiAgICBtZXRob2Q6XCJHRVRcIixcbiAgICB1cmw6XCJodHRwczovL2FuZHJ1eG5ldC1yYW5kb20tZmFtb3VzLXF1b3Rlcy5wLm1hc2hhcGUuY29tLz9jYXQ9ZmFtb3VzXCIsXG4gICAgaGVhZGVyczp7XG4gICAgJ1gtTWFzaGFwZS1LZXknOiAnb0M5djJRTVZ5c21zaEp2MDV5UjRpR0dydlBGY3AxamJnWG5qc25lRTQzVDJYYm10RzcnXG4gICAgfVxuICB9KS50aGVuKGZ1bmN0aW9uKHF1b3RlKXtcbiAgICBkZWZmZXJlZC5yZXNvbHZlKHF1b3RlLmRhdGEpXG4gIH0pXG4gIHJldHVybiBkZWZmZXJlZC5wcm9taXNlO1xufVxuXG5cblxuLy8gdGhpcy5nZXRQcm9ncmFtbWVyUXVvdGUgPSBmdW5jdGlvbigpe1xuLy8gICBjb25zb2xlLmxvZygnZmlyZWQhIScpO1xuLy8gICB2YXIgZGVmZmVyZWQgPSAkcS5kZWZlcigpO1xuLy8gICAkaHR0cCh7XG4vLyAgICAgbWV0aG9kOlwiR0VUXCIsXG4vLyAgICAgdXJsOidxdW90ZS9wcm9ncmFtUXVvdGVzLmpzb24nXG4vL1xuLy8gICB9KS50aGVuKGZ1bmN0aW9uKHByb2dyYW1xdW90ZSl7XG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvZ3JhbXF1b3RlLmRhdGEpO1xuLy8gICAgIGRlZmZlcmVkLnJlc29sdmUocHJvZ3JhbXF1b3RlLmRhdGEpXG4vLyAgIH0pXG4vLyAgIHJldHVybiBkZWZmZXJlZC5wcm9taXNlO1xuLy8gfVxuXG5cblxuXG5cblxuXG59Ly9lbmQgb2YgcXVvdGVTZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLnNlcnZpY2UoJ3dlYXRoZXJTZXJ2aWNlJyx3ZWF0aGVyU2VydmljZSk7XG5cblxuZnVuY3Rpb24gd2VhdGhlclNlcnZpY2UoJHEsJGh0dHApe1xuXG5cbnRoaXMuZ2V0V2VhdGhlciA9ZnVuY3Rpb24obG9jYXRpb24pe1xuICB2YXIgZGVmZmVyZWQgPSAkcS5kZWZlcigpO1xuICAkaHR0cCh7XG4gICAgbWV0aG9kOidHRVQnLFxuICAgIHVybDonaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPXppcD0nK2xvY2F0aW9uKycmdW5pdHM9aW1wZXJpYWwmYXBwaWQ9YzEwZWY5OWM1YWZkZWUzZmRmYmE3OGU4Yzk4MWE5YjYnXG4gIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YS5kYXRhLm1haW4pO1xuICAgIGRlZmZlcmVkLnJlc29sdmUoZGF0YS5kYXRhKTtcbiAgfSk7XG4gIHJldHVybiBkZWZmZXJlZC5wcm9taXNlO1xufTtcblxuXG5cblxufS8vZW5kIG9mIHdlYXRoZXIgc2VydmljZVxuIiwiYW5ndWxhci5tb2R1bGUoJ25vU2VydmVyQXBwJylcbi5jb250cm9sbGVyKCd3ZWF0aGVyQ3RybCcsd2VhdGhlckN0cmwpO1xuXG5mdW5jdGlvbiB3ZWF0aGVyQ3RybCgkc2NvcGUsd2VhdGhlclNlcnZpY2Upe1xuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuJHNjb3BlLmhpZGRlbiA9dHJ1ZTtcblxuXG4kc2NvcGUuZ2V0bG9jYXRpb24gPSBmdW5jdGlvbihsb2NhdGlvbil7XG5cbiAgd2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlcihsb2NhdGlvbilcbiAgLnRoZW4oZnVuY3Rpb24od2VhdGhlcnJlc3VsdHMpe1xuICAgICRzY29wZS53ZWF0aGVyID0gd2VhdGhlcnJlc3VsdHM7XG4gICAgJHNjb3BlLmhpZGRlbj1mYWxzZTtcbiAgICAkc2NvcGUud2VhdGhlcnNlYXJjaCA9ICcnO1xuICB9KTtcbn07XG5cblxuXG5cblxuLy8gfSk7Ly9lbmQgb2YganF1ZXJ5XG5cblxufS8vZW5kIG9mIHdlYXRoZXIgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ25vU2VydmVyQXBwJylcbi5jb250cm9sbGVyKCdxdW90ZUN0cmwnLHF1b3RlQ3RybCk7XG5cblxuXG5mdW5jdGlvbiBxdW90ZUN0cmwoJHNjb3BlLHF1b3RlU2VydmljZSl7XG5cbiAgJHNjb3BlLnJvblF1b3Rlcz1bXTtcblxudmFyIGdldFJvblF1b3RlcyA9IHF1b3RlU2VydmljZS5nZXRTd2Fuc29uKClcbiAgLnRoZW4oZnVuY3Rpb24oc3dhbnNvbil7XG5cbiAgICBmb3IodmFyIGk9MDtpPHN3YW5zb24ubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgcm9uYWxkID0ge1xuICAgICAgICBRdW90ZTogc3dhbnNvbltpXSxcbiAgICAgICAgQXV0aG9yOiBcIlJvbiBTd2Fuc29uXCJcbiAgICAgIH07XG4gICAgICAkc2NvcGUucm9uUXVvdGVzLnB1c2gocm9uYWxkKTtcbiAgICB9XG4gIH0pO1xuXG4kc2NvcGUuZ2V0Um9uUXVvdGVzID0gZnVuY3Rpb24ocm9uKXtcbiAgJHNjb3BlLnF1b3RlcyA9IHJvbjtcbn07XG5cblxuLy8gR2V0IGZhbW91c1F1b3Rlc1xuJHNjb3BlLmZhbW91c1F1b3Rlcz1bXTtcblxuIHZhciBmYW1vdXNRdW90ZXMgPSBmdW5jdGlvbigpe1xuICAgICAgICAgIHF1b3RlU2VydmljZS5nZXRRdW90ZSgpXG5cbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHF1b3RlKXtcbiAgICAgICAgICAgICAgICB2YXIgbGV0dGVycyA9IHtcbiAgICAgICAgICAgICAgICAgIFF1b3RlOiBxdW90ZS5xdW90ZSxcbiAgICAgICAgICAgICAgICAgIEF1dGhvcjogIHF1b3RlLmF1dGhvclxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgJHNjb3BlLmZhbW91c1F1b3Rlcy5wdXNoKGxldHRlcnMpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCRzY29wZS5mYW1vdXNRdW90ZXMpO1xuXG5cbiAgICAgICAgICAgIH0pO1xufTtcblxudmFyIG9uZVF1b3RlPWZhbW91c1F1b3RlcygpO1xudmFyIHR3b1F1b3RlID0gZmFtb3VzUXVvdGVzKCk7XG52YXIgdGhyZWVRdW90ZSA9IGZhbW91c1F1b3RlcygpO1xudmFyIGZvdXJRdW90ZSA9IGZhbW91c1F1b3RlcygpO1xudmFyIGZpdmVRdW90ZSA9IGZhbW91c1F1b3RlcygpO1xudmFyIHNpeFF1b3RlID0gZmFtb3VzUXVvdGVzKCk7XG52YXIgc2V2ZW5RdW90ZSA9ZmFtb3VzUXVvdGVzKCk7XG52YXIgZWlndGhRdW90ZSA9ZmFtb3VzUXVvdGVzKCk7XG52YXIgbmluZVF1b3RlID1mYW1vdXNRdW90ZXMoKTtcbnZhciB0ZW5RdW90ZT1mYW1vdXNRdW90ZXMoKTtcblxuJHNjb3BlLmdldE1vdmllUXVvdGVzID0gZnVuY3Rpb24oZ2V0UXVvdGVzKXtcbiAgLy8gY29uc29sZS5sb2coZ2V0UXVvdGVzWzBdWydRdW90ZSddKTtcbiAgJHNjb3BlLnF1b3RlcyA9IGdldFF1b3Rlcztcbn07XG4vLyBjb25zb2xlLmxvZygkc2NvcGUuZmFtb3VzUXVvdGVzKTtcbiAvLyBjb25zb2xlLmxvZygkc2NvcGUuZmFtb3VzUXVvdGVzLkF1dGhvcik7XG5cbi8vIHZhciBxdW90ZUFyciA9W107XG5cblxuXG5cbi8vICAkc2NvcGUuZ2V0UHJvZ3JhbVF1b3RlcyA9IGZ1bmN0aW9uKCl7XG4vLyAgIC8vICBjb25zb2xlLmxvZygnZmlyZWQhJyk7XG4vLyAgICAgICAgICAgcXVvdGVTZXJ2aWNlLmdldFByb2dyYW1tZXJRdW90ZSgpXG4vLyAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihxdW90ZSl7XG4vLyAgICAgICAgICAgICAgcXVvdGVBcnIgPSBxdW90ZTtcbi8vICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHF1b3RlKTtcbi8vIH07XG4vLyBjb25zb2xlLmxvZyhxdW90ZUFycik7XG4vLyAkc2NvcGUuZ2V0UHJvZ3JhbW1pbmdRdW90ZXMgPSBmdW5jdGlvbihwcm9ncmFtbWluZ1F1b3Rlcyl7XG4vLyAgIGNvbnNvbGUubG9nKCdmaXJlZCEnKTtcbi8vICAgcXVvdGVTZXJ2aWNlLmdldFByb2dyYW1tZXJRdW90ZXMoKVxuLy8gICAudGhlbihmdW5jdGlvbihxdW90ZSl7XG4vLyAgICAgJHNjb3BlLnF1b3RlcyA9IHF1b3Rlcztcbi8vICAgfSk7XG4vLyB9O1xuXG5cblxufS8vIGVuZCBvZiBxdW90ZSBjb250cm9sbGVyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
