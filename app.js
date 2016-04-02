'use strict'
var app = angular.module('myApp', [])

.controller('puzzleCtrl', function($scope) {
    $scope.words = ['hello', 'northeastern', 'javascript', 'hackathon', 'bugs'];
    var puzzle = wordfind.newPuzzle($scope.words);
    $scope.puzzle = puzzle;
    wordfind.print(puzzle);
    console.log(puzzle);
});


