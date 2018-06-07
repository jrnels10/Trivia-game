#Trivia Game
For this version of the trivia game, the previous homewokr assignment was intergrated into this trivia game. The objective was to have the user select which character they wanted to play as and then select an enemy to battle against. Once the characters were selected, the user could then select to start the game. If the user guessed the correct answer for the trivia question, the enemies display would show a red shade indicating the enemy player has been damaged. Three correct answers and the enemy would be dead and the player would win. Three wrong answers however, and the player would lose and the enemy player would win. If the timer ran out, it would not be counted against either the player or the enemy. 

#Start game click function
When the user clicks the start button, the newGame function, timedquestion function run as well as hiding multiple divs from the DOM.

#newGame Function
Clears all stored values from arrays and numerical variables. It clears the results from the game and resets the players health back to zero. 

#run function
clears the decrement pace and then sets the variable 'intervalid' to a decrement of one second

#stop function
stops the decrement of variable 'intervalid'

#reset function
sets the variable 'seconds' to a value of 15

#random question function
takes the array of questions 'gameQuestion' and randomizes the array and assigns one object to variable 'randomItem'.
It then removes that object from the array so that the question would not be selected again when the next question is generated. 
Once 'randomItem' has been generated, the components of the object are broken down into the 'currentQuestion', 'currentAnswrOpt' and the 'currentCorrect'.
After this step a dynamic div is created where the 'currentQuestion', 'currentAnswrOpt' and the 'currentCorrect' are broken down and displayed on the DOM. Then they are appended to the webpage. 

#timedQuestion
This is where the user interaction takes place. This function checks to see if the number of correct answers is 3 or if the number of the wrong answer is 3. If neither is true, it empties the dynamic div, .question, and the randomQuestion function, decrement function and run function are called. If the user clicks the correct answer the correctAction function is called. If the user guesses the wrong answer, the wrongAction is called. 

#decrement function
This function displays the countdown on the DOM as well as checks to see if the user has answered or ran out of time. if all of the time runs out, the clearInterval function, timedQuestion function, reset function and run function are called. 

#finish function
This function hides the '.question' div and creates a dynamic div to display the score that was recorded. It also creates a button to play the game again.

#wrongAction function
calls the stop function to stop the timer. It adds one to the 'wrong' variable. It also changes the characters css, hides the answers section, displays the correct answer and a gif. It calls the timer function which is set for five seconds. 

#correctAction function
Much like the wrongAction function, this function does the exact same thing except if the user guesses the correct answer. 

#timer function
Creates a timer value where when called throughout the script, it can be assigned a specific value and the timer function will run for that requested value. 