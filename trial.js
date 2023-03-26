
//CHECKPOINT!! GETS ME FROM: intro -> Q1 -> Q2 
//trying to figure out how to make it go to the other questions
function showQuestions() {
    //questions: 
    question.textContent = quizQuestions[0]['question'] //change to show the first question and it's options.
    //options: index i
    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].textContent = (quizQuestions[0]['options'][i][0]);  //for each optionBtn(0-3), change text to coresponding choice 
        optionBtns[i].addEventListener('click', contQuiz)   //Youssef from askBCS  <--add eventListener to SINGLE ITEM in the optionBtns(ARRAY). eventListeners canNOT be added to an array!! 
    }
}

function contQuiz() {
    question.textContent = quizQuestions[1]['question']
    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].textContent = (quizQuestions[1]['options'][i][0]);
    }
}

