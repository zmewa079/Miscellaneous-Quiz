/*-------------------------------- Constants --------------------------------*/
import {getpopCultureQuiz, gettrueOrFalseQuiz, getfunnyTriviaQuiz,getbrandSlogansQuiz} from "../data/quizzes.js"

/*--------------------------------- Variables -------------------------------*/
// let trueOrFalse 
// let funnyTrivia 
// let brandSlogans
// let randomQuiz
// let question
// let popcultureQuiz

/*------------------------ Cached Element References ------------------------*/
const popcultureQuizBtn = document.querySelector('#popCulture')
const trueOrFalseQuizBtn = document.querySelector('#trueOrFalse')
const funnyTriviaQuizBtn = document.querySelector('#funnyTrivia')
const brandSlogansQuiz = document.querySelector('#brandSlogans')
const randomQuizBtn = document.querySelector('#randomQuiz')

/*----------------------------- Event Listeners -----------------------------*/
popcultureQuizBtn.addEventListener('click', createQuiz)
trueOrFalseQuizBtn.addEventListener('click', createQuiz)
funnyTriviaQuizBtn.addEventListener('click', createQuiz)
brandSlogansQuiz.addEventListener('click', createQuiz)
randomQuizBtn.addEventListener('click', handleclick)


/*-------------------------------- Functions --------------------------------*/
function createQuiz(evt) {
  if (evt.target.id === 'popCulture') {
    return getpopCultureQuiz
  } else if(evt.target.id === 'trueOrFalse') {
    return gettrueOrFalseQuiz
  } else if(evt.target.id === 'funnyTrivia') {
    return getfunnyTriviaQuiz
  } else if(evt.target.id === 'brandSlogans') {
    return getbrandSlogansQuiz
  }
}





// function quiz() {
//   randomQuiz = [popcultureQuizBtn, trueOrFalseQuizBtn, funnyTriviaQuizBtn, brandSlogansQuiz]
// }

function renderpopCultureQuiz() {
  
}

function handleclick(evt) {
    
  }
