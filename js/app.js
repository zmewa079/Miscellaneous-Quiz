/*-------------------------------- Constants --------------------------------*/
import {popCultureQuizQ, popCultureQuizA, trueOrFalseQuizQ, trueOrFalseQuizA, funnyTriviaQuizQ,
  funnyTriviaQuizA, brandSlogansQuizQ, brandSlogansQuizA, correctAnswer1} from "../data/quizzes.js"

/*--------------------------------- Variables -------------------------------*/
let index = 1
let topicNum
let choice0 
let choice1 
let choice2 
let choice3 
let popcultureBool
let truefalseBool
let funnytriviaBool 
let brandslogansBool 
let answered
let timeLeft = 10;
/*------------------------ Cached Element References ------------------------*/
const resetBtn = document.querySelector('#reset')
const popcultureQuizBtn = document.querySelector('#popCulture')
const trueOrFalseQuizBtn = document.querySelector('#trueOrFalse')
const funnyTriviaQuizBtn = document.querySelector('#funnyTrivia')
const brandSlogansQuizBtn = document.querySelector('#brandSlogans')
// const randomQuizBtn = document.querySelector('#randomQuiz')
const controlButtonsEl = document.querySelector('.control-buttons')
const quizContainerEl = document.querySelector('#quiz-container')
const nextEl = document.querySelector('#next')
const question1El = document.querySelector('#question')
const choice0El = document.getElementById('choice0')
const choice1El = document.querySelector('#choice1')
const choice2El = document.querySelector('#choice2')
const choice3El = document.querySelector('#choice3')
const btnEl = document.querySelector('.btn')
let countdownEl = document.getElementById('countdown')

/*----------------------------- Event Listeners -----------------------------*/
popcultureQuizBtn.addEventListener('click', popCultureQuiz)
trueOrFalseQuizBtn.addEventListener('click', trueOrFalseQuiz)
funnyTriviaQuizBtn.addEventListener('click', funnyTriviaQuiz)
brandSlogansQuizBtn.addEventListener('click', brandSlogansQuiz)
// randomQuizBtn.addEventListener('click', randomQuiz)
resetBtn.addEventListener('click', init)
controlButtonsEl.addEventListener('click', init)
nextEl.addEventListener('click', nextBtn)
choice0El.addEventListener('click', handleAnswer1)
choice1El.addEventListener('click', handleAnswer2)
choice2El.addEventListener('click', handleAnswer3)
choice3El.addEventListener('click', handleAnswer4)
/*-------------------------------- Functions --------------------------------*/
init ()

function init() {
  quizContainerEl.classList.add('hide')
  controlButtonsEl.classList.add('hide')
  popcultureBool = false
  truefalseBool = false
  funnytriviaBool = false
  brandslogansBool = false
  choice0El.style.color = 'black'
  choice1El.style.color = 'black'
  choice2El.style.color = 'black'
  choice3El.style.color = 'black'
  answered = false

  document.body.style.backgroundColor = '#877491'

  choice2El.classList.remove('hide')
  choice3El.classList.remove('hide') 

  popcultureQuizBtn.classList.remove('hide')
  trueOrFalseQuizBtn.classList.remove('hide')
  funnyTriviaQuizBtn.classList.remove('hide')
  brandSlogansQuizBtn.classList.remove('hide')
}

function nextBtn() {

  choice0El.style.color = 'black'
  choice1El.style.color = 'black'
  choice2El.style.color = 'black'
  choice3El.style.color = 'black'
  answered = false

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
    if(popcultureBool) {
      question = popCultureQuizQ[index]
      question1El.innerText = question

      answer1 = popCultureQuizA[index][0]
      answer2 = popCultureQuizA[index][1]
      answer3 = popCultureQuizA[index][2]
      answer4 = popCultureQuizA[index][3]
    }
    else if(truefalseBool) {
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
  document.body.style.backgroundColor = '#8c778f' 
  topicNum = 0
  popcultureBool = true
  quizContainerEl.classList.remove('hide')
  controlButtonsEl.classList.remove('hide')
  
  //display only first question
  let question = popCultureQuizQ[0]
  question1El.innerText = question

  //display only first answer choices

  choice0El.innerText = popCultureQuizA[0][0]
  choice1El.innerText = popCultureQuizA[0][1]
  choice2El.innerText = popCultureQuizA[0][2]
  choice3El.innerText = popCultureQuizA[0][3]

  popcultureQuizBtn.classList.add('hide')
  trueOrFalseQuizBtn.classList.add('hide')
  funnyTriviaQuizBtn.classList.add('hide')
  brandSlogansQuizBtn.classList.add('hide')

  let timer = setInterval(function() {
    countdownEl.textContent = timeLeft 
    timeLeft -= 1;
      if (timeLeft < 0) {
      countdownEl.textContent = 'Times Up!!'
    }
  }, 1000)
}

function trueOrFalseQuiz() {
  document.body.style.backgroundColor = '#736b85'
  topicNum = 1
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
  
  //hide the two other choices that are ot needed for this quiz
  
  choice2El.classList.add('hide')
  choice3El.classList.add('hide')

  popcultureQuizBtn.classList.add('hide')
  trueOrFalseQuizBtn.classList.add('hide')
  funnyTriviaQuizBtn.classList.add('hide')
  brandSlogansQuizBtn.classList.add('hide')

  let timer = setInterval(function() {
    countdownEl.textContent = timeLeft 
    timeLeft -= 1;
      if (timeLeft < 0) {
      countdownEl.textContent = 'Times Up!!'
    }
  }, 1000)
}
  
function funnyTriviaQuiz() {
  document.body.style.backgroundColor = '#725875'
  topicNum = 2
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

  popcultureQuizBtn.classList.add('hide')
  trueOrFalseQuizBtn.classList.add('hide')
  funnyTriviaQuizBtn.classList.add('hide')
  brandSlogansQuizBtn.classList.add('hide')

  let timer = setInterval(function() {
    countdownEl.textContent = timeLeft 
    timeLeft -= 1;
      if (timeLeft < 0) {
      countdownEl.textContent = 'Times Up!!'
    }
  }, 1000)
}

function brandSlogansQuiz() {
  document.body.style.backgroundColor = '#83748f'
  topicNum = 3
  quizContainerEl.classList.remove('hide')
  controlButtonsEl.classList.remove('hide')
  brandslogansBool= true
    
  //display only first question
    
  let question = brandSlogansQuizQ[0]
  question1El.innerText = question
  
  //display only first answer choices
  
  choice0El.innerText = brandSlogansQuizA[0][0]
  choice1El.innerText = brandSlogansQuizA[0][1]
  choice2El.innerText = brandSlogansQuizA[0][2]
  choice3El.innerText = brandSlogansQuizA[0][3]

  popcultureQuizBtn.classList.add('hide')
  trueOrFalseQuizBtn.classList.add('hide')
  funnyTriviaQuizBtn.classList.add('hide')
  brandSlogansQuizBtn.classList.add('hide')

  let timer = setInterval(function() {
    countdownEl.textContent = timeLeft 
    timeLeft -= 1;
      if (timeLeft < 0) {
      countdownEl.textContent = 'Times Up!!'
    }
  }, 1000)
}

function handleAnswer1() {
  //checks which answer choice is correct
  if (choice0El.innerText=== (correctAnswer1[topicNum][index-1])) {
    choice0El.style.color = 'green'
    answered = true
  } else if (answered === false) {
    choice0El.style.color = 'red'
  }
}

function handleAnswer2(){
 //checks which answer choice is correct
  if (choice1El.innerText=== (correctAnswer1[topicNum][index-1])) {
    choice1El.style.color = 'green'
    answered = true
  } else if (answered === false) {
  choice1El.style.color = 'red'
  }
}

function handleAnswer3(){
 //checks which answer choice is correct
  if (choice2El.innerText=== (correctAnswer1[topicNum][index-1])) {
    choice2El.style.color = 'green'
    answered = true
    } else if (answered === false) {
    choice2El.style.color = 'red'
  }
}

function handleAnswer4(){
 //checks which answer choice is correct
  if (choice3El.innerText=== (correctAnswer1[topicNum][index-1])) {
    choice3El.style.color = 'green'
    answered = true
  } else if (answered === false) {
  choice3El.style.color = 'red'
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

  
