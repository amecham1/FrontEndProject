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
