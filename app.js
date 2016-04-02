'use strict'
var app = angular.module('myApp', [])

.controller('puzzleCtrl', function($scope) {
    $scope.currentWord = "";
    var pRow;
    var pCol;
    var direction="";
    $scope.words = ['hello', 'northeastern', 'javascript', 'hackathon', 'bugs'];
    var jq = $.noConflict();
    var puzzle = wordfind.newPuzzle($scope.words);
    $scope.puzzle = puzzle;
    wordfind.print(puzzle);
    console.log(puzzle);
    
    $scope.add = function(row,col,letter) {
        if($scope.currentWord.length==""){
          $scope.currentWord+=letter;
            pRow = row;
            pCol = col;
        }else if($scope.currentWord.length==1) {
            if(row == pRow-1 && col == pCol) {
                console.log(true);
                $scope.currentWord+=letter;
                pRow = row;
                pCol = col;
                direction= "up";
                console.log(direction);
            }
            else if(row == pRow+1  && col == pCol) {
                console.log(true);
                $scope.currentWord+=letter;
                pRow = row;
                pCol = col;
                direction= 'down';
            }
            else if(col == pCol-1 && row == pRow) {
                console.log(true);
                $scope.currentWord+=letter;
                pRow = row;
                pCol = col;
                direction= 'left';
            }
            else if(col == pCol+1 && row == pRow) {
                console.log(true);
                $scope.currentWord+=letter;
                pRow = row;
                pCol = col;
                direction= 'right';
            }
            else {
                console.log(false);
            }
        }
        else {
            console.log(direction);
            switch (direction){
              case 'up':
                if (row == pRow-1 && col == pCol){
                  console.log(true);
                  $scope.currentWord+=letter;
                  pRow = row;
                  pCol = col; 
                    console.log(direction);
                } break;
              case 'down': 
                if(row == pRow+1  && col == pCol) {
                console.log(true);
                $scope.currentWord+=letter;
                pRow = row;
                pCol = col;
                } break;
              case 'right':
                if(col == pCol-1 && row == pRow) {
                console.log(true);
                $scope.currentWord+=letter;
                pRow = row;
                pCol = col;
                direction= 'left';
                } break;
              case 'left':
                if(col == pCol+1 && row == pRow) {
                console.log(true);
                $scope.currentWord+=letter;
                pRow = row;
                pCol = col;
                direction= 'right';
                } break;    
            }
        }
        console.log($scope.currentWord);
    }
});


