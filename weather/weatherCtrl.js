angular.module('noServerApp')
.controller('weatherCtrl',weatherCtrl);

function weatherCtrl($scope,weatherService){

$scope.hidden =true;


$scope.getlocation = function(location){

  weatherService.getWeather(location)
  .then(function(weatherresults){
    $scope.weather = weatherresults;
    $scope.hidden=false;
    $scope.weathersearch = '';
  });
};






}//end of weather controller
