console.log('hey');

var tictactoeGame = function() {} // holds all of the game's objects

var turn = 1;  // game starts with player one's move. player one is odd; player two is even.
var winner; // this holds the text value of the winner (X or O) as an output of the detectGameWon function
var gameWon = false; // this stops or continues the game depending on whether a player has won

tictactoeGame.moveHandler = function () {   // this registers which player is active, adds their piece to the board, then switches the active player
  var scope = this;
  $('td').on('click', function(e) {
    e.preventDefault();
      if (gameWon == false) {
        var square = $(e.target);
        scope.renderMove(square);
        turn++;
        scope.checkGameStatus();
        scope.switchPlayer();
      }
  });
}

tictactoeGame.renderMove = function (square) {   // this adds an X or an O to the board depending on whose move it is
  if ( (square.text() == '') && (gameWon == false) ) {
    if ( (turn%2 !== 0) ) {
      square.append('X').addClass('marked x');
    } else {
      square.append('O').addClass('marked o');
    }
  } else if ( (square.text() !== '') && (gameWon == false) ) {
    alert("Oops! That square is taken.");
    turn--;
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
    alert('Player one wins the game!');
    return;
  } else if (winner == 'O') {
    alert('Player two wins the game!');
    return;
  }
};

tictactoeGame.switchPlayer = function () {  // this highlights the active player on the page
  if (gameWon == true) {
    return;
  } else {
    $('.one').toggleClass('active');
    $('.two').toggleClass('active');
  }
};

// During game play:
tictactoeGame.detectGameWon = function () { // check for 3 matching text values ('x' or 'o') horizontally, vertically & diagonally and return the text value if there is a match
  var square1 = $('#1').text();
  var square2 = $('#2').text();
  var square3 = $('#3').text();
  var square4 = $('#4').text();
  var square5 = $('#5').text();
  var square6 = $('#6').text();
  var square7 = $('#7').text();
  var square8 = $('#8').text();
  var square9 = $('#9').text();

  // check rows
  if ( (square1 !== '') && (square1==square2) && (square2==square3) ) { winner = square1; gameWon = true; }
  else if ( (square4 !== '') && (square4==square5) && (square5==square6) ) { winner = square4; gameWon = true; }
  else if ( (square7 !== '') && (square7==square8) && (square8==square9) ) { winner = square7; gameWon = true; }

  // check columns
  else if ( (square1 !== '') && (square1==square4) && (square4==square7) ) { winner = square1; gameWon = true; }
  else if ( (square2 !== '') && (square2==square5) && (square5==square8) ) { winner = square2; gameWon = true; }
  else if ( (square3 !== '') && (square3==square6) && (square6==square9) ) { winner = square3; gameWon = true; }

  // check diagonals
  else if ( (square1 !== '') && (square1==square5) && (square5==square9) ) { winner = square1; gameWon = true; }
  else if ( (square3 !== '') && (square3==square5) && (square5==square7) ) { winner = square3; gameWon = true; }

  // check tie
  else if ( ($('.square.marked').length == 9) && gameWon == false ) { alert("It's a tie!"); winner = ''; gameWon = true}

  // else, no winner, game continues
  else { winner = ''; gameWon = false; };
};


// Clear board and start new game when button is clicked
tictactoeGame.clearBoard = function () {
  var scope = this;
  $('#refresh').on('click', function() {
    $('td').empty().removeClass('marked x o');
    turn = 1;
    gameWon = false;
    scope.switchPlayer();
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
