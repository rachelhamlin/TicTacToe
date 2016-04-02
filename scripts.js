console.log('hey');

var tictactoeGame = function() {} // holds all of the game's objects

var turn = 1;  // odd numbers represent player 1; even represent player 2
var winner = null; // holds text value ('X' or 'O') as an output of the detectGameWon function
var gameWon = false; // stops or continues the game depending on whether a player has won

tictactoeGame.moveHandler = function () {   // registers active player, renders move, switches player
  var scope = this;
  $('td').on('click', function(e) {  // on every click...
    e.preventDefault();
      if (gameWon == false) {  // if the game has not ended
        var square = $(e.target);
        scope.renderMove(square); // render a move on the square that's been clicked
        turn++;                 // add 1 to the turn counter
        scope.checkGameStatus(); // check to see if there is a winner
        scope.switchPlayer(); // switch the active player display in the HTML/CSS
      }
  });
}

tictactoeGame.renderMove = function (square) {   // renders an X or an O on the board depending on active player
  if ( (square.text() == '') && (gameWon == false) ) {  // if the chosen square is empty and the game is still on...
    if ( (turn%2 !== 0) ) {                         // and the active player is odd (player 1)
      square.append('X').addClass('marked x');    // add an X to the board
    } else {                                      // if the active player is even (player 2)
      square.append('O').addClass('marked o');  // add an O to the board
    }
  } else if ( (square.text() !== '') && (gameWon == false) ) { // if the chosen square is full and the game is still on
    alert("Oops! That square is taken.");             // let the player know to choose a new one
    turn--;                                           // subtract the turn that was just added (same player is active)
  }
};

tictactoeGame.checkGameStatus = function (turn) {  // this checks to see if the game has been won
  this.detectGameWon();                           // see line 62
    if (gameWon == true && ((winner == 'X') || (winner == 'O')) ) {  // if the game has been won
      this.detectWinner(winner);                                     // get the winner
    }
};

tictactoeGame.detectWinner = function (winner) { // this detects the winning player and alerts them
  if (winner == 'X') {                          // if var winner = 'X'
    alert('Player one wins the game!');         // alert player one
    return;
  } else if (winner == 'O') {                 // if var winner = 'O'
    alert('Player two wins the game!');       // alert player two
    return;
  }
};

tictactoeGame.switchPlayer = function () {  // this highlights the active player on the page
  if (gameWon == true) {                    // if the game is over, don't do this
    return;
  } else {
    $('.one').toggleClass('active');      // turn "Player 1"'s highlighter on or off
    $('.two').toggleClass('active');      // turn "Player 2"'s highlighter on or off
  }
};

tictactoeGame.detectGameWon = function () { // check for 3 matching text values ('x' or 'o') horizontally, vertically & diagonally and return the text value if there is a match
  var square1 = $('#1').text();            // assign a variable to each square on the board
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
    $('td').empty().removeClass('marked x o');    // empty all the cells
    turn = 1;                                     // reset initial game status
    gameWon = false;
    if ($('.two').hasClass('active')) {           // if the game ended with Player 2 highlighted, switch it back
      scope.switchPlayer();
    }
  });
}

// Initalize game
tictactoeGame.init = function () {
  this.moveHandler();
  this.clearBoard();
}

// ************


$(function() {
tictactoeGame.init();
});
