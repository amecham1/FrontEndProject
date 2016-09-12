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

$scope.toTop = function(){
  return scroll(0,0);
}



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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1haW5DdHJsLmpzIiwibmF2LWJhci1kaXJlY3RpdmUuanMiLCJob21lQ3RybC5qcyIsImhvbWVTZXJ2aWNlLmpzIiwibWFpblNlcnZpY2UuanMiLCJxdW90ZVNlcnZpY2UuanMiLCJ3ZWF0aGVyU2VydmljZS5qcyIsIndlYXRoZXJDdHJsLmpzIiwicXVvdGVDdHJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcsWyd1aS5yb3V0ZXInXSlcbi5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsJHVybFJvdXRlclByb3ZpZGVyKXtcblxuXG4gICRzdGF0ZVByb3ZpZGVyXG4gIC5zdGF0ZSgnaG9tZScse1xuICAgIHVybDonL2hvbWUnLFxuICAgIHRlbXBsYXRlVXJsOidob21lL2hvbWVWaWV3Lmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6J2hvbWVDdHJsJ1xuICB9KVxuICAuc3RhdGUoJ3F1b3Rlcycse1xuICAgIHVybDonL3F1b3RlcycsXG4gICAgdGVtcGxhdGVVcmw6J3F1b3RlL3F1b3RlVmlldy5odG1sJyxcbiAgICBjb250cm9sbGVyOidxdW90ZUN0cmwnXG4gIH0pXG4gIC5zdGF0ZSgnd2VhdGhlcicse1xuICAgIHVybDonL3dlYXRoZXInLFxuICAgIHRlbXBsYXRlVXJsOid3ZWF0aGVyL3dlYXRoZXJWZWl3Lmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6J3dlYXRoZXJDdHJsJ1xuICB9KVxuXG4gICR1cmxSb3V0ZXJQcm92aWRlclxuICAub3RoZXJ3aXNlKCcvaG9tZScpXG5cblxufSk7Ly9lbmQgb2YgYXBwXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLmNvbnRyb2xsZXIoJ21haW5DdHJsJyxtYWluQ3RybClcblxuZnVuY3Rpb24gbWFpbkN0cmwoJHNjb3BlLG1haW5TZXJ2aWNlKXtcblxuXG5cblxuXG5cblxuXG59Ly9lbmQgb2YgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ25vU2VydmVyQXBwJylcbi5kaXJlY3RpdmUoJ25hdkRpcmVjdGl2ZScsZnVuY3Rpb24oKXtcblxucmV0dXJuIHtcbnJlc3RyaWN0OiAnRScsXG50ZW1wbGF0ZVVybDogJ2RpcmVjdGl2ZXMvbmF2dGVtcGxhdGUuaHRtbCdcbn1cblxuXG5cblxuXG5cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJyxob21lQ3RybClcblxuXG5cbmZ1bmN0aW9uIGhvbWVDdHJsKCRzY29wZSxob21lU2VydmljZSl7XG5cbiRzY29wZS50b1RvcCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBzY3JvbGwoMCwwKTtcbn1cblxuXG5cbn0vL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uc2VydmljZSgnaG9tZVNlcnZpY2UnLGhvbWVTZXJ2aWNlKVxuXG5cbmZ1bmN0aW9uIGhvbWVTZXJ2aWNlKCl7XG5cblxuXG5cbn0vL2VuZCBvZiBob21lIHNlcnZpY2VcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uc2VydmljZSgnbWFpblNlcnZpY2UnLG1haW5TZXJ2aWNlKVxuXG5mdW5jdGlvbiBtYWluU2VydmljZSgpe1xuXG5cblxuXG5cblxuXG59Ly8gZW5kIG9mIHNlcnZpY2VcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uc2VydmljZSgncXVvdGVTZXJ2aWNlJyxxdW90ZVNlcnZpY2UpXG5cblxuZnVuY3Rpb24gcXVvdGVTZXJ2aWNlKCRxLCRodHRwKXtcblxudGhpcy5nZXRTd2Fuc29uID0gZnVuY3Rpb24oKXtcbiAgdmFyIGRlZmZlcmVkID0gJHEuZGVmZXIoKTtcbiAgJGh0dHAoe1xuICAgIG1ldGhvZDpcIkdFVFwiLFxuICAgIHVybDpcImh0dHA6Ly9yb24tc3dhbnNvbi1xdW90ZXMuaGVyb2t1YXBwLmNvbS92Mi9xdW90ZXMvMTVcIlxuICB9KS50aGVuKGZ1bmN0aW9uKHN3YW5zb24pe1xuICAgIGRlZmZlcmVkLnJlc29sdmUoc3dhbnNvbi5kYXRhKVxuICB9KVxuICByZXR1cm4gZGVmZmVyZWQucHJvbWlzZTtcbn1cblxuXG5cblxudGhpcy5nZXRRdW90ZSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBkZWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICRodHRwKHtcbiAgICBtZXRob2Q6XCJHRVRcIixcbiAgICB1cmw6XCJodHRwczovL2FuZHJ1eG5ldC1yYW5kb20tZmFtb3VzLXF1b3Rlcy5wLm1hc2hhcGUuY29tLz9jYXQ9ZmFtb3VzXCIsXG4gICAgaGVhZGVyczp7XG4gICAgJ1gtTWFzaGFwZS1LZXknOiAnb0M5djJRTVZ5c21zaEp2MDV5UjRpR0dydlBGY3AxamJnWG5qc25lRTQzVDJYYm10RzcnXG4gICAgfVxuICB9KS50aGVuKGZ1bmN0aW9uKHF1b3RlKXtcbiAgICBkZWZmZXJlZC5yZXNvbHZlKHF1b3RlLmRhdGEpXG4gIH0pXG4gIHJldHVybiBkZWZmZXJlZC5wcm9taXNlO1xufVxuXG5cblxudGhpcy5nZXRQcm9ncmFtbWVyUXVvdGUgPSBmdW5jdGlvbigpe1xuICBjb25zb2xlLmxvZygnZmlyZWQhIScpO1xuICB2YXIgZGVmZmVyZWQgPSAkcS5kZWZlcigpO1xuICAkaHR0cCh7XG4gICAgbWV0aG9kOlwiR0VUXCIsXG4gICAgdXJsOidxdW90ZS9wcm9ncmFtUXVvdGVzLmpzb24nXG5cbiAgfSkudGhlbihmdW5jdGlvbihwcm9ncmFtcXVvdGUpe1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2dyYW1xdW90ZS5kYXRhKTtcbiAgICBkZWZmZXJlZC5yZXNvbHZlKHByb2dyYW1xdW90ZS5kYXRhKVxuICB9KVxuICByZXR1cm4gZGVmZmVyZWQucHJvbWlzZTtcbn1cblxuXG5cblxuXG5cblxufS8vZW5kIG9mIHF1b3RlU2VydmljZVxuIiwiYW5ndWxhci5tb2R1bGUoJ25vU2VydmVyQXBwJylcbi5zZXJ2aWNlKCd3ZWF0aGVyU2VydmljZScsd2VhdGhlclNlcnZpY2UpO1xuXG5cbmZ1bmN0aW9uIHdlYXRoZXJTZXJ2aWNlKCRxLCRodHRwKXtcblxuXG50aGlzLmdldFdlYXRoZXIgPWZ1bmN0aW9uKGxvY2F0aW9uKXtcbiAgdmFyIGRlZmZlcmVkID0gJHEuZGVmZXIoKTtcbiAgJGh0dHAoe1xuICAgIG1ldGhvZDonR0VUJyxcbiAgICB1cmw6J2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT16aXA9Jytsb2NhdGlvbisnJnVuaXRzPWltcGVyaWFsJmFwcGlkPWMxMGVmOTljNWFmZGVlM2ZkZmJhNzhlOGM5ODFhOWI2J1xuICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZGF0YS5tYWluKTtcbiAgICBkZWZmZXJlZC5yZXNvbHZlKGRhdGEuZGF0YSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZmVyZWQucHJvbWlzZTtcbn07XG5cblxuXG5cbn0vL2VuZCBvZiB3ZWF0aGVyIHNlcnZpY2VcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uY29udHJvbGxlcignd2VhdGhlckN0cmwnLHdlYXRoZXJDdHJsKTtcblxuZnVuY3Rpb24gd2VhdGhlckN0cmwoJHNjb3BlLHdlYXRoZXJTZXJ2aWNlKXtcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiRzY29wZS5oaWRkZW4gPXRydWU7XG5cblxuJHNjb3BlLmdldGxvY2F0aW9uID0gZnVuY3Rpb24obG9jYXRpb24pe1xuXG4gIHdlYXRoZXJTZXJ2aWNlLmdldFdlYXRoZXIobG9jYXRpb24pXG4gIC50aGVuKGZ1bmN0aW9uKHdlYXRoZXJyZXN1bHRzKXtcbiAgICAkc2NvcGUud2VhdGhlciA9IHdlYXRoZXJyZXN1bHRzO1xuICAgICRzY29wZS5oaWRkZW49ZmFsc2U7XG4gICAgJHNjb3BlLndlYXRoZXJzZWFyY2ggPSAnJztcbiAgfSk7XG59O1xuXG5cblxuXG5cbi8vIH0pOy8vZW5kIG9mIGpxdWVyeVxuXG5cbn0vL2VuZCBvZiB3ZWF0aGVyIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uY29udHJvbGxlcigncXVvdGVDdHJsJyxxdW90ZUN0cmwpO1xuXG5cblxuZnVuY3Rpb24gcXVvdGVDdHJsKCRzY29wZSxxdW90ZVNlcnZpY2Upe1xuXG4gICRzY29wZS5yb25RdW90ZXM9W107XG5cbnZhciBnZXRSb25RdW90ZXMgPSBxdW90ZVNlcnZpY2UuZ2V0U3dhbnNvbigpXG4gIC50aGVuKGZ1bmN0aW9uKHN3YW5zb24pe1xuXG4gICAgZm9yKHZhciBpPTA7aTxzd2Fuc29uLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHJvbmFsZCA9IHtcbiAgICAgICAgUXVvdGU6IHN3YW5zb25baV0sXG4gICAgICAgIEF1dGhvcjogXCJSb24gU3dhbnNvblwiXG4gICAgICB9O1xuICAgICAgJHNjb3BlLnJvblF1b3Rlcy5wdXNoKHJvbmFsZCk7XG4gICAgfVxuICB9KTtcblxuJHNjb3BlLmdldFJvblF1b3RlcyA9IGZ1bmN0aW9uKHJvbil7XG4gICRzY29wZS5xdW90ZXMgPSByb247XG59O1xuXG5cbi8vIEdldCBmYW1vdXNRdW90ZXNcbiRzY29wZS5mYW1vdXNRdW90ZXM9W107XG5cbiB2YXIgZmFtb3VzUXVvdGVzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICBxdW90ZVNlcnZpY2UuZ2V0UXVvdGUoKVxuXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihxdW90ZSl7XG4gICAgICAgICAgICAgICAgdmFyIGxldHRlcnMgPSB7XG4gICAgICAgICAgICAgICAgICBRdW90ZTogcXVvdGUucXVvdGUsXG4gICAgICAgICAgICAgICAgICBBdXRob3I6ICBxdW90ZS5hdXRob3JcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICRzY29wZS5mYW1vdXNRdW90ZXMucHVzaChsZXR0ZXJzKTtcblxuXG4gICAgICAgICAgICB9KTtcbn07XG5cbnZhciBvbmVRdW90ZT1mYW1vdXNRdW90ZXMoKTtcbnZhciB0d29RdW90ZSA9IGZhbW91c1F1b3RlcygpO1xudmFyIHRocmVlUXVvdGUgPSBmYW1vdXNRdW90ZXMoKTtcbnZhciBmb3VyUXVvdGUgPSBmYW1vdXNRdW90ZXMoKTtcbnZhciBmaXZlUXVvdGUgPSBmYW1vdXNRdW90ZXMoKTtcbnZhciBzaXhRdW90ZSA9IGZhbW91c1F1b3RlcygpO1xudmFyIHNldmVuUXVvdGUgPWZhbW91c1F1b3RlcygpO1xudmFyIGVpZ3RoUXVvdGUgPWZhbW91c1F1b3RlcygpO1xudmFyIG5pbmVRdW90ZSA9ZmFtb3VzUXVvdGVzKCk7XG52YXIgdGVuUXVvdGU9ZmFtb3VzUXVvdGVzKCk7XG5cbiRzY29wZS5nZXRNb3ZpZVF1b3RlcyA9IGZ1bmN0aW9uKGdldFF1b3Rlcyl7XG4gICRzY29wZS5xdW90ZXMgPSBnZXRRdW90ZXM7XG59O1xuXG5cblxuXG5cbiAkc2NvcGUuZ2V0UHJvZ3JhbVF1b3RlcyA9IGZ1bmN0aW9uKCkge1xucXVvdGVTZXJ2aWNlLmdldFByb2dyYW1tZXJRdW90ZSgpXG4gICAgLnRoZW4oZnVuY3Rpb24ocXVvdGUpIHtcbiAgICAgIHZhciBwcm9ncmFtQXJyID0gW107XG4gICAgICBmb3IodmFyIGkgPSAwO2k8cXVvdGUubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgcHJvZ3JhbU9iaiA9IHtcbiAgICAgICAgICBRdW90ZTogcXVvdGVbaV0ucXVvdGUsXG4gICAgICAgICAgQXV0aG9yOiBxdW90ZVtpXS5hdXRob3JcbiAgICAgICAgfTtcbiAgICAgICAgcHJvZ3JhbUFyci5wdXNoKHByb2dyYW1PYmopO1xuICAgICAgfVxuICAgICAgICAkc2NvcGUucXVvdGVzID0gcHJvZ3JhbUFycjtcbiAgICB9KTtcbn07XG5cblxuXG5cbn0vLyBlbmQgb2YgcXVvdGUgY29udHJvbGxlclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
