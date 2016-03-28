
var tictactoeGame = {};

// Render the board as 9 divs inside a container div on the page.

// Define active player; render an active player display


// Switch players when a player makes a move

tictactoeGame.switchPlayer = function () {
  this.$activePlayer;

}

// On click:
  // register which player clicked.
  // register which div was clicked (e.target.attr('id'))
  // render move (x or o depending on player)
tictactoeGame.playerClickHandler = function () {
  var $markedX = $('<div>X</div>').addClass('marked x');
  var $markedO = $('<div>O</div>').addClass('marked o');
  $('td').on('click', function (e) {
    var $square = $(e.target);
    console.log(e.target.id);
    if ($activePlayer = 'player 1') {
      $square.append($markedX);
    } else if ($activePlayer = 'player 2') {
      $square.append('<div>O</div>').addClass('two');
    }
  });
};


// Detect winner


// Alert when there is a winner


// Button to clear board for a new game


// Initiate game with all its components
tictactoeGame.init = function () {
  var $player1 = true;
}


// Defining
// ********
// Using

$(function() {

var $gameBoard = $('#container');
var $playerDisplay = $('.player');
tictactoeGame.playerClickHandler();
tictactoeGame.init();

});
