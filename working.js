'use strict'

var app = angular.module('myApp', [])


.controller('puzzleCtrl', function($scope) {
    
    $scope.words = ['hello', 'northeastern', 'javascript', 'hackathon', 'bugs'];
    var puzzle = wordfind.newPuzzle($scope.words);
    $scope.puzzle = puzzle;
    wordfind.print(puzzle);
    console.log(puzzle);

    function RandWordList(){    
        var count = 5; // number of rows to be found
        var maxLength = 7; // word length
        var WordArray=[]; // stores list of words


        function RandomWord(data) {
            var requestStr = "http://randomword.setgetgo.com/get.php";
                function RandomWordComplete(data) {
                    if (data.length<maxLength){
                    WordArray.push(data);
                    count--;
                    }
                    
                    if (count>0){
                        RandomWord();
                    } else {
                        console.log(WordArray);  
                    }
                }
            $.get(
                requestStr
            ).done(RandomWordComplete);
        }
            RandomWord();
    }
    
    RandWordList();

    });


