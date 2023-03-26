//questions in quiz are in an ARRAY, each question is an Object with property: valuesArray. the correct value is true. 
var quizQuestions = [
    {
        qNum: 1,
        question: '1. Which is my fave pokemon?',
        options: [['raichu', true], ['digimon', false], ['yugioh', false], ['tamagotchi', false]]
    },
    {
        qNum: 2,
        question: '2. the coldest season is?',
        options: [['spring', false], ['summer', false], ['fall', false], ['winter', true]]
    },
    {
        qNum: 3,
        question: '3. the most vibrant colour is?',
        options: [['black', false], ['gray', false], ['yellow', true], ['beige', false]]
    },
    {
        qNum: 4,
        question: '4. the cutest animals are?',
        options: [['candy-corn', false], ['raccoons', true], ['fish', false], ['sea-monkeys', false]]
    },
    {
        qNum: 5,
        question: '5. when your head is cold, you should put on...',
        options: [['a hat', true], ['a tshirt', false], ['gloves', false], ['boots', false]]
    }
];
var score = 0;
var timeLeft = 60; //60seconds

//variables from HTML
var startBtn = document.querySelector('#start-btn');
var startPg = document.querySelector("#start-page")
var game = document.querySelector('#game');
var question = document.querySelector('#question');
// var choices = document.querySelector('.choices');
var optionBtns = document.querySelectorAll('.option');  //returns an array: 4 class='option' buttons (0-3)
var timer = document.querySelector('#timer');


//click start button: Show the first question and it's choices. 

startBtn.addEventListener('click', startQuiz);
function startQuiz() {
    startPg.setAttribute('class', 'hidden');  //hides the #startPg
    game.setAttribute('class', ''); //un-hides the #game
    showQuestions();
}

//Q1
function showQuestions() {
    //question: 
    question.textContent = quizQuestions[0]['question'] //change to show the first question and it's options.
    //options: index i
    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].textContent = (quizQuestions[0]['options'][i][0]);  //for each optionBtn(0-3), change text to coresponding choice 
    }
    //make each button 'clickable'
    for (let b = 0; b < optionBtns.length; b++) {
        optionBtns[b].addEventListener('click', contQuiz);   //askBCS:Youssef  <--add eventListener to SINGLE ITEM in the optionBtns(ARRAY). eventListeners canNOT be added to an array!! 
    }
}

//Q2
function contQuiz() {
    //questions: index-q
    question.textContent = quizQuestions[1]['question'];

    //options: index i
    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].textContent = (quizQuestions[1]['options'][i][0]);
    }
    //make each button 'clickable'
    for (let b = 0; b < optionBtns.length; b++) {
        optionBtns[b].addEventListener('click', contQuiz1)   //askBCS:Youssef  <--add eventListener to SINGLE ITEM in the optionBtns(ARRAY). eventListeners canNOT be added to an array!! 
    }
}

//Q3
function contQuiz1() {
    //questions: index-q
    // for (let q = 1; q < optionBtns.length; q++) {
        question.textContent = quizQuestions[2]['question']
    }

    //options: index i
    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].textContent = (quizQuestions[2]['options'][i][0]);
    }





































//when change happens, start timer. 60seconds
var countdown = setInterval(timerStart, 1000);  //interval of 1second

function timerStart() {
    timeLeft--;
    timer.innerText = `${timeLeft} sec`;
    if (timeLeft === 0) {
        clearInterval(countdown);
    }
}


