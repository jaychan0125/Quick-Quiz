


//questions in quiz are in an ARRAY, each question is an Object with property: valuesArray. the correct value is true. 
var quizQuestions = [
    {
        qNum: 1,
        question: 'Who is my fave pokemon?',
        choices: [['raichu', true], ['towel', false], ['towel', false], ['texture', false]]
        // opA: ['raichu', true],
        // opB: ['towel', false],
        // opC: ['towel', false],
        // opD: ['texture', false]
    },
    {
        qNum: 2,
        question: 'How is your day?',
        choices: [['raichu', true], ['towel', false], ['towel', false], ['texture', false]]
        // opA: ['ok', false],
        // opB: ['its going', true],
        // opC: ['help', false],
        // opD: ['omg', false]
    },
    {
        qNum: 3,
        question: '',
        choices: [['nuh-uh', false], ['shake-head', false], ['mhm', true], ['neh', false]]
        // opA: ['raccy', false],
        // opB: ['', true],
        // opC: ['', false],
        // opD: ['', false]
    },
    {
        qNum: 4,
        question: '',
        choices: [['nuh', false], ['yep', true], ['eh', false], ['bleh', false]]
        // opA: ['owl', false],
        // opB: ['', true],
        // opC: ['', false],
        // opD: ['', false]
    },
    {
        qNum: 5,
        question: '',
        choices: [['yes', true], ['no', false], ['nah', false], ['nope', false]]
        // opA: ['tilly', false],
        // opB: ['', true],
        // opC: ['', false],
        // opD: ['', false]
    }
]


var startButton = document.getElementById('start');
var question = document.getElementById('question')
var option = document.querySelectorAll('.option');
var optionA = document.getElementById('optionA');
var optionB = document.getElementById('optionB');
var optionC = document.getElementById('optionC');
var optionD = document.getElementById('optionD');
//when 'start'button is clicked, change the questions & options 
// startButton.addEventListener('click', example);

// console.log(option);  //returns as an array

//press button:  changes Question,  and Answers 
console.log(question.textContent);
console.log(quizQuestions[0].question)

startButton.addEventListener('click', question1)

function question1() {
    question.textContent = quizQuestions[0].question;
    for (i = 0; i < option.length; i++) {
        option[i].textContent = quizQuestions[i].choices[i][0];
        newText = option[i].textContent;
    }    
    // optionA.textContent = quizQuestions[0].opA[0];
    // optionB.textContent = quizQuestions[0].opB[0];
    // optionC.textContent = quizQuestions[0].opC[0];
    // optionD.textContent = quizQuestions[0].opD[0];
    //make a function that:  takes the 'option'array from HTML, and replaces each one with op
}

// for (i = 0; i < option.length; i++) {
//     // console.log(option[i]);
//     // console.log(quizQuestions[i].choices[i][0]);
//     option[i].textContent = quizQuestions[i].choices[i][0];
//     newText = option[i].textContent;
//     console.log(newText);
// }



//when chose an option, check that the chosen button contains correct answer 'true'




//trying to get to the next question like this doesn't work because it overrides the button and goes straight to this
/* startButton.addEventListener('click', question2)
function question2() {
    console.log(question.textContent);
    console.log(quizQuestions[1]['question'])
    question.textContent = quizQuestions[1].question;
    optionA.textContent = quizQuestions[1].opA[0];
    optionB.textContent = quizQuestions[1].opB[0];
    optionC.textContent = quizQuestions[1].opC[0];
    optionD.textContent = quizQuestions[1].opD[0];
}*/























//here, trying to work to select all the .option from HTML and change them into the op I have in my object

// for (var i = 0; i < option.length; i++) {
//     console.log(option[i].innerText);
//     for (var j = 0; j < quizQuestions.length; j++) {
//     option.innerText = quizQuestions[j]['opA'][0];

//     }
// }

// console.log(optionA);
// optionA.innerText = quizQuestions[0]['opA'][0];
// console.log(optionA)

// startButton.addEventListener('click', changeA)
// function changeA() {
//     console.log(optionA);
//     for (i = 0; i < quizQuestions.length; i++) {
//         newOpA = quizQuestions[i]['opA'][0];
//         console.log(newOpA);
//         optionA.textContent = newOpA;
//     }
// }


// function example() {
//     //want to go through every object in the array
//     for (var i = 0; i < quizQuestions.length; i++) {
//         console.log(quizQuestions[i]['opA'][0]);
//         //want to replace parts of my HTML with the values of object in my array
//         option[i].innerText = quizQuestions[i]['opA'][0];
//     }
// };

//want to move to next object every time you click an option



//want to check if selected option was correct(true)




// var startButton = document.getElementById('start');
// var question = document.getElementById('question');
// var option = document.querySelectorAll('.option')
// var timer = document.getElementById('timer')

// startButton.addEventListener('click', timerStart)
// //setup timer

// var timeLeft = 10; //60seconds
// var countdown = setInterval(timerStart, 1000);  //interval of 1second
// function timerStart() {
//     timeLeft--;
//     timer.innerText = `${timeLeft} sec`;

//     if (timeLeft === 0) {
//         clearInterval(countdown);
//     }
// } 


// startButton.addEventListener('click', question1);

// function question1() {
//     for (i = 0; i < quizQuestions.length; i++) {
//     question.textContent = quizQuestions[i].question;
//     }
//     for (i = 0; i < option.length; i++) {
//         option[i].textContent = quizQuestions[i].choices[i][0];
//         newText = option[i].textContent;
//     }    

// }
