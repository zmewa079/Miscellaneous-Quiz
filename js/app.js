/*-------------------------------- Constants --------------------------------*/
import {getpopCultureQuiz, gettrueOrFalseQuiz, getfunnyTriviaQuiz,getbrandSlogansQuiz} from "../data/quizzes.js"

/*--------------------------------- Variables -------------------------------*/
let trueOrFalse 
let funnyTrivia 
let brandSlogans
let randomQuiz
let question
// let popcultureQuiz

/*------------------------ Cached Element References ------------------------*/
const popcultureQuizBtn = document.querySelector('#popCulture')
const trueOrFalseQuizBtn = document.querySelector('#trueOrFalse')
const funnyTriviaQuizBtn = document.querySelector('#funnyTrivia')
const brandSlogansQuizBtn = document.querySelector('#brandSlogans')
const randomQuizBtn = document.querySelector('#randomQuiz')
const startBtnEl = document.querySelector('#start')
const submitBtnEl = document.querySelector('#submit')
const controlButtonsEl = document.querySelector('.buttons')
const quizContainerEl = document.querySelector('#quiz-container')
/*----------------------------- Event Listeners -----------------------------*/
popcultureQuizBtn.addEventListener('click', popCultureQuiz)
trueOrFalseQuizBtn.addEventListener('click', trueOrFalseQuiz)
funnyTriviaQuizBtn.addEventListener('click', funnyTriviaQuiz)
brandSlogansQuizBtn.addEventListener('click', brandSlogansQuiz)
// // randomQuizBtn.addEventListener('click', handleclick)
// startBtnEl.addEventListener('click', init)
// submitBtnEl.addEventListener('click', handleClick)
// controlButtonsEl.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/
init ()

function init() {
  quizContainerEl.classList.add('hide')
}

function popCultureQuiz() {
  quizContainerEl.classList.remove('hide')
}
function trueOrFalseQuiz() {

}
function funnyTriviaQuiz() {

}
function brandSlogansQuiz() {

}








// function handleClick() {
//   function createQuiz() {
//     popcultureQuiz.style.visibility ='hidden'
//   }
// }

// function renderQuiz() {
//   popcultureQuiz.createQuiz
// }
// showQuiz()

// function showQuiz() {
//   popcultureQuizBtn.createQuiz.innerHTML = "show quiz"
// }

// function showQuestion() {
//   popcultureQuizBtn.innerHTML=`show the elements` 
// }


// let randomQuizArray = [, trueOrFalseQuizBtn, funnyTriviaQuizBtn, brandSlogansQuiz]

// function getRandomQuiz() {
//   randomeQuizArray.forEach(element => {
    
//   });
// }

// function renderpopCultureQuiz() {
//   createQuiz
// }

// function handleclick(evt) {
    
//   }
// function createQuiz(evt) {
//   if ((evt.target.id) === 'popCulture') {
//     return getpopCultureQuiz
//   } else if(evt.target.id === 'trueOrFalse') {
//     return gettrueOrFalseQuiz
//   } else if(evt.target.id === 'funnyTrivia') {
//     return getfunnyTriviaQuiz
//   } else if(evt.target.id === 'brandSlogans') {
//     return getbrandSlogansQuiz
//   }