angular.module('noServerApp')
.controller('quoteCtrl',quoteCtrl)



function quoteCtrl($scope,quoteService){

  
  $scope.quotes=quoteService.data



}// end of quote controller
