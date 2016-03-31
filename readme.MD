# Tic Tac Toe

A simple tic tac toe game built with jQuery. There are two versions: two-player, and player vs. computer.

## Two-Player Version

In this version of the game, users can play against themselves or a friend by alternating clicks on the board.
The game indicates which player's turn it is by highlighting the appropriate Player on the page. The game alerts the players when it is won or tied.

_**During game play**_
![Image of game] (https://github.com/rachelhamlin/TicTacToe/blob/master/images/2playerversion.png)

_**When game is won**_
![Image of game] (https://github.com/rachelhamlin/TicTacToe/blob/master/images/2playerwinner.png)

#### Functionality
* Determines which player is active
* Renders move for that player on-click
* Renders active player display on every move for user to see
* Detects wins horizontally, vertically and diagonally
* Detects ties
* Alerts user of game outcome
* Alerts user not to click a taken square
* Clears board for new game on button click
* Offers toggle to player vs. computer version


## Player vs. Computer Version

In this version of the game, the user can play against the computer. The computer is not very smart for a computer, and
makes a totally random move every time, which is kind of funny.

_**During game play**_
![Image of game] (https://github.com/rachelhamlin/TicTacToe/blob/master/images/computer_version.png)

#### Functionality
* Determines whether the player or the computer is active
* Renders player move on-click
* Generates random computer move afterward
* Renders active player display on every move for user to see
* Detects wins horizontally, vertically and diagonally
* Detects ties
* Alerts user of game outcome
* Alerts user not to click a taken square
* Clears board for new game on button click
* Offers toggle to 2-player version

--------

### File Guide
**2-player version:**
* index.html
* scripts_refactored.js
* styles.css

**Computer version:**
* computer.html
* computer_scripts.js
* computer_styles.css

**Refactor draft:**
* scripts_refactored2.js
