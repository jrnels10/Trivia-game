window.onload = function () {

    //  Click events are done for us:
    //     $("#lap").click(stopwatch.recordLap);
    //     $("#stop").click(stopwatch.stop);
    //     $("#reset").click(stopwatch.reset);
    //     $("#start").click(stopwatch.start);
    //   };

    //Create objects for each of the questions includes all the possible answers and the correct answer

    var firstQuest = {
        question: 'What color is the sky?',
        possible: ['Blue', 'Red', 'Green', 'Yellow'],
        correct: 0,
    }
    var secondQuest = {
        question: 'What color is an apple?',
        possible: ['Blue', 'Red', 'Green', 'Yellow'],
        correct: 1,
    }
    var thirdQuest = {
        question: 'What color is the grass?',
        possible: ['Blue', 'Red', 'Green', 'Yellow'],
        correct: 3,
    }
    var fourthQuest = {
        question: 'What color is the schoolbus?',
        possible: ['Blue', 'Red', 'Green', 'Yellow'],
        correct: 4,
    }
    var questionArray = [firstQuest, secondQuest, thirdQuest, fourthQuest];
    var currentQuestion = [];
    // Create a function for a new game
    function newGame() {
        $('#correctAnswers').empty();
        $('#incorrectAnswers').empty();
        $('#unanswered').empty();
        currentQuestion = [];
        rightAnswer = 0;
        wrongAnswer = 0;
        unanswered = 0;
        newQuestion();
    }
    console.log(questionArray)

    // create function that calls an index from the question array.It then pushes that function to 
    // function newQuestion() {
    function randomQuestion() {
        var randomItem = questionArray[Math.floor(Math.random() * questionArray.length)];
        currentQuestion = randomItem.question;
        currenAnswrOpt = randomItem.possible;
        currentCorrect = randomItem.correct;
        var questionLocation = $('<div>');
        questionLocation.html(`
                                
                                <div>${currentQuestion}</div>
                                <div class="answers btn btn-primary m-2 p-0 w-20 h-100" id'${currenAnswrOpt[0]}'>${currenAnswrOpt[0]}</div>
                                <div class="answers btn btn-primary m-2 p-0 w-20 h-100" id'${currenAnswrOpt[1]}'>${currenAnswrOpt[1]}</div>
                                <div class="answers btn btn-primary m-2 p-0 w-20 h-100" id'${currenAnswrOpt[2]}'>${currenAnswrOpt[2]}</div>
                                <div class="answers btn btn-primary m-2 p-0 w-20 h-100" id'${currenAnswrOpt[3]}'>${currenAnswrOpt[3]}</div>
                            `)
        $('.question').append(questionLocation)
    }

    $('button').on("click", function () {
        $('button').hide();
        randomQuestion();
        console.log(currentQuestion)
        console.log(currenAnswrOpt)
        console.log(currentCorrect)
        
        console.log($('.answers').attr('id'))
    })
        $('.answers').on('click', function () {
            randomQuestion();
            if (this === currentCorrect) {
            }
        })




    // Create a function for what happens if the answer is right or wrong. 


}