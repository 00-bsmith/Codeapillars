# The Codeapillars
Dev10 Capstone project with Bryan Smith, Sheryl Lange, and Sam Bachwich

## Trivia Game Project Summary
The goal of this project is to create a single- and multi-player trivia game for people to enjoy on the web.
### Features and Mechanics: 
- Regardless of game mode, the game would use the Open Trivia Database API to generate questions for each round of each game. The API includes the ability to choose the category, difficulty (easy/medium/hard), and type (True-False/Multiple-Choice) of question.
- Each game would consist of a set number of rounds in which one or more players are presented with a question and given a set amount of time to answer it.
- A timer would show how much time players have left, and players would be scored based upon how quickly they answered the question (no answer being zero points).
- Each player’s score will be displayed at the top of the screen during each round for convenience.
- After the set number of rounds concludes, a results screen is displayed showing each player’s score and including a link to a leaderboard page.
- The site would include a login feature in order to play, and would include the option to delete players from the leaderboard as an admin feature.
### Estimated Spec:
- 4 Database Tables (3 for roles/users, one for leaderboard, possibly fifth for multiplayer leaderboard)
- 4-5 screens (Welcome screen, game screen, results screen, leaderboard screen)
### MVP:
- Single-player functionality (either solo or against simple AI player)
- Multi-player functionality (using WebSocket for “rooms”)
### New Technology:
- WebSockets
- External API calls (Open Trivia Database)

## Game Design
### Game Start
- Players click a button to start a new game, which brings them to a landing page which waits a set amount of time until beginning
- A timer counts down before the first question
### Game Round Design
- A question is displayed on the screen for a set amount of time with the players unable to answer the question (makes it a fair playing field for people who take their time to read the question thoroughly). 
- After the set amount of time has elapsed, players are able to answer the question until the timer at the top of the screen ends. (Wait to display buttons until after the first timer ends? Display buttons before first timer ends, but don't give them functionality? Display buttons immediately, but don't display a submit button until the first timer ends?)
- Award points based on how quickly player answers (perhaps start at 1000 and reduce by flat rate per second? Kahoot uses the equation [1-(r/q/2)]p, where r is the time after the question starts, q is the total time given for the question, and p is the number of points you earned for answering the question correctly)
- After timer for question ends, show player's score for that round, and perhaps player's total score as well
- Player's total score should be displayed at the top of the screen for entirety of round 

