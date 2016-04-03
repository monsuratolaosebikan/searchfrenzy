'use strict'

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

var app = angular.module('myApp', ['firebase'])
    .controller('puzzleCtrl', function($scope) {
        var gameStarted = "false";
        var ref = new Firebase("http://wordfrenzy.firebaseio.com");
        var wordref = ref.child('wordList');
        var found =[];
        
        ref.once('value', function(snapshot){
            gameStarted = snapshot.hasChild('game');
            if(gameStarted) {
                var cwords = snapshot.val().wordList;
                var game = snapshot.val().game;
                wordfindgame.join(cwords,'#puzzle','#words', game);
                ref.child('found').on("child_added", function(snapshot, prevChildKey) {
                    found[0] = snapshot.val();
                    console.log(found);
                    wordfindgame.solve(game, found);
                });
            }
            else {
                RandWordList(function(WordArray){
                    $scope.words = WordArray;
                    var gamePuzzle = wordfindgame.create($scope.words, '#puzzle', '#words');
                    ref.child('found').on("child_added", function(snapshot, prevChildKey) {
                        found[0] = snapshot.val();
                        console.log(found);
                        wordfindgame.solve(gamePuzzle, found);
                    });
                });
            }
        })     
});