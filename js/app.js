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

    question4: "All of these are The Beatles song titles except: ?",
    answerChoices: ['Hey Jude', 'Let It Be', "Don't stop me now", "Hello, Goodbye"],
    rightAnswer: 2,
    points: 3,

    question5: " In the iconic titanic meme, Rose says: It's been blank years. What is the blank?",
    answerChoices: ["89", "47", "74", "84"],
    rightAnswer: 3,
    points: 3
  }
}

function trueOrFalse() {
  trueOrFalseQuiz = {
    question1: "In Scotland, the unicorn is their national animal.",
    answerChoices: ['True', 'False'],
    rightAnswer: 0,
    points: 3,

    question2: "The Great Wall of China is visibe from space",
    answerChoices: ['True', 'False'],
    rightAnswer: 1,
    points: 3,

    question3: "An octopus has three hearts",
    answerChoices: ['True', 'False'],
    rightAnswer: 0,
    points: 3,

    question4: "In a regular deck of cards, all kings have a mustache.",
    answerChoices: ['True', 'False'],
    rightAnswer: 1,
    points: 3,

    question5: "Among the letters of the alphabet, only the letter J is not included in the periodic table.",
    answerChoices: ['True', 'False'],
    rightAnswer: 0,
    points: 3
  }
}





