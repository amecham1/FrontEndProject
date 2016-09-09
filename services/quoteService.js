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
