/*-------------------------------- Constants --------------------------------*/
import {popCultureQuizQ, popCultureQuizA, trueOrFalseQuizQ, trueOrFalseQuizA, funnyTriviaQuizQ,
  funnyTriviaQuizA, brandSlogansQuizQ, brandSlogansQuizA, correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4 } from "../data/quizzes.js"

/*--------------------------------- Variables -------------------------------*/
let index = 1
let choice0 
let choice1 
let choice2 
let choice3 
let popcultureBool
let truefalseBool
let funnytriviaBool 
let brandslogansBool 
/*------------------------ Cached Element References ------------------------*/
const popcultureQuizBtn = document.querySelector('#popCulture')
const trueOrFalseQuizBtn = document.querySelector('#trueOrFalse')
const funnyTriviaQuizBtn = document.querySelector('#funnyTrivia')
const brandSlogansQuizBtn = document.querySelector('#brandSlogans')
const randomQuizBtn = document.querySelector('#randomQuiz')
const controlButtonsEl = document.querySelector('.control-buttons')
const quizContainerEl = document.querySelector('#quiz-container')
const nextEl = document.querySelector('#next')
// const questionContainerEl = document.querySelector('#question-container')
const question1El = document.querySelector('#question')
// const question2El = document.querySelector('#question2')
// const question3El = document.querySelector('#question3')
// const question4El = document.querySelector('#question4')
// const question5El = document.querySelector('#question5')
const choice0El = document.getElementById('choice0')
const choice1El = document.querySelector('#choice1')
const choice2El = document.querySelector('#choice2')
const choice3El = document.querySelector('#choice3')

const btnEl = document.querySelector('.btn')

/*----------------------------- Event Listeners -----------------------------*/
popcultureQuizBtn.addEventListener('click', popCultureQuiz)
trueOrFalseQuizBtn.addEventListener('click', trueOrFalseQuiz)
funnyTriviaQuizBtn.addEventListener('click', funnyTriviaQuiz)
brandSlogansQuizBtn.addEventListener('click', brandSlogansQuiz)
randomQuizBtn.addEventListener('click', randomQuiz)

controlButtonsEl.addEventListener('click', init)
nextEl.addEventListener('click', nextBtn)
choice0El.addEventListener('click', handleAnswer1)
choice1El.addEventListener('click', handleAnswer2)
choice2El.addEventListener('click', handleAnswer3)
choice3El.addEventListener('click', handleAnswer4)
// choice4El.addEventListener('click', handleClick)
// choice5El.addEventListener('click', handleClick)
// choice6El.addEventListener('click', handleClick)
// choice7El.addEventListener('click', handleClick)
// choice8El.addEventListener('click', handleClick)
// choice9El.addEventListener('click', handleClick)
// choice10El.addEventListener('click', handleClick)
// choice11El.addEventListener('click', handleClick)
// choice12El.addEventListener('click', handleClick)
// choice13El.addEventListener('click', handleClick)
// choice14El.addEventListener('click', handleClick)
// choice15El.addEventListener('click', handleClick)
// choice16El.addEventListener('click', handleClick)
// choice17El.addEventListener('click', handleClick)
// choice18El.addEventListener('click', handleClick)
// choice19El.addEventListener('click', handleClick)
/*-------------------------------- Functions --------------------------------*/
init ()

function init() {
  quizContainerEl.classList.add('hide')
  controlButtonsEl.classList.add('hide')
  popcultureBool = false
  truefalseBool = false
  funnytriviaBool = false
  brandslogansBool = false
}

function nextBtn() {
  if(index===4){
    nextEl.classList.add('hide')
  }
//Implements the next question when the next button is clicked 

  
  let answer1 
  let answer2 
  let answer3 
  let answer4 
  let question
  
  
  // Implements the next answer choices
  if(popcultureBool){
    question = popCultureQuizQ[index]
    question1El.innerText = question

      answer1 = popCultureQuizA[index][0]
      answer2 = popCultureQuizA[index][1]
      answer3 = popCultureQuizA[index][2]
      answer4 = popCultureQuizA[index][3]
  }
  else if(truefalseBool){
    question = trueOrFalseQuizQ[index]
    question1El.innerText = question
    
    answer1 = trueOrFalseQuizA[index][0]
    answer2 = trueOrFalseQuizA[index][1]
    answer3 = trueOrFalseQuizA[index][2]
    answer4 = trueOrFalseQuizA[index][3]
}
else if(funnytriviaBool=== true){
  question = funnyTriviaQuizQ[index]
  question1El.innerText = question
  answer1 = funnyTriviaQuizA[index][0]
  answer2 = funnyTriviaQuizA[index][1]
  answer3 = funnyTriviaQuizA[index][2]
  answer4 = funnyTriviaQuizA[index][3]
}
else if(brandslogansBool=== true){
  question = brandSlogansQuizQ[index]
  question1El.innerText = question
  answer1 = brandSlogansQuizA[index][0]
  answer2 = brandSlogansQuizA[index][1]
  answer3 = brandSlogansQuizA[index][2]
  answer4 = brandSlogansQuizA[index][3]
}


choice0El.innerText = answer1
choice1El.innerText = answer2
choice2El.innerText = answer3
choice3El.innerText = answer4

index ++
}



function popCultureQuiz() {
  popcultureBool = true
  quizContainerEl.classList.remove('hide')
  controlButtonsEl.classList.remove('hide')
  
  //display only first question
  let question = popCultureQuizQ[0]
  question1El.innerText = question

  //display only first answer choices

      choice0El.innerText = popCultureQuizA[0][0]
      choice1El.innerText = popCultureQuizA[0][1]
      choice2El.innerText= popCultureQuizA[0][2]
      choice3El.innerText = popCultureQuizA[0][3]


}



function trueOrFalseQuiz() {
  quizContainerEl.classList.remove('hide')
  controlButtonsEl.classList.remove('hide')
  truefalseBool= true

    //display only first question
    let question = trueOrFalseQuizQ[0]
    question1El.innerText = question
  
    //display only first answer choices
  
        choice0El.innerText = trueOrFalseQuizA[0][0]
        choice1El.innerText = trueOrFalseQuizA[0][1]
        choice2El.innerText= trueOrFalseQuizA[0][2]
        choice3El.innerText = trueOrFalseQuizA[0][3]

      }
  
function funnyTriviaQuiz() {
  quizContainerEl.classList.remove('hide')
  controlButtonsEl.classList.remove('hide')
  funnytriviaBool= true
    //display only first question
    let question = funnyTriviaQuizQ[0]
    question1El.innerText = question
  
    //display only first answer choices
  
        choice0El.innerText = funnyTriviaQuizA[0][0]
        choice1El.innerText = funnyTriviaQuizA[0][1]
        choice2El.innerText= funnyTriviaQuizA[0][2]
        choice3El.innerText = funnyTriviaQuizA[0][3]

}

function brandSlogansQuiz() {
  quizContainerEl.classList.remove('hide')
  controlButtonsEl.classList.remove('hide')
  brandslogansBool= true
    //display only first question
    let question = brandSlogansQuizQ[0]
    question1El.innerText = question
  
    //display only first answer choices
  
        choice0El.innerText = brandSlogansQuizA[0][0]
        choice1El.innerText = brandSlogansQuizA[0][1]
        choice2El.innerText= brandSlogansQuizA[0][2]
        choice3El.innerText = brandSlogansQuizA[0][3]

}



function randomQuiz() {
  quizContainerEl.classList.remove('hide')
  controlButtonsEl.classList.remove('hide')
 
    // //display only first question
    // let question = popCultureQuizQ[0]
    // question1El.innerText = question
  
    // //display only first answer choices
  
    //     choice0El.innerText = popCultureQuizA[0][0]
    //     choice1El.innerText = popCultureQuizA[0][1]
    //     choice2El.innerText= popCultureQuizA[0][2]
    //     choice3El.innerText = popCultureQuizA[0][3]
}








function handleAnswer1(){
  //checks if it is right

 if (choice1El.innerText=== correctAnswer1[index]) {
   choice1El.style.backgroundcolor = 'green'
 } 
 else{
   choice1El.style.backgroundcolor = 'red'
 }

}

function handleAnswer2(){
 //checks if it is right

 if (choice2El.innerText=== correctAnswer1[index]) {
   choice2El.style.backgroundcolor = 'green'
 } 
 else{
   choice2El.style.backgroundcolor = 'red'
 }

}

function handleAnswer3(){
 //checks if it is right

 if (choice3El.innerText=== correctAnswer1[index]) {
   choice3El.style.backgroundcolor = 'green'
 } 
 else{
   choice3El.style.backgroundcolor = 'red'
 }

}

function handleAnswer4(){
 //checks if it is right

 if (choice4El.innerText=== correctAnswer1[index]) {
   choice4El.style.backgroundcolor = 'green'
 } 
 else{
   choice4El.style.backgroundcolor = 'red'
 }

}











// function popRightAnswerQ1() {
//   for(let i = 0; i < popCultureQuizA.length; i++) {
//     for (let j = 0; j <popCultureQuizA[i].length; j++) {
//       if (choice2 === correctAnswer1[index]) {
//         choice2El.style.color = 'green'
//         choice0El.style.color = 'red'
//         choice1El.style.color = 'red'
//         choice3El.style.color = 'red'
//       } 
//     }
//   }
// }
// function popRightAnswerQ2() {
//   for(let i = 0; i < popCultureQuizA.length; i++) {
//     for (let j = 0; j <popCultureQuizA[i].length; j++) {
//       if (choice5 === correctAnswer1[1]) {
//         choice5El.style.color = 'green'
//         choice4El.style.color = 'red'
//         choice6El.style.color = 'red'
//         choice7El.style.color = 'red'
//       } 
//     }
//   }
// }

  
