$(document).ready(function () {
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
    var neutral = main.find('.neutral');
    var btns = main.find("#buttons");
    var arena = main.find('#arena');

    // ==========================================================================================================
    // ================= create characters to display on html ===================================================
    // ==========================================================================================================
    function first() {
        for (var i = 0; i < charPlayer.length; i++) {
            // firstHealth = charPlayer[i].health;
            var playerChar = $('<div>');
            playerChar.addClass("col-3 h-100");
            playerChar.html(`
                        <div class="character card btn btn-primary m-2 p-0 w-100 h-100" id='${charPlayer[i].name}'>
                            <img src='${charPlayer[i].image}' style=' height:100%'>
                            <h3 class="health card-img-overlay p-2" id='firstHealth' style="background-color: maroon; top: 45%; height: 40px; opacity: .75">Health: ${charPlayer[i].health}</h3>
                            <h3 class="attack card-img-overlay p-2" id="firstAttack" style="background-color: forestgreen; top: 65%; height: 40px; opacity: .75">Attack: ${charPlayer[i].attackPower}</h3>
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


        //===============================================================================
        //==============first player being selected======================================
        //===============================================================================
        $('.character').on("click", function () {
            if ($(this).attr('id') === 'clint') {
                firstPlayer = (theGood);
                firstHealth = (charPlayer[0].health)
                $('#bounty').hide();
                $('#prisoner').hide();
                secondChar.push(theBad, theUgly)
            }
            else if ($(this).attr('id') === 'bounty') {
                firstPlayer = (theBad);
                firstHealth = (charPlayer[1].health)
                secondChar.push(theGood, theUgly)
                $('#clint').hide();
                $('#prisoner').hide();
                console.log(firstPlayer);
                console.log(secondChar)
            }
            else {
                firstPlayer = (theUgly);
                firstHealth = (charPlayer[2].health)
                secondChar.push(theGood, theBad)
                $('#clint').hide();
                $('#bounty').hide();
                console.log(firstPlayer);
                console.log(secondChar)
            }
            console.log('firstplayer health: ' + firstHealth)


            // ===================================================================================
            //========Once character is selected, move the other players to the second row.========
            for (var i = 0; i < secondChar.length; i++) {
                console.log(secondChar.length)
                var nuetralChar = $('<div>');
                nuetralChar.addClass("col-3  h-100");
                nuetralChar.html(`
                
                <div class="opponent card btn btn-primary m-2 p-0 w-100 h-100" id='${secondChar[i].name}'>
                            <img src='${secondChar[i].image}' style=' height:100%'>
                            <h3 class="health card-img-overlay p-2" id='health' style="background-color: maroon; top: 45%; height: 40px; opacity: .75">Health: ${secondChar[i].health}</h3>
                            <h3 class="attack card-img-overlay p-2" id="health" style="background-color: forestgreen; top: 65%; height: 40px; opacity: .75">Attack: ${secondChar[i].attackPower}</h3>
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
                    $(this).hide();
                }
                else if ($(this).attr('id') === 'bounty') {
                    enemyPlayer = (theBad);
                    $(this).hide();
                }
                else {
                    enemyPlayer = (theUgly);
                    $(this).hide();
                }

                // =======================================================================
                // == Once rival is selected, move the selected player to the third row of the DOM====
                var enemyChar = $('<div>');
                enemyChar.addClass("col-3 h-100");
                enemyChar.html(`
                
                <div class="rival card btn btn-primary m-2 p-0 w-100 h-100" id='${enemyPlayer.name}'>
                <img src='${enemyPlayer.image}' style=' height:100%'>
                <h3 class="health card-img-overlay p-2" id='healthEnemy' style="background-color: maroon; top: 45%; height: 40px; opacity: .75">Health: ${enemyPlayer.health}</h3>
                <h3 class="attack card-img-overlay p-2" id='attackEnemy' style="background-color: forestgreen; top: 65%; height: 40px; opacity: .75">Attack: ${enemyPlayer.attackPower}</h3>
                </div>
                
                `);
                $('.enemy').append(enemyChar)
                // $(secondChar[i].health).replaceWith(firstPlayer.health)
            })
        })
    };

    //=============================================================================================================
    //============== Attack button ================================================================================
    // ============================================================================================================
    btns.on('click', function () {
        firstPlayer.health = firstPlayer.health - enemyPlayer.attackPower;
        enemyPlayer.health = enemyPlayer.health - firstPlayer.attackPower;
        console.log('firstplayer health: ' + firstPlayer.health)
        console.log('enemyplayer health: ' + enemyPlayer.health)
        $('#healthEnemy').html('Health: ' + enemyPlayer.health);
        $('#firstHealth').html('Health: ' + firstPlayer.health)

        // if the user loses the battle
        if (firstPlayer.health <= 0) {
            firstPlayer.health = 0;
            $('#firstHealth').html('Health: ' + firstPlayer.health)

        }

        // if the user wins the battle. enter in other rival character.
        else if (enemyPlayer.health <= 0) {
            enemyPlayer.health = 0;
            $('#healthEnemy').html('Health: ' + enemyPlayer.health);
            alert("you've defeated the first enemy");
            alert('Round two');
            $('.opponent').hide();
            enemyDefeated.push(enemyPlayer)
            console.log(enemyDefeated)
            replace();

        }

        if (firstPlayer.health <= 0) {
            console.log(enemyDefeated.length)
            var videoFinish = $('<div>');
            videoFinish.addClass("col-12 vid h-100");
            videoFinish.html(`
            <iframe width="754" height="480" src="https://www.youtube.com/embed/5PgAKzmWmuk?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            `);
            $('.video').append(videoFinish)
        }
    })

    // =============================================================================================================
    //===========after first has been defeated, it replaces the defeated character with the other character=========
    // =============================================================================================================
    function replace() {
        // If they match, replace .enemy row with the secondChar[1] character. 
        if (enemyPlayer.name === secondChar[0].name) {
            $(enemyPlayer).data(secondChar[1]);
            enemyPlayer.health = secondChar[1].health;
            console.log(enemyPlayer)
            $('.rival').replaceWith(`
    
                                            <div class="rival card btn btn-primary m-2 p-0 w-100 h-100" id='${secondChar[1].name}'>
                                                <img src='${secondChar[1].image}' style=' height:100%'>
                                                <h3 class="health card-img-overlay p-2" id='healthEnemy' style="background-color: maroon; top: 45%; height: 40px; opacity: .75">Health: ${enemyPlayer.health}</h3>
                                                <h3 class="attack card-img-overlay p-2" id='' style="background-color: forestgreen; top: 65%; height: 40px; opacity: .75">Attack: ${secondChar[1].attackPower}</h3>
                                            </div>
    
                                            `)


        }
        // else replace .enemy row with the secondChar[0] character.
        else {
            $(enemyPlayer).attr(secondChar[0]);
            enemyPlayer.health = secondChar[1].health;
            $('.rival').replaceWith(`
    
                                            <div class="rival card btn btn-primary m-2 p-0 w-100 h-100" id='${secondChar[0].name}'>
                                                <img src='${secondChar[0].image}' style=' height:100%'>
                                                <h3 class="health card-img-overlay p-2" id='healthEnemy' style="background-color: maroon; top: 45%; height: 40px; opacity: .75">Health: ${enemyPlayer.health}</h3>
                                                <h3 class="attack card-img-overlay p-2" id='' style="background-color: forestgreen; top: 65%; height: 40px; opacity: .75">Attack: ${secondChar[0].attackPower}</h3>
                                            </div>
    
                                            `)
            $('helath').text('Health: ' + secondChar[0].health);
        }

    }


    // ==============================================================================================================
    //============== When 'Restart' button is clicked, reload the page.=============================================
    // ==============================================================================================================
    $('#reset').click(function reset() {
        location.reload();
    });


})




    //=======================================================================================================================
    //=======================================================================================================================
    //=======================================================================================================================
    //=========================================                NEW TRIVIA GAME                  =============================
    //=======================================================================================================================
    //=======================================================================================================================
    //=======================================================================================================================
    //=======================================================================================================================

    // var firstQuest = {
    //     question: 'Blondie and Tuco decided to blow up what?',
    //     possible: ['bridge', 'car', 'bank', 'train'],
    //     correct: 'bridge',
    // }
    // var secondQuest = {
    //     question: "Clint Eastwood didn't like the doing what in the movie?",
    //     possible: ['riding horses', 'being in the sun', 'shooting guns', 'smoking cigars'],
    //     correct: 'smoking cigars',
    // }
    // var thirdQuest = {
    //     question: "Why couldn't the director of The Good the Bad and the Ugly speak to Clint directly?",
    //     possible: ["Lost his voice during filming", "Clint hated him", "He couldn't speak english", "He didn't like gringos"],
    //     correct: "He couldn't speak english",
    // }
    // var fourthQuest = {
    //     question: 'What celebrity was not a fan of Eastwood?',
    //     possible: ['John Wayne', 'Elvis Presley', 'Morgan Freeman', 'Steve McQueen'],
    //     correct: 'John Wayne',
    // }
    // var fifthQuest = {
    //     question: 'What western genre movie did Clint Eastwood earn an Academy Award for?',
    //     possible: ['Gran Torino', 'High Plains Drifter', 'The Unforgiven', 'The Good The Bad and The Ugly'],
    //     correct: 'The Unforgiven',
    // }
    // var sixthQuest = {
    //     question: 'What movie did Eastwood take over as Director because production was too slow?',
    //     possible: ['Outlaw Jose Wales', "Hang 'Em High", 'Two Mules for Sister Sara', 'A Fistful of Dollars'],
    //     correct: 'Outlaw Jose Wales',
    // }
    // var seventhQuest = {
    //     question: 'What instrument can Eastwood play?',
    //     possible: ['Guitar', 'Piano', 'Trumpet', 'Banjo'],
    //     correct: 'Piano',
    // }
    // var eighthQuest = {
    //     question: 'Why are some western movies called "Spaghetti Westerns"?',
    //     possible: ['Actors liked spaghetti', 'They were made by Italian movie companies', 'There were so many twists and turns in the plot', 'Eastwood hated Spaghetti'],
    //     correct: 'They were made by Italian movie companies',
    // }
    // var ninthQuest = {
    //     question: 'What year was The Good The Bad and The Ugly released?',
    //     possible: ['1847', '1966', '2001', '2018'],
    //     correct: '1966',
    // }

    // var questionArray = [firstQuest, secondQuest, thirdQuest, fourthQuest, fifthQuest, sixthQuest, seventhQuest, eighthQuest, ninthQuest];
    // var currentQuestion = [];
    // var time;
    // var seconds = 5;
    // var intervalId;
    // var correct = 0;
    // var wrong = 0;
    // var unanswered = 0;
    // var delayWin;
    // console.log(questionArray)
    // //
    // //
    // //window.onload = function () {
    // startGame();
    // // Create a function for a new game
    // function newGame() {
    //     $('#correctAnswers').empty();
    //     $('#incorrectAnswers').empty();
    //     $('#unanswered').empty();
    //     currentQuestion = [];
    //     correct = 0;
    //     wrong = 0;
    //     unanswered = 0;
    // }
    // function run() {
    //     clearInterval(intervalId);
    //     intervalId = setInterval(decrement, 1000);
    // }

    // function stop() {
    //     clearInterval(intervalId);
    // }

    // function reset() {
    //     seconds = 5;
    // }

    // // create function that calls an index from the question array.It then pushes that function to
    // // function newQuestion() {
    // function randomQuestion() {
    //     var randomItem = questionArray[Math.floor(Math.random() * questionArray.length)];
    //     questionArray = jQuery.grep(questionArray, function (value) {
    //         return value != randomItem;
    //     })
    //     currentQuestion = randomItem.question;
    //     currenAnswrOpt = randomItem.possible;
    //     currentCorrect = randomItem.correct;
    //     var questionLocation = $('<div>');
    //     questionLocation.addClass('questStuff');
    //     questionLocation.html(`
    //                             <div>${currentQuestion}</div>
    //                             <div class="answers btn btn-primary m-2 h-100" id='${currenAnswrOpt[0]}'>${currenAnswrOpt[0]}</div>
    //                             <div class="answers btn btn-primary m-2 h-100" id='${currenAnswrOpt[1]}'>${currenAnswrOpt[1]}</div>
    //                             <div class="answers btn btn-primary m-2 h-100" id='${currenAnswrOpt[2]}'>${currenAnswrOpt[2]}</div>
    //                             <div class="answers btn btn-primary m-2 h-100" id='${currenAnswrOpt[3]}'>${currenAnswrOpt[3]}</div>
    //                         `)
    //     $('.question').append(questionLocation)
    // }

    // // START GAME
    // function startGame() {
    //     $('button').on("click", function () {
    //         $('.start').hide();
    //         newGame();
    //         timedQuestion();
    //     })
    // }

    // function timedQuestion() {
    //     console.log(questionArray)
    //     if (questionArray.length === 0) {
    //         alert('GAME OVER')
    //         stop()
    //         finish()
    //     }
    //     else {

    //         $('.question').empty();
    //         randomQuestion();
    //         decrement();
    //         run();
    //         console.log(currentQuestion)
    //         console.log(currenAnswrOpt)
    //         console.log(currentCorrect)
    //         $('.answers').on('click', function () {
    //             console.log($(this).attr('id'))
    //             if ($(this).attr('id') === currentCorrect) {
    //                 console.log("correct");
    //                 correctAction();
    //                 $('#healthEnemy').css('height', +100);
    //             }
    //             else {
    //                 wrongAction();
    //             }
    //         })
    //     }
    // }

    // function decrement() {
    //     seconds--;
    //     $('#show-timer').html(`<h2>${seconds}</h2>`)
    //     if (seconds === -1) {
    //         if (questionArray.length === 0) {
    //             alert('GAME OVER')
    //             stop();
    //             finish()
    //         }
    //         else {
    //             unanswered++;
    //             console.log(unanswered);
    //             clearInterval(intervalId);
    //             alert("Time is up!");
    //             alert('Next Question');
    //             timedQuestion();
    //             reset();
    //             run();
    //         }
    //     }

    // }

    // function finish() {
    //     $('#correct').html('correct: ' + correct);
    //     $('#wrong').html('wrong: ' + wrong);
    //     $('#unanswered').html('correct: ' + unanswered);

    // }

    // function wrongAction() {
    //     stop();
    //     wrong++;
    //     console.log(wrong);
    //     $('.answers').hide();
    //     var gifWrong = $('<div>');
    //     gifWrong.html(`
    //         <div id="cor">The correct answer is: ${currentCorrect}</div>
    //         <iframe src="https://giphy.com/embed/Njz0oop9x5Stq" width="480" height="203" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/movie-the-good-bad-and-ugly-eli-wallach-Njz0oop9x5Stq"></a></p>
    //                         `);
    //     $('.question').append(gifWrong)
    //     // mark number of correct up one
    //     //replace current question with a new question
    //     delayWin = setTimeout(function () {
    //         timedQuestion();
    //         // reset the timer
    //         reset();
    //     }, 5000);
    // }

    // function correctAction() {
    //     stop();
    //     correct++;
    //     console.log(correct);
    //     $('.questStuff').hide();
    //     var gifCorrect = $('<div>');
    //     gifCorrect.html(`
    //     <div id='right'>Correct!</div>
    //     <iframe src="https://giphy.com/embed/8maWiWlmIcVWM" width="480" height="264" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/blondie-the-good-bad-and-ugly-tuco-8maWiWlmIcVWM"></a></p>
    //     `);
    //     $('.question').append(gifCorrect)
    //     // mark number of correct up one
    //     //replace current question with a new question
    //     delayWin = setTimeout(function () {
    //         timedQuestion();
    //         // reset the timer
    //         reset();
    //     }, 5000);

    // }

    //    function shots() {
    //        if (correct === 1) {
    //
    //        console.log("Player has been shot!")
    //        var enemyShot = $('<div>');
    //        enemyShot.html(`
    //                <div id='shot-1'>
    //                <h3 class="health card-img-overlay p-2" id='healthEnemy' style="background-color: maroon; top: 64%; height: 185px; opacity: .75"></h3>
    //                </div>
    //        `)
    //            $('.rival').append(enemyShot);
    //        }
    //        else if (correct === 2) {
    //        var enemyShot = $('<div>');
    //        enemyShot.html(`
    //                <div id='shot-1'>
    //                <h3 class="health card-img-overlay p-2" id='healthEnemy' style="background-color: maroon; top: 36%; height: 185px; opacity: .75"></h3>
    //                </div>
    //        `)
    //            $('.rival').append(enemyShot);
    //        }
    //        else if (correct === 3) {
    //        var enemyShot = $('<div>');
    //        enemyShot.html(`
    //                <div id='shot-1'>
    //                <h3 class="health card-img-overlay p-2" id='healthEnemy' style="background-color: maroon; top: 2%; height: 185px; opacity: .75"></h3>
    //                </div>
    //        `)
    //            $('.rival').append(enemyShot);
    //        }
    //        else if (wrong == 1) {
    //        console.log('wrong ' + wrong )
    //
    //        var playerShot = $('<div>');
    //        playerShot.html(`
    //                <div id='shot-1'>
    //                <h3 class="health card-img-overlay p-2" id='healthEnemy' style="background-color: maroon; top: 67%; height: 180px; opacity: .75"></h3>
    //                </div>
    //        `)
    //            $('.playerCho').append(playerShot);
    //        }
    //        else if (wrong == 2) {
    //        console.log('wrong ' + wrong )
    //
    //        var playerShot = $('<div>');
    //        playerShot.html(`
    //                <div id='shot-1'>
    //                <h3 class="health card-img-overlay p-2" id='healthEnemy' style="background-color: maroon; top: 38%; height: 180px; opacity: .75"></h3>
    //                </div>
    //        `)
    //            $('.playerCho').append(playerShot);
    //        }
    //        else if (wrong == 3) {
    //        console.log('wrong ' + wrong )
    //
    //        var playerShot = $('<div>');
    //        playerShot.html(`
    //                <div id='shot-1'>
    //                <h3 class="health card-img-overlay p-2" id='healthEnemy' style="background-color: maroon; top: 2%; height: 180px; opacity: .75"></h3>
    //                </div>
    //        `)
    //            $('.playerCho').append(playerShot);
    //        }
    //    }






    //     Create a function for what happens if the answer is right or wrong.


    //}
