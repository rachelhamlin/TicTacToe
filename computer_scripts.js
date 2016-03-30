console.log('hey');

var tictactoeGame = function() {} // holds all of the game's objects

var winner; // this is used to hold the text value of the winner (X or O) as an output of the detectWinner function
var gameWon = false; // this variable is used to stop or continue the game's onclick functions depending on whether a player has won
var playerOneTurn = true;

tictactoeGame.moveHandler = function (square) {   // this registers which player is active, appends their piece to the board, then switches the active player
  var scope = this;
  $('td').on('click', function(e) {
    e.preventDefault();
    var square = $(e.target);
    if ( (square.text() !== '') && (gameWon == false) ) {
      alert("Oops! That square is taken.");
    } else if ( (square.text() == '') && (gameWon == false) ) {
      scope.renderMove(square);
      setTimeout(scope.randomizeMove, 800);
      scope.checkGameStatus();
    }
  });
}

tictactoeGame.randomizeMove = function () {   // this generates a move for the computer after the player makes a move
  var emptySquares = $('.square').not('.marked').length;
  var randomNum = Math.floor(Math.random () * emptySquares);
  var randomSquare = $('.square').not('.marked').eq(randomNum);
  if ( (gameWon == false) && (playerOneTurn == false) ) {
    randomSquare.text('O').addClass('marked o');
    playerOneTurn = true;
    tictactoeGame.checkGameStatus();
    tictactoeGame.switchPlayer();
  }
};

tictactoeGame.renderMove = function (square) {   // this adds an X or an O to the board depending on whose move it is
  if (playerOneTurn == true) {
    square.append('X').addClass('marked x');
    playerOneTurn = false;
    this.switchPlayer();
  }
};

tictactoeGame.checkGameStatus = function (turn) {  // this is supposed to check if the game has been won and detectWinner if true
  this.detectGameWon();
    if (gameWon == true && ((winner == 'X') || (winner == 'O')) ) {
      this.detectWinner(winner);
    }
};

tictactoeGame.detectWinner = function (winner) { // this is supposed to detect which player won and alert them
  if (winner == 'X') {
    alert("You WON!! You're amazing!");
    return;
  } else if (winner == 'O') {
    alert("The computer won. You can do better.");
    return;
  }
};

tictactoeGame.switchPlayer = function () {  // this highlights the active player on the page (for the user to keep track)
  if (gameWon == true) {
    return;
  } else {
    $('.one').toggleClass('active');
    $('.two').toggleClass('active');
  }
};

// During game play:

tictactoeGame.detectGameWon = function () { // this will check for 3 matching text values ('x' or 'o') horizontally, vertically & diagonally and return the text value if there is a match

// create one function that looks through an array of 3 indices to check if they're all the same
// if they're the same, it returns true
// then make another array of all the possible win combos (all 8 combos)
// then make a loop function that loops through that array and on each array, run the true/false function


  var square1 = $('#sq0').text();
  var square2 = $('#sq1').text();
  var square3 = $('#sq2').text();
  var square4 = $('#sq3').text();
  var square5 = $('#sq4').text();
  var square6 = $('#sq5').text();
  var square7 = $('#sq6').text();
  var square8 = $('#sq7').text();
  var square9 = $('#sq8').text();

  if ( (square1 !== '') && (square1==square2) && (square2==square3) ) { winner = square1; gameWon = true; }
  else if ( (square4 !== '') && (square4==square5) && (square5==square6) ) { winner = square4; gameWon = true; }
  else if ( (square7 !== '') && (square7==square8) && (square8==square9) ) { winner = square7; gameWon = true; }

  else if ( (square1 !== '') && (square1==square4) && (square4==square7) ) { winner = square1; gameWon = true; }
  else if ( (square2 !== '') && (square2==square5) && (square5==square8) ) { winner = square2; gameWon = true; }
  else if ( (square3 !== '') && (square3==square6) && (square6==square9) ) { winner = square3; gameWon = true; }

  else if ( (square1 !== '') && (square1==square5) && (square5==square9) ) { winner = square1; gameWon = true; }
  else if ( (square3 !== '') && (square3==square5) && (square5==square7) ) { winner = square3; gameWon = true; }

  else if ( ($('.square.marked').length == 9) && gameWon == false ) { alert("It's a tie!"); winner = ''; gameWon = true}

  else { winner = ''; gameWon = false; };
};

// Clear board and start new game
tictactoeGame.clearBoard = function () {
  var scope = this;
  $('#refresh').on('click', function() {
    $('td').empty().removeClass('marked x o');
    gameWon = false;
    if (playerOneTurn == false) {
      playerOneTurn = true;
      scope.switchPlayer();
    }
  })
};

// Initalize game

tictactoeGame.init =function () {
  this.moveHandler();
  this.clearBoard();
}

// ************


$(function() {

tictactoeGame.init();

});
