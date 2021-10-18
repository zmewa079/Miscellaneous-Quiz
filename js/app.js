/*-------------------------------- Constants --------------------------------*/


/*--------------------------------- Variables -------------------------------*/
let quizButtons
let trueOrFalse 
let funnyTrivia 
let brandSlogans
let randomQuiz
let question
let pcQuiz
/*------------------------ Cached Element References ------------------------*/
const popcultureQuizBtn = document.querySelector('#popCulture')
const trueOrFalseQuizBtn = document.querySelector('#trueOrFalse')
const funnyTriviaQuizBtn = document.querySelector('#funnyTrivia')
const brandSlogansQuiz = document.querySelector('#brandSlogans')
const randomQuizBtn = document.querySelector('#randomQuiz')



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
function quiz() {
  randomQuiz = [popcultureQuizBtn, trueOrFalseQuizBtn, funnyTriviaQuizBtn, brandSlogansQuiz]
  
}

function popCulture() {
  pcQuiz = {
    question1: "How many Harry Potter films have been made?",
    answerChoices: ['seven', 'nine', 'eight', 'six' ],
    rightAnswer: 2,
    points: 3,

    question2: "What day is Star Wars day?",
    answerChoices: ['October 3', 'May 4', 'January 9', 'July 4'],
    rightAnswer: 1,
    points: 3,

    question3: "Who was the main character in Lord of the Rings?",
    answerChoices: ["Gandalf", "Frodo", "Smeagol", "Bilbo Baggins"],
    rightAnswer: 1,
    points: 3,

    // question4: 
    // answerChoices:
    // rightAnswer:
    // points:
  }
}



