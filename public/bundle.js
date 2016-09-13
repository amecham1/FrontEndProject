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
    .directive('homeTextDirective', function() {

            return {
                restrict: 'E',
                templateUrl: 'directives/home-text.html',
                scope: {
                    message: "@"
                },
                link: function(scope, elem, attrs) {
                    var a = angular.element;
                    scope.message = 'Bacon ipsum dolor amet leberkas doner kevin picanha pork ham hock. Picanha beef ribs short loin kevin leberkas jerky. Sirloin ham hock drumstick shoulder picanha pork porchetta jerky salami tri-tip. Capicola boudin landjaeger frankfurter filet mignon picanha jerky beef drumstick salami meatloaf tail.Bacon ipsum dolor amet leberkas doner kevin picanha pork ham hock. Picanha beef ribs short loin kevin leberkas jerky. Sirloin ham hock drumstick shoulder picanha pork porchetta jerky salami tri-tip. Capicola boudin landjaeger frankfurter filet mignon picanha jerky beef drumstick salami meatloaf tail.Bacon ipsum dolor amet leberkas doner kevin picanha pork ham hock. Picanha beef ribs short loin kevin leberkas jerky. Sirloin ham hock drumstick shoulder picanha pork porchetta jerky salami tri-tip. Capicola boudin landjaeger frankfurter filet mignon picanha jerky beef drumstick salami meatloaf tail.Bacon ipsum dolor amet leberkas doner kevin picanha pork ham hock. Picanha beef ribs short loin kevin leberkas jerky. Sirloin ham hock drumstick shoulder picanha pork porchetta jerky salami tri-tip. Capicola boudin landjaeger frankfurter filet mignon picanha jerky beef drumstick salami meatloaf tail.';
                    getRandom = function(min, max) {
                         this.min = Math.ceil(min);
                         this.max = Math.floor(max);
                         return Math.floor(Math.random() * (max - min)) + min;
                     }
                     var color = function(getRandomInt) {

                         var r = getRandom(0, 255).toString(16);
                         var g = getRandom(0, 255).toString(16);
                         var b = getRandom(0, 255).toString(16);
                         return '#' + r + g + b;

                     };

                    // this.getColorWords = function() {
                        var messageArr = scope.message.split(" ");
                        var colors = messageArr.map(color);
                        for (var i = 0; i < messageArr.length; i++) {
                         colorItem = a('<span></span>');
                          colorItem.text(messageArr[i]+ ' ');
                          colorItem.css({
                            'color': color()
                          });

                          elem.append(colorItem);






                            //elem[0].innerHTML = "<span style='color:" + colors[(i % colors.length)] + ";'>" + messageArr[i] + " </span>";
                        }

                }
              }
            });

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

// $scope.colors = homeService.getColorWords()



}//end of home controller

angular.module('noServerApp')
    .service('homeService', homeService);


function homeService() {





} //end of home service

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
  var deffered = $q.defer();
  $http({
    method:"GET",
    url:'quote/programQuotes.json'

  }).then(function(programquote){
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

angular.module('noServerApp')
.controller('quoteCtrl',quoteCtrl);



function quoteCtrl($scope,quoteService){

  function getBackgrounds(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  $scope.ronQuotes=[];

var getRonQuotes = quoteService.getSwanson()
  .then(function(swanson){

    for(var i=0;i<swanson.length;i++){
      var ronald = {
        Quote: swanson[i],
        Author: "Ron Swanson",
        Num: getBackgrounds(1,9)
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
                  Author:  quote.author,
                  Num: getBackgrounds(1,9)
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
          Author: quote[i].author,
          Num: getBackgrounds(1,9)
        };
        programArr.push(programObj);
      }
        $scope.quotes = programArr;

    });
};


$scope.backNum = getBackgrounds(1,9);





}// end of quote controller

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1haW5DdHJsLmpzIiwiaG9tZS10ZXh0LWRpcmVjdGl2ZS5qcyIsIm5hdi1iYXItZGlyZWN0aXZlLmpzIiwiaG9tZUN0cmwuanMiLCJob21lU2VydmljZS5qcyIsIm1haW5TZXJ2aWNlLmpzIiwicXVvdGVTZXJ2aWNlLmpzIiwid2VhdGhlclNlcnZpY2UuanMiLCJ3ZWF0aGVyQ3RybC5qcyIsInF1b3RlQ3RybC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnLFsndWkucm91dGVyJ10pXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcil7XG5cblxuICAkc3RhdGVQcm92aWRlclxuICAuc3RhdGUoJ2hvbWUnLHtcbiAgICB1cmw6Jy9ob21lJyxcbiAgICB0ZW1wbGF0ZVVybDonaG9tZS9ob21lVmlldy5odG1sJyxcbiAgICBjb250cm9sbGVyOidob21lQ3RybCdcbiAgfSlcbiAgLnN0YXRlKCdxdW90ZXMnLHtcbiAgICB1cmw6Jy9xdW90ZXMnLFxuICAgIHRlbXBsYXRlVXJsOidxdW90ZS9xdW90ZVZpZXcuaHRtbCcsXG4gICAgY29udHJvbGxlcjoncXVvdGVDdHJsJ1xuICB9KVxuICAuc3RhdGUoJ3dlYXRoZXInLHtcbiAgICB1cmw6Jy93ZWF0aGVyJyxcbiAgICB0ZW1wbGF0ZVVybDond2VhdGhlci93ZWF0aGVyVmVpdy5odG1sJyxcbiAgICBjb250cm9sbGVyOid3ZWF0aGVyQ3RybCdcbiAgfSlcblxuICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgLm90aGVyd2lzZSgnL2hvbWUnKVxuXG5cbn0pOy8vZW5kIG9mIGFwcFxuIiwiYW5ndWxhci5tb2R1bGUoJ25vU2VydmVyQXBwJylcbi5jb250cm9sbGVyKCdtYWluQ3RybCcsbWFpbkN0cmwpXG5cbmZ1bmN0aW9uIG1haW5DdHJsKCRzY29wZSxtYWluU2VydmljZSl7XG5cblxuXG5cblxuXG5cblxufS8vZW5kIG9mIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4gICAgLmRpcmVjdGl2ZSgnaG9tZVRleHREaXJlY3RpdmUnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnZGlyZWN0aXZlcy9ob21lLXRleHQuaHRtbCcsXG4gICAgICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJAXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtLCBhdHRycykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGFuZ3VsYXIuZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUubWVzc2FnZSA9ICdCYWNvbiBpcHN1bSBkb2xvciBhbWV0IGxlYmVya2FzIGRvbmVyIGtldmluIHBpY2FuaGEgcG9yayBoYW0gaG9jay4gUGljYW5oYSBiZWVmIHJpYnMgc2hvcnQgbG9pbiBrZXZpbiBsZWJlcmthcyBqZXJreS4gU2lybG9pbiBoYW0gaG9jayBkcnVtc3RpY2sgc2hvdWxkZXIgcGljYW5oYSBwb3JrIHBvcmNoZXR0YSBqZXJreSBzYWxhbWkgdHJpLXRpcC4gQ2FwaWNvbGEgYm91ZGluIGxhbmRqYWVnZXIgZnJhbmtmdXJ0ZXIgZmlsZXQgbWlnbm9uIHBpY2FuaGEgamVya3kgYmVlZiBkcnVtc3RpY2sgc2FsYW1pIG1lYXRsb2FmIHRhaWwuQmFjb24gaXBzdW0gZG9sb3IgYW1ldCBsZWJlcmthcyBkb25lciBrZXZpbiBwaWNhbmhhIHBvcmsgaGFtIGhvY2suIFBpY2FuaGEgYmVlZiByaWJzIHNob3J0IGxvaW4ga2V2aW4gbGViZXJrYXMgamVya3kuIFNpcmxvaW4gaGFtIGhvY2sgZHJ1bXN0aWNrIHNob3VsZGVyIHBpY2FuaGEgcG9yayBwb3JjaGV0dGEgamVya3kgc2FsYW1pIHRyaS10aXAuIENhcGljb2xhIGJvdWRpbiBsYW5kamFlZ2VyIGZyYW5rZnVydGVyIGZpbGV0IG1pZ25vbiBwaWNhbmhhIGplcmt5IGJlZWYgZHJ1bXN0aWNrIHNhbGFtaSBtZWF0bG9hZiB0YWlsLkJhY29uIGlwc3VtIGRvbG9yIGFtZXQgbGViZXJrYXMgZG9uZXIga2V2aW4gcGljYW5oYSBwb3JrIGhhbSBob2NrLiBQaWNhbmhhIGJlZWYgcmlicyBzaG9ydCBsb2luIGtldmluIGxlYmVya2FzIGplcmt5LiBTaXJsb2luIGhhbSBob2NrIGRydW1zdGljayBzaG91bGRlciBwaWNhbmhhIHBvcmsgcG9yY2hldHRhIGplcmt5IHNhbGFtaSB0cmktdGlwLiBDYXBpY29sYSBib3VkaW4gbGFuZGphZWdlciBmcmFua2Z1cnRlciBmaWxldCBtaWdub24gcGljYW5oYSBqZXJreSBiZWVmIGRydW1zdGljayBzYWxhbWkgbWVhdGxvYWYgdGFpbC5CYWNvbiBpcHN1bSBkb2xvciBhbWV0IGxlYmVya2FzIGRvbmVyIGtldmluIHBpY2FuaGEgcG9yayBoYW0gaG9jay4gUGljYW5oYSBiZWVmIHJpYnMgc2hvcnQgbG9pbiBrZXZpbiBsZWJlcmthcyBqZXJreS4gU2lybG9pbiBoYW0gaG9jayBkcnVtc3RpY2sgc2hvdWxkZXIgcGljYW5oYSBwb3JrIHBvcmNoZXR0YSBqZXJreSBzYWxhbWkgdHJpLXRpcC4gQ2FwaWNvbGEgYm91ZGluIGxhbmRqYWVnZXIgZnJhbmtmdXJ0ZXIgZmlsZXQgbWlnbm9uIHBpY2FuaGEgamVya3kgYmVlZiBkcnVtc3RpY2sgc2FsYW1pIG1lYXRsb2FmIHRhaWwuJztcbiAgICAgICAgICAgICAgICAgICAgZ2V0UmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3IgPSBmdW5jdGlvbihnZXRSYW5kb21JbnQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gZ2V0UmFuZG9tKDAsIDI1NSkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnID0gZ2V0UmFuZG9tKDAsIDI1NSkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiID0gZ2V0UmFuZG9tKDAsIDI1NSkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnIycgKyByICsgZyArIGI7XG5cbiAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nZXRDb2xvcldvcmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZUFyciA9IHNjb3BlLm1lc3NhZ2Uuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9ycyA9IG1lc3NhZ2VBcnIubWFwKGNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVzc2FnZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ySXRlbSA9IGEoJzxzcGFuPjwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JJdGVtLnRleHQobWVzc2FnZUFycltpXSsgJyAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JJdGVtLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogY29sb3IoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmFwcGVuZChjb2xvckl0ZW0pO1xuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWxlbVswXS5pbm5lckhUTUwgPSBcIjxzcGFuIHN0eWxlPSdjb2xvcjpcIiArIGNvbG9yc1soaSAlIGNvbG9ycy5sZW5ndGgpXSArIFwiOyc+XCIgKyBtZXNzYWdlQXJyW2ldICsgXCIgPC9zcGFuPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uZGlyZWN0aXZlKCduYXZEaXJlY3RpdmUnLGZ1bmN0aW9uKCl7XG5cbnJldHVybiB7XG5yZXN0cmljdDogJ0UnLFxudGVtcGxhdGVVcmw6ICdkaXJlY3RpdmVzL25hdnRlbXBsYXRlLmh0bWwnXG59XG5cblxuXG5cblxuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ25vU2VydmVyQXBwJylcbi5jb250cm9sbGVyKCdob21lQ3RybCcsaG9tZUN0cmwpXG5cblxuXG5mdW5jdGlvbiBob21lQ3RybCgkc2NvcGUsaG9tZVNlcnZpY2Upe1xuXG4kc2NvcGUudG9Ub3AgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gc2Nyb2xsKDAsMCk7XG59XG5cbi8vICRzY29wZS5jb2xvcnMgPSBob21lU2VydmljZS5nZXRDb2xvcldvcmRzKClcblxuXG5cbn0vL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4gICAgLnNlcnZpY2UoJ2hvbWVTZXJ2aWNlJywgaG9tZVNlcnZpY2UpO1xuXG5cbmZ1bmN0aW9uIGhvbWVTZXJ2aWNlKCkge1xuXG5cblxuXG5cbn0gLy9lbmQgb2YgaG9tZSBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLnNlcnZpY2UoJ21haW5TZXJ2aWNlJyxtYWluU2VydmljZSlcblxuZnVuY3Rpb24gbWFpblNlcnZpY2UoKXtcblxuXG5cblxuXG5cblxufS8vIGVuZCBvZiBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLnNlcnZpY2UoJ3F1b3RlU2VydmljZScscXVvdGVTZXJ2aWNlKVxuXG5cbmZ1bmN0aW9uIHF1b3RlU2VydmljZSgkcSwkaHR0cCl7XG5cbnRoaXMuZ2V0U3dhbnNvbiA9IGZ1bmN0aW9uKCl7XG4gIHZhciBkZWZmZXJlZCA9ICRxLmRlZmVyKCk7XG4gICRodHRwKHtcbiAgICBtZXRob2Q6XCJHRVRcIixcbiAgICB1cmw6XCJodHRwOi8vcm9uLXN3YW5zb24tcXVvdGVzLmhlcm9rdWFwcC5jb20vdjIvcXVvdGVzLzE1XCJcbiAgfSkudGhlbihmdW5jdGlvbihzd2Fuc29uKXtcbiAgICBkZWZmZXJlZC5yZXNvbHZlKHN3YW5zb24uZGF0YSlcbiAgfSlcbiAgcmV0dXJuIGRlZmZlcmVkLnByb21pc2U7XG59XG5cblxuXG5cbnRoaXMuZ2V0UXVvdGUgPSBmdW5jdGlvbigpe1xuICB2YXIgZGVmZmVyZWQgPSAkcS5kZWZlcigpO1xuICAkaHR0cCh7XG4gICAgbWV0aG9kOlwiR0VUXCIsXG4gICAgdXJsOlwiaHR0cHM6Ly9hbmRydXhuZXQtcmFuZG9tLWZhbW91cy1xdW90ZXMucC5tYXNoYXBlLmNvbS8/Y2F0PWZhbW91c1wiLFxuICAgIGhlYWRlcnM6e1xuICAgICdYLU1hc2hhcGUtS2V5JzogJ29DOXYyUU1WeXNtc2hKdjA1eVI0aUdHcnZQRmNwMWpiZ1huanNuZUU0M1QyWGJtdEc3J1xuICAgIH1cbiAgfSkudGhlbihmdW5jdGlvbihxdW90ZSl7XG4gICAgZGVmZmVyZWQucmVzb2x2ZShxdW90ZS5kYXRhKVxuICB9KVxuICByZXR1cm4gZGVmZmVyZWQucHJvbWlzZTtcbn1cblxuXG5cbnRoaXMuZ2V0UHJvZ3JhbW1lclF1b3RlID0gZnVuY3Rpb24oKXtcbiAgdmFyIGRlZmZlcmVkID0gJHEuZGVmZXIoKTtcbiAgJGh0dHAoe1xuICAgIG1ldGhvZDpcIkdFVFwiLFxuICAgIHVybDoncXVvdGUvcHJvZ3JhbVF1b3Rlcy5qc29uJ1xuXG4gIH0pLnRoZW4oZnVuY3Rpb24ocHJvZ3JhbXF1b3RlKXtcbiAgICBkZWZmZXJlZC5yZXNvbHZlKHByb2dyYW1xdW90ZS5kYXRhKVxuICB9KVxuICByZXR1cm4gZGVmZmVyZWQucHJvbWlzZTtcbn1cblxuXG5cblxuXG5cblxufS8vZW5kIG9mIHF1b3RlU2VydmljZVxuIiwiYW5ndWxhci5tb2R1bGUoJ25vU2VydmVyQXBwJylcbi5zZXJ2aWNlKCd3ZWF0aGVyU2VydmljZScsd2VhdGhlclNlcnZpY2UpO1xuXG5cbmZ1bmN0aW9uIHdlYXRoZXJTZXJ2aWNlKCRxLCRodHRwKXtcblxuXG50aGlzLmdldFdlYXRoZXIgPWZ1bmN0aW9uKGxvY2F0aW9uKXtcbiAgdmFyIGRlZmZlcmVkID0gJHEuZGVmZXIoKTtcbiAgJGh0dHAoe1xuICAgIG1ldGhvZDonR0VUJyxcbiAgICB1cmw6J2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT16aXA9Jytsb2NhdGlvbisnJnVuaXRzPWltcGVyaWFsJmFwcGlkPWMxMGVmOTljNWFmZGVlM2ZkZmJhNzhlOGM5ODFhOWI2J1xuICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZGF0YS5tYWluKTtcbiAgICBkZWZmZXJlZC5yZXNvbHZlKGRhdGEuZGF0YSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZmVyZWQucHJvbWlzZTtcbn07XG5cblxuXG5cbn0vL2VuZCBvZiB3ZWF0aGVyIHNlcnZpY2VcbiIsImFuZ3VsYXIubW9kdWxlKCdub1NlcnZlckFwcCcpXG4uY29udHJvbGxlcignd2VhdGhlckN0cmwnLHdlYXRoZXJDdHJsKTtcblxuZnVuY3Rpb24gd2VhdGhlckN0cmwoJHNjb3BlLHdlYXRoZXJTZXJ2aWNlKXtcblxuJHNjb3BlLmhpZGRlbiA9dHJ1ZTtcblxuXG4kc2NvcGUuZ2V0bG9jYXRpb24gPSBmdW5jdGlvbihsb2NhdGlvbil7XG5cbiAgd2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlcihsb2NhdGlvbilcbiAgLnRoZW4oZnVuY3Rpb24od2VhdGhlcnJlc3VsdHMpe1xuICAgICRzY29wZS53ZWF0aGVyID0gd2VhdGhlcnJlc3VsdHM7XG4gICAgJHNjb3BlLmhpZGRlbj1mYWxzZTtcbiAgICAkc2NvcGUud2VhdGhlcnNlYXJjaCA9ICcnO1xuICB9KTtcbn07XG5cblxuXG5cblxuXG59Ly9lbmQgb2Ygd2VhdGhlciBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbm9TZXJ2ZXJBcHAnKVxuLmNvbnRyb2xsZXIoJ3F1b3RlQ3RybCcscXVvdGVDdHJsKTtcblxuXG5cbmZ1bmN0aW9uIHF1b3RlQ3RybCgkc2NvcGUscXVvdGVTZXJ2aWNlKXtcblxuICBmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kcyhtaW4sIG1heCkge1xuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICB9XG5cbiAgJHNjb3BlLnJvblF1b3Rlcz1bXTtcblxudmFyIGdldFJvblF1b3RlcyA9IHF1b3RlU2VydmljZS5nZXRTd2Fuc29uKClcbiAgLnRoZW4oZnVuY3Rpb24oc3dhbnNvbil7XG5cbiAgICBmb3IodmFyIGk9MDtpPHN3YW5zb24ubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgcm9uYWxkID0ge1xuICAgICAgICBRdW90ZTogc3dhbnNvbltpXSxcbiAgICAgICAgQXV0aG9yOiBcIlJvbiBTd2Fuc29uXCIsXG4gICAgICAgIE51bTogZ2V0QmFja2dyb3VuZHMoMSw5KVxuICAgICAgfTtcbiAgICAgICAgJHNjb3BlLnJvblF1b3Rlcy5wdXNoKHJvbmFsZCk7XG4gICAgfVxuICB9KTtcblxuJHNjb3BlLmdldFJvblF1b3RlcyA9IGZ1bmN0aW9uKHJvbil7XG4gICRzY29wZS5xdW90ZXMgPSByb247XG59O1xuXG5cbi8vIEdldCBmYW1vdXNRdW90ZXNcbiRzY29wZS5mYW1vdXNRdW90ZXM9W107XG5cbiB2YXIgZmFtb3VzUXVvdGVzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICBxdW90ZVNlcnZpY2UuZ2V0UXVvdGUoKVxuXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihxdW90ZSl7XG4gICAgICAgICAgICAgICAgdmFyIGxldHRlcnMgPSB7XG4gICAgICAgICAgICAgICAgICBRdW90ZTogcXVvdGUucXVvdGUsXG4gICAgICAgICAgICAgICAgICBBdXRob3I6ICBxdW90ZS5hdXRob3IsXG4gICAgICAgICAgICAgICAgICBOdW06IGdldEJhY2tncm91bmRzKDEsOSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICRzY29wZS5mYW1vdXNRdW90ZXMucHVzaChsZXR0ZXJzKTtcblxuXG4gICAgICAgICAgICB9KTtcbn07XG5cbnZhciBvbmVRdW90ZT1mYW1vdXNRdW90ZXMoKTtcbnZhciB0d29RdW90ZSA9IGZhbW91c1F1b3RlcygpO1xudmFyIHRocmVlUXVvdGUgPSBmYW1vdXNRdW90ZXMoKTtcbnZhciBmb3VyUXVvdGUgPSBmYW1vdXNRdW90ZXMoKTtcbnZhciBmaXZlUXVvdGUgPSBmYW1vdXNRdW90ZXMoKTtcbnZhciBzaXhRdW90ZSA9IGZhbW91c1F1b3RlcygpO1xudmFyIHNldmVuUXVvdGUgPWZhbW91c1F1b3RlcygpO1xudmFyIGVpZ3RoUXVvdGUgPWZhbW91c1F1b3RlcygpO1xudmFyIG5pbmVRdW90ZSA9ZmFtb3VzUXVvdGVzKCk7XG52YXIgdGVuUXVvdGU9ZmFtb3VzUXVvdGVzKCk7XG5cbiRzY29wZS5nZXRNb3ZpZVF1b3RlcyA9IGZ1bmN0aW9uKGdldFF1b3Rlcyl7XG4gICRzY29wZS5xdW90ZXMgPSBnZXRRdW90ZXM7XG59O1xuXG5cblxuXG5cbiAkc2NvcGUuZ2V0UHJvZ3JhbVF1b3RlcyA9IGZ1bmN0aW9uKCkge1xucXVvdGVTZXJ2aWNlLmdldFByb2dyYW1tZXJRdW90ZSgpXG4gICAgLnRoZW4oZnVuY3Rpb24ocXVvdGUpIHtcbiAgICAgIHZhciBwcm9ncmFtQXJyID0gW107XG4gICAgICBmb3IodmFyIGkgPSAwO2k8cXVvdGUubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgcHJvZ3JhbU9iaiA9IHtcbiAgICAgICAgICBRdW90ZTogcXVvdGVbaV0ucXVvdGUsXG4gICAgICAgICAgQXV0aG9yOiBxdW90ZVtpXS5hdXRob3IsXG4gICAgICAgICAgTnVtOiBnZXRCYWNrZ3JvdW5kcygxLDkpXG4gICAgICAgIH07XG4gICAgICAgIHByb2dyYW1BcnIucHVzaChwcm9ncmFtT2JqKTtcbiAgICAgIH1cbiAgICAgICAgJHNjb3BlLnF1b3RlcyA9IHByb2dyYW1BcnI7XG5cbiAgICB9KTtcbn07XG5cblxuJHNjb3BlLmJhY2tOdW0gPSBnZXRCYWNrZ3JvdW5kcygxLDkpO1xuXG5cblxuXG5cbn0vLyBlbmQgb2YgcXVvdGUgY29udHJvbGxlclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
