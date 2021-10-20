/*-------------------------------- Constants --------------------------------*/
import {popCultureQuizQ, popCultureQuizA, trueOrFalseQuizQ, trueOrFalseQuizA, funnyTriviaQuizQ,
  funnyTriviaQuizA, brandSlogansQuizQ, brandSlogansQuizA } from "../data/quizzes.js"

/*--------------------------------- Variables -------------------------------*/
let trueOrFalse 
let funnyTrivia 
let brandSlogans
let random
let question
let questionIdx
// let popcultureQuiz

/*------------------------ Cached Element References ------------------------*/
const popcultureQuizBtn = document.querySelector('#popCulture')
const trueOrFalseQuizBtn = document.querySelector('#trueOrFalse')
const funnyTriviaQuizBtn = document.querySelector('#funnyTrivia')
const brandSlogansQuizBtn = document.querySelector('#brandSlogans')
const randomQuizBtn = document.querySelector('#randomQuiz')
const controlButtonsEl = document.querySelector('.control-buttons')
const quizContainerEl = document.querySelector('#quiz-container')
const questionContainerEl = document.querySelector('#question-container')
const question1El = document.querySelector('#question1')
const question2El = document.querySelector('#question2')
const question3El = document.querySelector('#question3')
const question4El = document.querySelector('#question4')
const question5El = document.querySelector('#question5')
const btnEl = document.querySelector('.btn')

/*----------------------------- Event Listeners -----------------------------*/
popcultureQuizBtn.addEventListener('click', popCultureQuiz)
trueOrFalseQuizBtn.addEventListener('click', trueOrFalseQuiz)
funnyTriviaQuizBtn.addEventListener('click', funnyTriviaQuiz)
brandSlogansQuizBtn.addEventListener('click', brandSlogansQuiz)
randomQuizBtn.addEventListener('click', randomQuiz)
// startBtnEl.addEventListener('click', init)
controlButtonsEl.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/
init ()

function init() {
  quizContainerEl.classList.add('hide')
  controlButtonsEl.classList.add('hide')
}

function popCultureQuiz() {
  quizContainerEl.classList.remove('hide')
  controlButtonsEl.classList.remove('hide')
    for (let i = 0; i < popCultureQuizQ.length; i++){
      let question1 = popCultureQuizQ[0]
      let question2 = popCultureQuizQ[1]
      let question3 = popCultureQuizQ[2]
      let question4 = popCultureQuizQ[3]
      let question5 = popCultureQuizQ[4]
      question1El.innerText = question1
      question2El.innerText = question2
      question3El.innerText = question3
      question4El.innerText = question4
      question5El.innerText = question5
}
}

function trueOrFalseQuiz() {
  quizContainerEl.classList.remove('hide')
  controlButtonsEl.classList.remove('hide')
  for (let i = 0; i < trueOrFalseQuizQ.length; i++){
    let question1 = trueOrFalseQuizQ[0]
    let question2 = trueOrFalseQuizQ[1]
    let question3 = trueOrFalseQuizQ[2]
    let question4 = trueOrFalseQuizQ[3]
    let question5 = trueOrFalseQuizQ[4]
    question1El.innerText = question1
    question2El.innerText = question2
    question3El.innerText = question3
    question4El.innerText = question4
    question5El.innerText = question5
}
}

function funnyTriviaQuiz() {
  quizContainerEl.classList.remove('hide')
  controlButtonsEl.classList.remove('hide')
  for (let i = 0; i < funnyTriviaQuizQ.length; i++){
    let question1 = funnyTriviaQuizQ[0]
    let question2 = funnyTriviaQuizQ[1]
    let question3 = funnyTriviaQuizQ[2]
    let question4 = funnyTriviaQuizQ[3]
    let question5 = funnyTriviaQuizQ[4]
    question1El.innerText = question1
    question2El.innerText = question2
    question3El.innerText = question3
    question4El.innerText = question4
    question5El.innerText = question5
}
}

function brandSlogansQuiz() {
  quizContainerEl.classList.remove('hide')
  controlButtonsEl.classList.remove('hide')
  for (let i = 0; i < brandSlogansQuizQ.length; i++){
    let question1 = brandSlogansQuizQ[0]
    let question2 = brandSlogansQuizQ[1]
    let question3 = brandSlogansQuizQ[2]
    let question4 = brandSlogansQuizQ[3]
    let question5 = brandSlogansQuizQ[4]
    question1El.innerText = question1
    question2El.innerText = question2
    question3El.innerText = question3
    question4El.innerText = question4
    question5El.innerText = question5
}
}

function randomQuiz() {
  quizContainerEl.classList.remove('hide')
  controlButtonsEl.classList.remove('hide')
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