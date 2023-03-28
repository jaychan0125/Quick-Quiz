//best practice to decalre all variables at top
//questions in quiz are in an ARRAY, each question is an Object with properties: options valuesArray, and correct value
var quizQuestions = [
    {
        question: '1. Which is my fave pokemon?',
        options: ['raichu', 'digimon', 'yugioh', 'tamagotchi'],
        correct: 'raichu'
    },
    {
        question: '2. the coldest season is?',
        options: ['spring', 'summer', 'fall', 'winter'],
        correct: 'true'
    },
    {
        question: '3. the most vibrant colour is?',
        options: ['black', 'gray', 'yellow', 'beige'],
        correct: 'yellow'
    },
    {
        question: '4. the cutest animals are?',
        options: ['candy-corn', 'raccoons', 'fish', 'sea-monkeys'],
        correct: 'raccoons'
    },
    {
        question: '5. when your head is cold, you should put on...',
        options: ['a hat', 'a tshirt', 'gloves', 'boots'],
        correct: 'a hat'
    }
];
var score = 0;
var timeLeft = 60; //60seconds
var questionNum = 0; //global scoped variable can be used in/altered by functions, but will still be accessible everywhere

//variables from HTML
var startBtn = document.querySelector('#start-btn');
var startPg = document.querySelector("#start-page")
var game = document.querySelector('#game');
var question = document.querySelector('#question');
var choices = document.querySelector('.choices');
var optionBtns = document.querySelectorAll('.option');  //returns an array: 4 class='option' buttons (0-3)
var timer = document.querySelector('#timer');
var message = document.querySelector('#message');
var gameOver = document.querySelector('#game-over');
var finalScore = document.querySelector('#final-score');
var userId = document.querySelector('#userId');
var saveBtn = document.querySelector('#save-button');
var hiScoreBtn = document.querySelector('#high-score');
var scoreResults = document.querySelector('#hiscore-page');
var scoreHistory = document.querySelector('#score-history');


//startBtn: hides the intro and shows the quiz with first question
function startQuiz() {
    //if we declared questionNum here, it would get function scoped and unusable elsewehere 
    startPg.setAttribute('class', 'hidden');  //hides the #startPg
    game.classList.remove('hidden'); //un-hides the #game
    timer.classList.remove('nav-hide');
    hiScoreBtn.setAttribute('class','nav-hide')
    showQuestions();
}

//when option button is clicked, will check if correct choice: will increment to next questionNum; if wrong will lose time
function gradeUserChoice(e) {
    // console.log(e);  //logs: PointerEvent
    // console.log(e.target);  //logs: div class=choices/button class=option (depending on what clicked)
    var thingClicked = e.target; //rn, click eventListener is attached to the div(choices) parenting the buttons .: clicking outside the buttons will still invoke the function
    if (thingClicked.matches('button')) { //to ensure that what we're clicking on is a button
        var buttonText = thingClicked.textContent;
        //if the button clicked on is the right choice
        if (buttonText == quizQuestions[questionNum]['correct']) {
            message.textContent = 'You selected correctly! Good job! 🦝';
            score = timeLeft;
        } else {  //if wrong, lose time
            message.textContent = 'Oops! Wrong selection! -5 seconds! 🗑️';
            timeLeft = timeLeft - 5;
        }
        // if questionNum () is the same value as the (length of quizQuestions - 1), then you're at your last question
        //console.log(questionNum);
        if (questionNum == quizQuestions.length - 1) {
            // do something:  run gameover function
            gameOverPg();
            return;  //to jump out of this function(gradeUserChoice), so the last two lines of code do not run!!
        }
        //increment questionNum regardless of right/wrong. just as long as button is clicked
        questionNum++;
        showQuestions();
    }
}

//where questionNum is then passed to this function, so that it changes the question we are on 
function showQuestions() {
    question.textContent = quizQuestions[questionNum]['question']; //change to show the first question and it's options.
    for (var i = 0; i < optionBtns.length; i++) {
        optionBtns[i].textContent = (quizQuestions[questionNum]['options'][i]);  //for each optionBtn(0-3), change text to coresponding choice 
    }
}

//startBtn: starts timer-60seconds
function timerStart() {
    // console.log('timer started');
    var countdown = setInterval(function () {
        timeLeft--;
        timer.innerText = `${timeLeft} sec`;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timer.innerText = 'Times up!'
            gameOverPg();
        } else if (questionNum == quizQuestions.length - 1) {
            clearInterval(countdown);
            timer.innerText = 'Finished! 🦝'
        }
    }, 1000);  //interval of 1second
}

//when timer=0 OR all questions used, redirect here:
function gameOverPg() {
    game.setAttribute('class', 'hidden');  //hides the #game
    gameOver.classList.remove('hidden'); //shows #gameOver
    hiScoreBtn.setAttribute('class',''); //shows hiScoreBtn
    finalScore.textContent = timeLeft;
}
//when click event on saveBtn
function saveInfo(event) {
    event.preventDefault(event);
    localStorage.setItem('userId', JSON.stringify(userId.value));
    localStorage.setItem('userScore', JSON.stringify(timeLeft));
}


function hiScorePg() {
    scoreResults.classList.remove('hidden');
    startPg.setAttribute('class', 'hidden');
    game.setAttribute('class', 'hidden');
    gameOver.setAttribute('class', 'hidden');
    timer.setAttribute('class', 'nav-hide');
    var savedUser = JSON.parse(localStorage.getItem('userId'));
    var savedScore = JSON.parse(localStorage.getItem('userScore'));
    scoreHistory.textContent = `${savedUser} : ${savedScore}`;
}


//best practice to have eventListeners at the bottom
//click START button: Show the first question and it's choices, and starts timer
startBtn.addEventListener('click', startQuiz);
startBtn.addEventListener('click', timerStart);
//click any option btn: checks if choice was correct, moves onto next question until no more then redirects to gameOver
choices.addEventListener('click', gradeUserChoice);
//saves info
saveBtn.addEventListener('click', saveInfo);
//click to redirect to hiScorePg, displaying previous scores
hiScoreBtn.addEventListener('click', hiScorePg);

