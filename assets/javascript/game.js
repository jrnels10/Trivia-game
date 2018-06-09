$(document).ready(function () {

    chooseCharacter();
    $('.results').hide();
    $('.playerChoice').hide();
    $('.media').hide();
    $('.enemy').hide();
    $('.time').hide();
    function chooseCharacter() {
        var main = $('body');
        // =====================================================================================================
        // ==================create objects and variables for each of the characters.===========================
        //=====================================================================================================
        // The Good character
        var theGood = {
            image: 'assets/images/the_good_resize.jpg',
            name: 'clint',
            health: 160,
            attackPower: 80,
        };
        // The Bad character
        var theBad = {
            image: 'assets/images/the_bad.jpg',
            name: "bounty",
            health: 200,
            attackPower: 40,
        };
        // The Ugly character
        var theUgly = {
            image: 'assets/images/the_ugly.jpg',
            name: "prisoner",
            health: 175,
            attackPower: 60,
        };

        var charPlayer = [];
        charPlayer.push(theGood, theBad, theUgly);
        var selected = false;
        var firstPlayer = [];
        var firstHealth = [];
        var enemyPlayer = [];
        var secondChar = [];
        var thirdRow = [];
        var enemyDefeated = [];
        var damageHealth = 0;
        var playerChoice;
        var neutral = main.find('.neutral');
        var btns = main.find("#buttons");
        var arena = main.find('#arena');

        // ==========================================================================================================
        // ================= create characters to display on html ===================================================
        // ==========================================================================================================
        function first() {
            for (var i = 0; i < charPlayer.length; i++) {
                $('h2').hide();
                playerChar = $('<div>');
                playerChar.addClass("col-3 h-100");
                playerChar.html(`
                        <div class="w3-container w3-center w3-animate-right h-100">
                        <div class="character card btn btn-primary m-2 p-0 w-100 h-100" id='${charPlayer[i].name}'>
                            <img src='${charPlayer[i].image}' style=' height:450px'>
                        </div>

                        `);
                $('.first').append(playerChar);
                console.log(charPlayer[i].name)
            }
        }

        // ==========================================================================================================
        //========= When the page loads, display the objects as divs on the DOM.=====================================
        // ==========================================================================================================
        window.onload = function () {

            // Call on the first function========================================
            first();
            $('.video').hide();

            //===============================================================================
            //==============first player being selected======================================
            //===============================================================================
            $('.character').on("click", function () {
                if ($(this).attr('id') === 'clint') {
                    firstPlayer = (theGood);
                    firstHealth = (charPlayer[0].health)
                    $('.first').hide();
                    $('#bounty').hide();
                    $('#prisoner').hide();
                    secondChar.push(theBad, theUgly)
                }
                else if ($(this).attr('id') === 'bounty') {
                    firstPlayer = (theBad);
                    firstHealth = (charPlayer[1].health)
                    secondChar.push(theGood, theUgly)
                    $('.first').hide();
                    console.log(firstPlayer);
                    console.log(secondChar)
                }
                else {
                    firstPlayer = (theUgly);
                    firstHealth = (charPlayer[2].health)
                    secondChar.push(theGood, theBad)
                    $('.first').hide();
                    console.log(firstPlayer);
                    console.log(secondChar)
                }
                console.log('firstplayer health: ' + firstHealth)
                $('h1').hide();
                $('h2').show();


                // ===================================================================================
                //========Once character is selected, move the other players to the second row.========
                for (var i = 0; i < secondChar.length; i++) {
                    console.log(secondChar.length)
                    var nuetralChar = $('<div>');
                    nuetralChar.addClass("col-3  h-100");
                    nuetralChar.html(`
                            <div class="w3-container w3-center w3-animate-right h-100">
                            <div class="opponent card btn btn-primary m-2 p-0 w-100 h-100" id='${secondChar[i].name}'>
                            <img src='${secondChar[i].image}' style=' height:450px'>
                            </div>

                            `);
                    // append the second row of the DOM
                    neutral.append(nuetralChar);

                }

                //==============================================================================
                //============= select rival character ==================
                //===============================================================
                $('.opponent').on("click", function () {
                    console.log($(this).attr('id'))
                    if ($(this).attr('id') === 'clint') {
                        console.log(theGood)
                        enemyPlayer = (theGood);
                        $('.neutral').hide();
                    }
                    else if ($(this).attr('id') === 'bounty') {
                        enemyPlayer = (theBad);
                        $('.neutral').hide();
                    }
                    else {
                        enemyPlayer = (theUgly);
                        $('.neutral').hide();
                    }

                    // =======================================================================
                    // == Once rival is selected, move the selected player to the third row of the DOM====
                    playerChoice = $('<div>');
                    playerChoice.addClass("col-12");
                    playerChoice.html(`
                            <div class="w3-container w3-center w3-animate-right p-0">
                            <img src='${firstPlayer.image}' style="width: 100%; height: 500px">
                            <h3 class="health card-img-overlay p-2" id='healthPlayer' style="background-color: maroon; top: -2%; height: 0px; opacity: .75"></h3>
                            </div>

                        `);
                    $('.playerChoice').append(playerChoice);

                    var enemyChar = $('<div>');
                    enemyChar.addClass("col-12");
                    enemyChar.html(`

                    <div class="w3-container w3-center w3-animate-left p-0">
                <img src='${enemyPlayer.image}'  style="width: 100%; height: 500px">
                <h3 class="health card-img-overlay p-2" id='healthEnemy' style="background-color: maroon; top: -2%; height: 0px; opacity: .75"></h3>

                </div>

                `);
                    $('.video').show();
                    $('.enemy').append(enemyChar)
                    $('.playerChoice').show();
                    $('.media').show();
                    $('.enemy').show();
                    $('h1').hide();
                    $('h2').hide();
                })
            })

        };
    }

    //=======================================================================================================================
    //=======================================================================================================================
    //=======================================================================================================================
    //=========================================                NEW TRIVIA GAME                  =============================
    //=======================================================================================================================
    //=======================================================================================================================
    //=======================================================================================================================
    //=======================================================================================================================
    var questionArray = [
        firstQuest = {
            question: 'In The Good the Bad and Ugly, Blondie and Tuco decided to blow up what?',
            possible: ['bridge', 'car', 'bank', 'train'],
            correct: 'bridge',
        },
        secondQuest = {
            question: "Clint Eastwood didn't like the doing what in the movie?",
            possible: ['riding horses', 'being in the sun', 'shooting guns', 'smoking cigars'],
            correct: 'smoking cigars',
        },
        thirdQuest = {
            question: "Why couldn't the director of The Good the Bad and the Ugly speak to Clint directly?",
            possible: ["Lost his voice during filming", "Clint hated him", "The director could not speak english", "The director didn't like gringos"],
            correct: "The director could not speak english",
        },
        fourthQuest = {
            question: 'Which celebrity was not a fan of Eastwood?',
            possible: ['John Wayne', 'Elvis Presley', 'Morgan Freeman', 'Steve McQueen'],
            correct: 'John Wayne',
        },
        fifthQuest = {
            question: 'What western genre movie did Clint Eastwood earn an Academy Award for?',
            possible: ['Gran Torino', 'High Plains Drifter', 'The Unforgiven', 'The Good The Bad and The Ugly'],
            correct: 'The Unforgiven',
        },
        sixthQuest = {
            question: 'What movie did Eastwood take over as Director because production was too slow?',
            possible: ['Outlaw Jose Wales', "Hang 'Em High", 'Two Mules for Sister Sara', 'A Fistful of Dollars'],
            correct: 'Outlaw Jose Wales',
        },
        seventhQuest = {
            question: 'What musical instrument can Eastwood play?',
            possible: ['Guitar', 'Piano', 'Trumpet', 'Banjo'],
            correct: 'Piano',
        },
        eighthQuest = {
            question: 'Why are some western movies called "Spaghetti Westerns"?',
            possible: ['Actors liked spaghetti', 'They were made by Italian movie companies', 'There were so many twists and turns in the plot', 'Eastwood hated Spaghetti'],
            correct: 'They were made by Italian movie companies',
        },
        ninthQuest = {
            question: 'What year was The Good The Bad and The Ugly released?',
            possible: ['1847', '1966', '2001', '2018'],
            correct: '1966',
        }];


    var currentQuestion = [];
    var goodGif = ['<iframe src="https://giphy.com/embed/hpXxJ78YtpT0s" width="480" height="223" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
        '<iframe src="https://giphy.com/embed/aqDXCH2M1ycEw" width="480" height="249" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
        '<iframe src="https://giphy.com/embed/P6jhIEAMx6srC" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'];


    var time;
    var seconds = 15;
    var intervalId;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var delayWin;
    var gameQuestions = [];
    var heightCss = 0;
    var playerCss = 0;
    $('.res').hide();
    console.log(questionArray)
    function makeGameQuestion() {
        for (i = 0; i < questionArray.length; i++) {
            gameQuestions.push(questionArray[i]);
        }

    }

    // START GAME by clicking the start button
    $('#startButton').on("click", function () {
        stop();
        $('.results').remove();
        newGame();
        console.log("OK wait!")
        displayInstructions();
        $('.question').show();
        
    })
    function replayButton() {
        $("#winButton").on('click', function () {
            console.log('hello')
            displayInstructions();
            $('.res').hide();
            $('.question').show();
        })
    }

    function startGame() {
        $('#startButton').on("click", function () {
            displayInstructions();
        })
    }
    startGame();

    function displayInstructions() {
        $('.time').show();
        $('.instructions').hide();
        $('.start').hide();
        newGame();
        timedQuestion();

    }

    // Create a new game by clearinng all stored values
    function newGame() {
        $('#correctAnswers').empty();
        $('#incorrectAnswers').empty();
        $('#unanswered').empty();
        currentQuestion = [];
        correct = 0;
        wrong = 0;
        unanswered = 0;
        $('#healthPlayer').css('height', + (playerCss * 0));
        $('#healthEnemy').css('height', +(heightCss * 0));
        makeGameQuestion();
    }

    // timer begins countdown by 1 second
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    // stops timer
    function stop() {
        clearInterval(intervalId);
    }

    // resets timer at 15 seconds
    function reset() {
        seconds = 15;
    }

    // create function that calls an index from the question array.It then pushes that function to
    function randomQuestion() {
        var randomItem = gameQuestions[Math.floor(Math.random() * gameQuestions.length)];
        gameQuestions = jQuery.grep(gameQuestions, function (value) {
            return value != randomItem;
        })
        currentQuestion = randomItem.question;
        currenAnswrOpt = randomItem.possible;
        currentCorrect = randomItem.correct;
        var questionLocation = $('<div>');
        questionLocation.addClass('questStuff');
        questionLocation.html(`
                                <div>${currentQuestion}</div>
                                <div class="answers btn btn-primary m-2 h-100" id='${currenAnswrOpt[0]}'>${currenAnswrOpt[0]}</div>
                                <div class="answers btn btn-primary m-2 h-100" id='${currenAnswrOpt[1]}'>${currenAnswrOpt[1]}</div>
                                <div class="answers btn btn-primary m-2 h-100" id='${currenAnswrOpt[2]}'>${currenAnswrOpt[2]}</div>
                                <div class="answers btn btn-primary m-2 h-100" id='${currenAnswrOpt[3]}'>${currenAnswrOpt[3]}</div>
                            `)
        $('.question').append(questionLocation)
    }

    function timedQuestion() {
        console.log(questionArray)
        if (correct === 3) {
            console.log("You win");
            stop();
            finish();
        }
        else if (wrong === 3) {
            console.log("You lose");
            stop();
            finish();
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
        $('#show-timer').html(`<h2>${seconds}</h2>`);
        if (seconds === -1) {
            if (questionArray.length === 0) {
                alert('GAME OVER');
                stop();
                finish();
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
        $('.res').empty();
        $('.res').show();
        $('.question').hide();
        var resultsDiv = $('<div>');
        resultsDiv.addClass('results');
        var scoreHeader = ['correct', 'wrong', 'unanswered'];
        var scores = [correct, wrong, unanswered];
        for (i = 0; i < scoreHeader.length; i++) {
            var scoreDiv = $('<div>');
            scoreDiv.text(scoreHeader[i] + ': ' + scores[i]);
            resultsDiv.prepend(scoreDiv);
        }
        var gameButton = $('<button>');
        gameButton.addClass('newStuff btn btn-warning');
        gameButton.attr('id', 'winButton');
        gameButton.text('Play again')
        resultsDiv.prepend(gameButton);
        $('.res').prepend(resultsDiv);
        replayButton();
    }

    function wrongAction() {
        stop();
        wrong++;
        playerCss = 0;
        playerCss = playerCss + 170;
        $('#healthPlayer').css('height', +playerCss);
        console.log(wrong);
        $('.answers').hide();
        var gifWrong = $('<div>');
        gifWrong.html(`
            <div id="cor">The correct answer is: ${currentCorrect}</div>
            <iframe src="https://giphy.com/embed/Njz0oop9x5Stq" width="480" height="203" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/movie-the-good-bad-and-ugly-eli-wallach-Njz0oop9x5Stq"></a></p>
                            `);
        $('.question').append(gifWrong)
        // mark number of correct up one
        //replace current question with a new question
        timer(5000);
    }

    function correctAction() {
        stop();
        correct++;
        heightCss = 0;
        heightCss = heightCss + 170;
        $('#healthEnemy').css('height', +heightCss);
        console.log(correct);
        $('.questStuff').hide();
        var gifChoice = goodGif[Math.floor(Math.random() * goodGif.length)];
        console.log(gifChoice);
        var gifCorrect = $('<div>');
        gifCorrect.html(`
                        <div id='right'>Correct!</div>
                        <div id='good-gif'>${gifChoice}</div>
                        `);
        $('.question').append(gifCorrect)
        timer(5000);

    }
    function timer(value) {
        delayWin = setTimeout(function () {
            timedQuestion();
            // reset the timer
            reset();
        }, value);
    }

})