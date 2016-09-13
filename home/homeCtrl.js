angular.module('noServerApp')
.controller('homeCtrl',homeCtrl)



function homeCtrl($scope,homeService){

$scope.toTop = function(){
  return scroll(0,0);
}

// $scope.colors = homeService.getColorWords()



}//end of home controller
