angular.module('noServerApp')
.controller('quoteCtrl',quoteCtrl);



function quoteCtrl($scope,quoteService){

  $scope.ronQuotes=[];

var getRonQuotes = quoteService.getSwanson()
  .then(function(swanson){

    for(var i=0;i<swanson.length;i++){
      var ronald = {
        Quote: swanson[i],
        Author: "Ron Swanson"
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
                  Author:  quote.author
                };
                $scope.famousQuotes.push(letters);
                // console.log($scope.famousQuotes);


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
  // console.log(getQuotes[0]['Quote']);
  $scope.quotes = getQuotes;
};
// console.log($scope.famousQuotes);
 // console.log($scope.famousQuotes.Author);

// var quoteArr =[];




//  $scope.getProgramQuotes = function(){
//   //  console.log('fired!');
//           quoteService.getProgrammerQuote()
//             .then(function(quote){
//              quoteArr = quote;
//            });
//         // console.log(quote);
// };
// console.log(quoteArr);
// $scope.getProgrammingQuotes = function(programmingQuotes){
//   console.log('fired!');
//   quoteService.getProgrammerQuotes()
//   .then(function(quote){
//     $scope.quotes = quotes;
//   });
// };



}// end of quote controller
