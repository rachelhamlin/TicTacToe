console.log('hey');


// This is a WIP to refactor the two-player version of the game using an array for the game board.
// Lines 29 and 33 were giving me trouble.

// **** DRAFT *****

var tictactoeGame = function() {} // holds all of the game's objects

var turn = 1;  // game starts with player one's move. player one is odd; player two is even.
var winner = null; // this holds the text value of the winner (X or O) as an output of the detectGameWon function
var gameOver = false; // this stops or continues the game depending on whether a player has won

var board = [null, null, null, null, null, null, null, null, null];

tictactoeGame.moveHandler = function () {
  var scope = this;
  $('.square').on('click', function(e) {
    e.preventDefault();
    var square = $(e.target);
    var squareNum = square.data('num');  // in the html for this refactor, each table cell (square) has a "data-num" from 0-8
    if (gameOver == false) {
      if (square.text() !== '') {
        alert("Oops! That square is taken.");
        turn--;
      } else if (turn%2 !== 0) { // player 1 is active
        square.text('X').addClass('marked x');
        board[squareNum] = 1;
        turn++;
      } else if (turn%2 == 0) { // player 2 is active
        square.text('O').addClass('marked o');
        board[squareNum] = 2;
        turn++
      }
        scope.checkWins();
        scope.switchPlayer();
      }
  });
};

tictactoeGame.checkWins = function () {
  console.log('hello board 0 ' + board[0]);
  console.log('hello board 1 ' + board[1]);
  console.log('hello board 2 ' + board[2]);
  if (board[0] !== null && (board[0] == board[1] == board[2])) {winner = board[0];}
  else if (board[3] !== null && (board[3] == board[4] == board[5])) {winner = board[0];}
  else if (board[6] !== null && (board[6] == board[7] == board[8])) {winner = board[6];}
  else if (board[0] !== null && (board[0] == board[3] == board[6])) {winner = board[0];}
  else if (board[1] !== null && (board[1] == board[4] == board[7])) {winner = board[1];}
  else if (board[2] !== null && (board[2] == board[5] == board[8])) {winner = board[2];}
  else if (board[0] !== null && (board[0] == board[4] == board[8])) {winner = board[0];}
  else if (board[2] !== null && (board[2] == board[4] == board[6])) {winner = board[2]; console.log(winner)}
  else if (($('square.marked').length == 9) && (gameOver == false)) {
      alert("It's a tie!");
      gameOver = true;
    }
    this.getWinner();
};

tictactoeGame.getWinner = function () {
  if (winner !== null) {
    if (winner == 1) {
      alert("Player one wins the game!");
      gameOver = true;
    } else if (winner == 2) {
      alert("Player two wins the game!");
      gameOver = true;
    }
  }
};
