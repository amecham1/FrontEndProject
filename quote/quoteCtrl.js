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
