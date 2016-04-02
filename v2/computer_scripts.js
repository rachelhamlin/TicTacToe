console.log('hey');

var tictactoeGame = function() {} // holds all of the game's objects

var winner; // hold the text value of the winner (X or O) as an output of the detectGameWon function
var gameWon = false; // stop or continue the game's onclick functions depending on whether a player has won
var playerOneTurn = true; // because there is one player & one computer player, begin with playerOneTurn = true and alternate

tictactoeGame.moveHandler = function (square) {
  var scope = this;
  $('td').on('click', function(e) {
    e.preventDefault();
    var square = $(e.target);     // each time a square is clicked...
    if ( (square.text() !== '') && (gameWon == false) ) {   // if it's taken, alert the user
      alert("Oops! That square is taken.");
    } else if ( (square.text() == '') && (gameWon == false) ) {  // if it's available
      scope.renderMove(square);                                 // render the user's move
      setTimeout(scope.randomizeMove, 800);                     // then give the computer a move
    }
  });
}

tictactoeGame.randomizeMove = function () {   //  generates a move for the computer after the player makes a move
  var emptySquares = $('.square').not('.marked').length;   // generate a random number no higher than the number of empty squares
  var randomNum = Math.floor(Math.random () * emptySquares);
  var randomSquare = $('.square').not('.marked').eq(randomNum);  // get the empty square matching the random number
  if ( (gameWon == false) && (playerOneTurn == false) ) {
    randomSquare.text('O').addClass('marked o');                // render the computer move on the board
    playerOneTurn = true;                                       // switch back to Player One's turn
    tictactoeGame.checkGameStatus();                          // check the status of the game
    tictactoeGame.switchPlayer();                             // switch the highlighted player in the HTML/CSS
  }
};

tictactoeGame.renderMove = function (square) {   // adds an X or an O to the board depending on whose move it is
  if (playerOneTurn == true) {
    square.append('X').addClass('marked x');   // render the move on the board
    playerOneTurn = false;
    this.checkGameStatus();                  // check the status of the game
    this.switchPlayer();                     // switch the highlighted player in the HTML/CSS
  }
};

tictactoeGame.checkGameStatus = function (turn) {  // checks if the game has been won
  this.detectGameWon();
    if (gameWon == true && ((winner == 'X') || (winner == 'O')) ) {
      this.detectWinner(winner);
    }
};

tictactoeGame.detectWinner = function (winner) { // detects which player won
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
  var square1 = $('#sq0').text();
  var square2 = $('#sq1').text();
  var square3 = $('#sq2').text();
  var square4 = $('#sq3').text();
  var square5 = $('#sq4').text();
  var square6 = $('#sq5').text();
  var square7 = $('#sq6').text();
  var square8 = $('#sq7').text();
  var square9 = $('#sq8').text();

  // rows
  if ( (square1 !== '') && (square1==square2) && (square2==square3) ) { winner = square1; gameWon = true; }
  else if ( (square4 !== '') && (square4==square5) && (square5==square6) ) { winner = square4; gameWon = true; }
  else if ( (square7 !== '') && (square7==square8) && (square8==square9) ) { winner = square7; gameWon = true; }

  // columns
  else if ( (square1 !== '') && (square1==square4) && (square4==square7) ) { winner = square1; gameWon = true; }
  else if ( (square2 !== '') && (square2==square5) && (square5==square8) ) { winner = square2; gameWon = true; }
  else if ( (square3 !== '') && (square3==square6) && (square6==square9) ) { winner = square3; gameWon = true; }

  // diagonals
  else if ( (square1 !== '') && (square1==square5) && (square5==square9) ) { winner = square1; gameWon = true; }
  else if ( (square3 !== '') && (square3==square5) && (square5==square7) ) { winner = square3; gameWon = true; }

  // tie
  else if ( ($('.square.marked').length == 9) && gameWon == false ) { alert("It's a tie!"); winner = ''; gameWon = true}

  // else, continue playing
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
