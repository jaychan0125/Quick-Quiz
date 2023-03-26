//questions in quiz are in an ARRAY, each question is an Object with property: valuesArray. the correct value is true. 
var quizQuestions = [
    {
        qNum: 1,
        question: 'Which is my fave pokemon?',
        options: [['raichu', true], ['digimon', false], ['yugioh', false], ['tamagotchi', false]]
    },
    {
        qNum: 2,
        question: 'the coldest season is?',
        options: [['spring', false], ['summer', false], ['fall', false], ['winter', true]]
    },
    {
        qNum: 3,
        question: 'the most vibrant colour is?',
        options: [['black', false], ['gray', false], ['yellow', true], ['beige', false]]
    },
    {
        qNum: 4,
        question: 'the cutest animals are?',
        options: [['candy-corn', false], ['raccoons', true], ['fish', false], ['sea-monkeys', false]]
    },
    {
        qNum: 5,
        question: 'when your head is cold, you should put on...',
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

    //change to show the first question and it's options.
    question.textContent = quizQuestions[0]['question']
    //options:
    for (let i = 0; i < optionBtns.length; i++) {
        // console.log(optionBtns[i]) 
        // console.log(quizQuestions[0]['options'][i])
        optionBtns[i].textContent = (quizQuestions[0]['options'][i][0]);  //for each optionBtn(0-3), change text to coresponding choice 
    }

    // //if selected optionBtn is true, display: correct!
    //     if 

    optionBtns.addEventListener('click', contQuiz);
    function contQuiz() {
        console.log('move to Q2')
    }

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


