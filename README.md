# pirateplankgame

Created with HTML, CSS, and Javascript. Pirate’s Plank is a 2 player game based off of Hangman. Each player takes a turn guessing the letters of a randomly generated word. The words are pirate-themed, so think creatively for the right answer! The premise of the game is that the players have boarded onto a pirate ship where a prisoner is forced to walk the plank, in immediate danger of losing his life. For each incorrectly guessed letter of a word, the prisoner takes one step forward off the plank. 

Winning State: The first player to gain 15 points wins the game and saves the prisoner’s life. 

Losing State: A maximum of 5 wrong guesses is allowed before the prisoner jumps off the plank into the sea and the game is over.

Live link to the game: https://lanak10.github.io/pirate-game/

Youtube tutorials provided the groundwork for the Javascript and I was most excited about the pirate concept I came up with, and wanted to play up this theme as much as possible. 

Features:
Player 1 starts first. To even the playing field, the “Reset” button resets the word with blank underscores after one player takes their turn, so that the opposing player can take a turn guessing the same word. The “New Word” button randomly generates a new word. The “New Game” button should be clicked on when a player wins the game (15 points) to reset the scoreboard back to 0. 

Challenges: I had initially just made the game for a single player but implementing Player 2 caused trouble trying to figure out how to alternate turns. I also had to think about when I wanted to reset their scores, and reset their wrong talleys. Getting the prisoner image to move one step off the plank for each wrong guess using JS was hard to figure out! I finally found out how to manipuate an object using .style and left or right so it moves laterally. I learned how to re-use and manipulate my code using string interpolation, and even learned that I can incorporate math concepts in coding! (Order of operations matter, basic algebra)

Unresolved problems: 
1.	Browser responsiveness: The background image for my image.html and game.html have a different resolution depending on the size of the browser (which changes at the user's discretion). I would've liked the background image to fit full screen regardless of the size of the browser. The prisoner and pirate ship plank should also remain fixed in position relative to each other even if the browser window grows larger or smaller.
2.	CSS: Minor adjustments to the spacing between headers and p tags on opening index.html page, increasing the size of the alphabet keyboard buttons, etc.
3.	Additional touches: A feature to input a name for each player to make the game more personable. Include audio to make it more fun!
4. I would also like to incorporate longer phrases in my pirate terms that are more than one word such as "Shiver-me-timbers", "aye-aye", "land ho" but wasn't sure how to display it so that a space or dash automatically generates to help the user. When I had more than one word, the spaces in between would show up as underscores on the screen. 
