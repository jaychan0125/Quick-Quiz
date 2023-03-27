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

//startBtn: hides the intro and shows the quiz with first question
function startQuiz() {
    //if we declared questionNum here, it would get function scoped and unusable elsewehere 
    startPg.setAttribute('class', 'hidden');  //hides the #startPg
    game.classList.remove('hidden'); //un-hides the #game 
    showQuestions();
}

//when option button is clicked, will check if correct choice, will increment to next questionNum
function gradeUserChoice(e) {  
    console.log(e);  //logs: PointerEvent
    console.log(e.target);  //logs: div class=choices /button class=option
    var thingClicked = e.target; //rn, click eventListener is attached to the div(choices) parenting the buttons .: clicking outside the buttons will still invoke the function
    if (thingClicked.matches('button')) { //to ensure that what we're clicking on is a button
        var buttonText = thingClicked.textContent;
        //if the button clicked on is the right choice
        if(buttonText == quizQuestions[questionNum]['correct']) {
            message.textContent = 'You selected correctly! Good job! 🦝';
            score = score + 10;
        } else {
            message.textContent = 'Oops! Wrong selection! -5 seconds! 🗑️';
            timeLeft = timeLeft - 5;
        }
        // if questionNum () is the same value as the length of quizQuestions - 1
        // then you know you were at your last question
        // now what do you do
        console.log(questionNum);
        if (questionNum == quizQuestions.length - 1) {
            // do something:  Game over page! 
         
            return;  //to jump out of this function(gradeUserChoice), so the last two lines of code do not run!!
        }
        //increment questionNum
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

//startBtn: starts timer. 60seconds
function timerStart() {
    console.log('timer started');
    var countdown = setInterval(function () {
        timeLeft--;
        timer.innerText = `${timeLeft} sec`;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timer.innerText = 'Times up!'
            // run some other function that shows the page for receiving user name and score
        }
    }, 1000);  //interval of 1second
}


//EVENTLISTENER FOR: timer runs to 0: go to game over page


//best practice to have eventListeners at the bottom
//click START button: Show the first question and it's choices, and starts timer
startBtn.addEventListener('click', startQuiz);
startBtn.addEventListener('click', timerStart);
choices.addEventListener('click', gradeUserChoice);



