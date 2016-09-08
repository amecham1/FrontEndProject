angular.module('noServerApp')
.controller('quoteCtrl',quoteCtrl)



function quoteCtrl($scope,quoteService){


quoteService.getSwanson()
  .then(function(swanson){
    var ronQuotes=[];
    for(var i=0;i<swanson.length;i++){
      var ronald = {
        Quote: swanson[i],
        Author: "- Ron Swanson"
      }
      ronQuotes.push(ronald)
    }
    $scope.quotes=ronQuotes;
  })




}// end of quote controller
