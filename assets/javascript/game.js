
//  Click events are done for us:
//     $("#lap").click(stopwatch.recordLap);
//     $("#stop").click(stopwatch.stop);
//     $("#reset").click(stopwatch.reset);
//     $("#start").click(stopwatch.start);
//   };

//Create objects for each of the questions includes all the possible answers and the correct answer

var firstQuest = {
    question: 'Blonide and Tuco decided to blow up what?',
    possible: ['bridge', 'car', 'bank', 'train'],
    correct: 'bridge',
}
var secondQuest = {
    question: "Clint Eastwood didn't like the doing what in the movie?",
    possible: ['riding horses', 'being in the sun', 'shooting guns', 'smoking cigars'],
    correct: 'smoking cigars',
}
var thirdQuest = {
    question: "Why couldn't Sergio Leone (Tuco), speak to Clint directly?",
    possible: ["He lost his voice during filming", "Clint hated him", "He couldn't speak english", "He didn't like gringos"],
    correct: "He couldn't speak english",
}
var fourthQuest = {
    question: 'What celebrity was not a fan of Eastwood?',
    possible: ['John Wayne', 'Elvis Presley', 'Morgan Freeman', 'Steve McQueen'],
    correct: 'John Wayne',
}
var questionArray = [firstQuest, secondQuest, thirdQuest, fourthQuest];
var currentQuestion = [];
var time;
var seconds = 5;
var intervalId;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var delayWin;
console.log(questionArray)


window.onload = function () {
    startGame();
    // Create a function for a new game
    function newGame() {
        $('#correctAnswers').empty();
        $('#incorrectAnswers').empty();
        $('#unanswered').empty();
        currentQuestion = [];
        correct = 0;
        wrong = 0;
        unanswered = 0;
    }
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function stop() {
        clearInterval(intervalId);
    }

    function reset() {
        seconds = 5;
    }

    // create function that calls an index from the question array.It then pushes that function to 
    // function newQuestion() {
    function randomQuestion() {
        var randomItem = questionArray[Math.floor(Math.random() * questionArray.length)];
        questionArray = jQuery.grep(questionArray, function (value) {
            return value != randomItem;
        })
        currentQuestion = randomItem.question;
        currenAnswrOpt = randomItem.possible;
        currentCorrect = randomItem.correct;
        var questionLocation = $('<div>');
        questionLocation.html(`
                                
                                <div>${currentQuestion}</div>
                                <div class="answers btn btn-primary m-2 p-0 w-20 h-100" id='${currenAnswrOpt[0]}'>${currenAnswrOpt[0]}</div>
                                <div class="answers btn btn-primary m-2 p-0 w-20 h-100" id='${currenAnswrOpt[1]}'>${currenAnswrOpt[1]}</div>
                                <div class="answers btn btn-primary m-2 p-0 w-20 h-100" id='${currenAnswrOpt[2]}'>${currenAnswrOpt[2]}</div>
                                <div class="answers btn btn-primary m-2 p-0 w-20 h-100" id='${currenAnswrOpt[3]}'>${currenAnswrOpt[3]}</div>
                            `)
        $('.question').append(questionLocation)
    }

    // START GAME
    function startGame() {
        $('button').on("click", function () {
            $('button').hide();
            newGame();
            timedQuestion();
        })
    }

    function timedQuestion() {
        console.log(questionArray)
        if (questionArray.length === 0) {
            alert('GAME OVER')
            stop()
            finish()
        }
        else {

            $('.question').empty();
            randomQuestion();
            decrement();
            run();
            console.log(currentQuestion)
            console.log(currenAnswrOpt)
            console.log(currentCorrect)
            $('.answers').on('click', function () {
                console.log($(this).attr('id'))
                if ($(this).attr('id') === currentCorrect) {
                    console.log("correct");
                    correctAction();
                }
                else {
                    wrongAction();
                }
            })
        }
    }

    function decrement() {
        seconds--;
        $('#show-timer').html(`<h2>${seconds}<h2>`)
        if (seconds === -1) {
            if (questionArray.length === 0) {
                alert('GAME OVER')
                stop();
                finish()
            }
            else {
                unanswered++;
                console.log(unanswered);
                clearInterval(intervalId);
                alert("Time is up!");
                alert('Next Question');
                timedQuestion();
                reset();
                run();
            }
        }

    }

    function finish() {
        $('#correct').html('correct: ' + correct);
        $('#wrong').html('wrong: ' + wrong);
        $('#unanswered').html('correct: ' + unanswered);

    }

    function wrongAction() {
        stop();
        wrong++;
        console.log(correct);
        var gifWrong = $('<div>');
        gifWrong.html(`
            <div id="cor">The correct Answer is: ${currentCorrect}</div>
            <iframe src="https://giphy.com/embed/Njz0oop9x5Stq" width="680" height="403" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/movie-the-good-bad-and-ugly-eli-wallach-Njz0oop9x5Stq">via GIPHY</a></p>
                            `);
        $('.question').append(gifWrong)
        // mark number of correct up one
        //replace current question with a new question
        delayWin = setTimeout(function () {
            timedQuestion();
            // reset the timer
            reset();
        }, 5000);
    }

    function correctAction() {
        stop();
        correct++;
        console.log(correct);
        var gifCorrect = $('<div>');
        gifCorrect.html(`
        <iframe src="https://giphy.com/embed/8maWiWlmIcVWM" width="680" height="464" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/blondie-the-good-bad-and-ugly-tuco-8maWiWlmIcVWM">via GIPHY</a></p>
        `);
        $('.question').append(gifCorrect)
        // mark number of correct up one
        //replace current question with a new question
        delayWin = setTimeout(function () {
            timedQuestion();
            // reset the timer
            reset();
        }, 5000);
    }






    // Create a function for what happens if the answer is right or wrong. 


}