angular.module('noServerApp')
.controller('homeCtrl',homeCtrl)



function homeCtrl($scope,homeService){

$scope.toTop = function(){
  return scroll(0,0);
}



}//end of home controller
