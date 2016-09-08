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






}//end of quoteService
