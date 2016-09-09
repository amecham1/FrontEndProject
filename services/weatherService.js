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
