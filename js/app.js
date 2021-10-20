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
const choice0El = document.querySelector('#choice0')
const choice1El = document.querySelector('#choice1')
const choice2El = document.querySelector('#choice2')
const choice3El = document.querySelector('#choice3')
const choice4El = document.querySelector('#choice4')
const choice5El = document.querySelector('#choice5')
const choice6El = document.querySelector('#choice6')
const choice7El = document.querySelector('#choice7')
const choice8El = document.querySelector('#choice8')
const choice9El = document.querySelector('#choice9')
const choice10El = document.querySelector('#choice10')
const choice11El = document.querySelector('#choice11')
const choice12El = document.querySelector('#choice12')
const choice13El = document.querySelector('#choice13')
const choice14El = document.querySelector('#choice14')
const choice15El = document.querySelector('#choice15')
const choice16El = document.querySelector('#choice16')
const choice17El = document.querySelector('#choice17')
const choice18El = document.querySelector('#choice18')
const choice19El = document.querySelector('#choice19')
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
    for(let i = 0; i < popCultureQuizA.length; i++) {
      for (let j = 0; j <popCultureQuizA[i].length; j++) {
        // console.log(popCultureQuizA[i][j])
        let choice0 = popCultureQuizA[0][0]
        let choice1 = popCultureQuizA[0][1]
        let choice2= popCultureQuizA[0][2]
        let choice3 = popCultureQuizA[0][3]
        let choice4 = popCultureQuizA[1][0]
        let choice5 = popCultureQuizA[1][1]
        let choice6 = popCultureQuizA[1][2]
        let choice7 = popCultureQuizA[1][3]
        let choice8 = popCultureQuizA[2][0]
        let choice9 = popCultureQuizA[2][1]
        let choice10 = popCultureQuizA[2][2]
        let choice11 = popCultureQuizA[2][3]
        let choice12 = popCultureQuizA[3][0]
        let choice13 = popCultureQuizA[3][1]
        let choice14 = popCultureQuizA[3][2]
        let choice15 = popCultureQuizA[3][3]
        let choice16 = popCultureQuizA[4][0]
        let choice17 = popCultureQuizA[4][1]
        let choice18 = popCultureQuizA[4][2]
        let choice19 = popCultureQuizA[4][3]
        choice0El.innerText = choice0
        choice1El.innerText = choice1
        choice2El.innerText = choice2
        choice3El.innerText = choice3
        choice4El.innerText = choice4
        choice5El.innerText = choice5
        choice6El.innerText = choice6
        choice7El.innerText = choice7
        choice8El.innerText = choice8
        choice9El.innerText = choice9
        choice10El.innerText = choice10
        choice11El.innerText = choice11
        choice12El.innerText = choice12
        choice13El.innerText = choice13
        choice14El.innerText = choice14
        choice15El.innerText = choice15
        choice16El.innerText = choice16
        choice17El.innerText = choice17
        choice18El.innerText = choice18
        choice19El.innerText = choice19
      }
    }
}


function trueOrFalseQuiz() {
  quizContainerEl.classList.remove('hide')
  controlButtonsEl.classList.remove('hide')
    for (let i = 0; i < trueOrFalseQuizQ.length; i++) {
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
    for(let i = 0; i < trueOrFalseQuizA.length; i++) {
      for (let j = 0; j <trueOrFalseQuizA[i].length; j++) {
        // console.log(popCultureQuizA[i][j])
        let choice0 = trueOrFalseQuizA[0][0]
        let choice1 = trueOrFalseQuizA[0][1]
        let choice4 = trueOrFalseQuizA[2][0]
        let choice5 = trueOrFalseQuizA[2][1]
        let choice8 = trueOrFalseQuizA[4][0]
        let choice9 = trueOrFalseQuizA[4][1]
        let choice12 = trueOrFalseQuizA[3][0]
        let choice13 = trueOrFalseQuizA[3][1]
        let choice16 = trueOrFalseQuizA[4][0]
        let choice17 = trueOrFalseQuizA[4][1]
  //display the answer choices       
        choice0El.innerText = choice0
        choice1El.innerText = choice1       
        choice4El.innerText = choice4
        choice5El.innerText = choice5        
        choice8El.innerText = choice8
        choice9El.innerText = choice9        
        choice12El.innerText = choice12
        choice13El.innerText = choice13        
        choice16El.innerText = choice16
        choice17El.innerText = choice17
  //hide the two extra buttons that will not have a choice to display
        choice2El.classList.add('hide')
        choice3El.classList.add('hide')
        choice6El.classList.add('hide')
        choice7El.classList.add('hide')
        choice10El.classList.add('hide')
        choice11El.classList.add('hide')
        choice14El.classList.add('hide')
        choice15El.classList.add('hide')
        choice18El.classList.add('hide')
        choice19El.classList.add('hide')
      }
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
    for(let i = 0; i < funnyTriviaQuizA.length; i++) {
      for (let j = 0; j <funnyTriviaQuizA[i].length; j++) {
        // console.log(popCultureQuizA[i][j])
        let choice0 = funnyTriviaQuizA[0][0]
        let choice1 = funnyTriviaQuizA[0][1]
        let choice2= funnyTriviaQuizA[0][2]
        let choice3 = funnyTriviaQuizA[0][3]
        let choice4 = funnyTriviaQuizA[1][0]
        let choice5 = funnyTriviaQuizA[1][1]
        let choice6 = funnyTriviaQuizA[1][2]
        let choice7 = funnyTriviaQuizA[1][3]
        let choice8 = funnyTriviaQuizA[2][0]
        let choice9 = funnyTriviaQuizA[2][1]
        let choice10 = funnyTriviaQuizA[2][2]
        let choice11 = funnyTriviaQuizA[2][3]
        let choice12 = funnyTriviaQuizA[3][0]
        let choice13 = funnyTriviaQuizA[3][1]
        let choice14 = funnyTriviaQuizA[3][2]
        let choice15 = funnyTriviaQuizA[3][3]
        let choice16 = funnyTriviaQuizA[4][0]
        let choice17 = funnyTriviaQuizA[4][1]
        let choice18 = funnyTriviaQuizA[4][2]
        let choice19 = funnyTriviaQuizA[4][3]
        choice0El.innerText = choice0
        choice1El.innerText = choice1
        choice2El.innerText = choice2
        choice3El.innerText = choice3
        choice4El.innerText = choice4
        choice5El.innerText = choice5
        choice6El.innerText = choice6
        choice7El.innerText = choice7
        choice8El.innerText = choice8
        choice9El.innerText = choice9
        choice10El.innerText = choice10
        choice11El.innerText = choice11
        choice12El.innerText = choice12
        choice13El.innerText = choice13
        choice14El.innerText = choice14
        choice15El.innerText = choice15
        choice16El.innerText = choice16
        choice17El.innerText = choice17
        choice18El.innerText = choice18
        choice19El.innerText = choice19
      }
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
    for(let i = 0; i < brandSlogansQuizA.length; i++) {
      for (let j = 0; j <brandSlogansQuizA[i].length; j++) {
        // console.log(popCultureQuizA[i][j])
        let choice0 = brandSlogansQuizA[0][0]
        let choice1 = brandSlogansQuizA[0][1]
        let choice2= brandSlogansQuizA[0][2]
        let choice3 = brandSlogansQuizA[0][3]
        let choice4 = brandSlogansQuizA[1][0]
        let choice5 = brandSlogansQuizA[1][1]
        let choice6 = brandSlogansQuizA[1][2]
        let choice7 = brandSlogansQuizA[1][3]
        let choice8 = brandSlogansQuizA[2][0]
        let choice9 = brandSlogansQuizA[2][1]
        let choice10 = brandSlogansQuizA[2][2]
        let choice11 = brandSlogansQuizA[2][3]
        let choice12 = brandSlogansQuizA[3][0]
        let choice13 = brandSlogansQuizA[3][1]
        let choice14 = brandSlogansQuizA[3][2]
        let choice15 = brandSlogansQuizA[3][3]
        let choice16 = brandSlogansQuizA[4][0]
        let choice17 = brandSlogansQuizA[4][1]
        let choice18 = brandSlogansQuizA[4][2]
        let choice19 = brandSlogansQuizA[4][3]
        choice0El.innerText = choice0
        choice1El.innerText = choice1
        choice2El.innerText = choice2
        choice3El.innerText = choice3
        choice4El.innerText = choice4
        choice5El.innerText = choice5
        choice6El.innerText = choice6
        choice7El.innerText = choice7
        choice8El.innerText = choice8
        choice9El.innerText = choice9
        choice10El.innerText = choice10
        choice11El.innerText = choice11
        choice12El.innerText = choice12
        choice13El.innerText = choice13
        choice14El.innerText = choice14
        choice15El.innerText = choice15
        choice16El.innerText = choice16
        choice17El.innerText = choice17
        choice18El.innerText = choice18
        choice19El.innerText = choice19
      }
    }
}

// function randomQuiz() {
//   quizContainerEl.classList.remove('hide')
//   controlButtonsEl.classList.remove('hide')
//   let randomQuizArray = [popCultureQuiz(), trueOrFalseQuiz(), funnyTriviaQuiz(), brandSlogansQuiz()]
//   let random = randomQuizArray[Math.floor(Math.random()*randomQuizArray.length)]
//   for (let i = 0; i < 5; i++){
//     let question1 = random[0]
//     let question2 = random[1]
//     let question3 = random[2]
//     let question4 = random[3]
//     let question5 = random[4]
//     question1El.innerText = question1
//     question2El.innerText = question2
//     question3El.innerText = question3
//     question4El.innerText = question4
//     question5El.innerText = question5
// }

