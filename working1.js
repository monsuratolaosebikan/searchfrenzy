//var temp;
function RandWordList(callback){    
        var count = 5; // number of rows to be found
        var maxLength = 20; // word length
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
                        callback(WordArray);
                        //temp=WordArray;
                    }
                    
                }
            
            $.get(
                requestStr
            ).done(RandomWordComplete);
        }
            RandomWord();
    }
    
var app;

'use strict'


    app = angular.module('myApp', [])
    .controller('puzzleCtrl', function($scope) {
        RandWordList(function(WordArray){
            $scope.words = WordArray;
            //$scope.words = ["WordArray","cow","test"];
            console.log($scope.words);
            var puzzle = wordfind.newPuzzle($scope.words);
            $scope.puzzle = puzzle;
            wordfind.print(puzzle);
            $scope.$apply();
    });
   
    
    //console.log(temp);


   });


