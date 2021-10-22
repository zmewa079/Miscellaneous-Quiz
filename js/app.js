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
let timeLeft
let stopClock
let attempts = 1
let score = 0



/*------------------------ Cached Element References ------------------------*/
//reset button
const resetBtn = document.querySelector('#reset')
//quiz topic buttons
const popcultureQuizBtn = document.querySelector('#popCulture')
const trueOrFalseQuizBtn = document.querySelector('#trueOrFalse')
const funnyTriviaQuizBtn = document.querySelector('#funnyTrivia')
const brandSlogansQuizBtn = document.querySelector('#brandSlogans')
//holds the question and answer choices
const quizContainerEl = document.querySelector('#quiz-container')
//next button
const nextEl = document.querySelector('#next')
//question and answer elements
const question1El = document.querySelector('#question')
const choice0El = document.getElementById('choice0')
const choice1El = document.querySelector('#choice1')
const choice2El = document.querySelector('#choice2')
const choice3El = document.querySelector('#choice3')
//individual button element
const btnEl = document.querySelector('.btn')
//timer countdown element
let countdownEl = document.getElementById('countdown')
const secondTime = document.getElementById('secondTime')

/*----------------------------- Event Listeners -----------------------------*/
popcultureQuizBtn.addEventListener('click', popCultureQuiz)
trueOrFalseQuizBtn.addEventListener('click', trueOrFalseQuiz)
funnyTriviaQuizBtn.addEventListener('click', funnyTriviaQuiz)
brandSlogansQuizBtn.addEventListener('click', brandSlogansQuiz)
resetBtn.addEventListener('click', init)
nextEl.addEventListener('click', nextBtn)
choice0El.addEventListener('click', handleAnswer1)
choice1El.addEventListener('click', handleAnswer2)
choice2El.addEventListener('click', handleAnswer3)
choice3El.addEventListener('click', handleAnswer4)
/*-------------------------------- Functions --------------------------------*/
init ()

function init() {
  quizContainerEl.classList.add('hide')
  popcultureBool = false
  truefalseBool = false
  funnytriviaBool = false
  brandslogansBool = false
  choice0El.style.color = 'black'
  choice1El.style.color = 'black'
  choice2El.style.color = 'black'
  choice3El.style.color = 'black'
  answered = false
  attempts = 1
  index = 1


  document.body.style.backgroundColor = '#877491'

  choice2El.classList.remove('hide')
  choice3El.classList.remove('hide') 

  popcultureQuizBtn.classList.remove('hide')
  trueOrFalseQuizBtn.classList.remove('hide')
  funnyTriviaQuizBtn.classList.remove('hide')
  brandSlogansQuizBtn.classList.remove('hide')
  secondTime.classList.add('hide')
  countdownEl.classList.add('hide')
  nextEl.classList.remove('hide')
}



function nextBtn() {
  attempts = 1
  stopClock = 0
  countdownEl.classList.remove('hide')
  secondTime.classList.add('hide')
  timeLeft = 5;
  let timer = setInterval(function() {
    countdownEl.innerText = timeLeft 
    timeLeft -= 1;
      if (answered || timeLeft < 0) {
      clearInterval(timer)
    }
  }, 1000)

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
    else if(funnytriviaBool){
    question = funnyTriviaQuizQ[index]
    question1El.innerText = question

    answer1 = funnyTriviaQuizA[index][0]
    answer2 = funnyTriviaQuizA[index][1]
    answer3 = funnyTriviaQuizA[index][2]
    answer4 = funnyTriviaQuizA[index][3]
  }
    else if(brandslogansBool){
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

  timeLeft = 5;
  let timer = setInterval(function() {
    countdownEl.innerText = timeLeft 
    timeLeft -= 1;
      if (answered || timeLeft < 0) {
      clearInterval(timer)
    }
  }, 1000)


  document.body.style.backgroundColor = '#8c778f' 
  topicNum = 0
  popcultureBool = true
  quizContainerEl.classList.remove('hide')
  
  
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

  
}

function trueOrFalseQuiz() {

  timeLeft = 5;
  let timer = setInterval(function() {
    countdownEl.innerText = timeLeft 
    timeLeft -= 1;
      if (answered || timeLeft < 0) {
      clearInterval(timer)
    }
  }, 1000)



  document.body.style.backgroundColor = '#736b85'
  topicNum = 1
  quizContainerEl.classList.remove('hide')
  
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


}
  
function funnyTriviaQuiz() {

  timeLeft = 5;
  let timer = setInterval(function() {
    countdownEl.innerText = timeLeft 
    timeLeft -= 1;
      if (answered || timeLeft < 0) {
    
      clearInterval(timer)
    }
  }, 1000)


  document.body.style.backgroundColor = '#725875'
  topicNum = 2
  quizContainerEl.classList.remove('hide')
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


}

function brandSlogansQuiz() {
  timeLeft = 5;
  let timer = setInterval(function() {
    countdownEl.innerText = timeLeft 
    timeLeft -= 1;
      if (timeLeft < 0) {
      clearInterval(timer)
    }
  }, 1000)


  document.body.style.backgroundColor = '#83748f'
  topicNum = 3
  quizContainerEl.classList.remove('hide')
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


}

function handleAnswer1() {
  //checks which answer choice is correct
  if (choice0El.innerText=== (correctAnswer1[topicNum][index-1])) {
    choice0El.style.color = 'green'
    answered = true
    stopClock = timeLeft
    countdownEl.classList.add('hide')
    score = score + ((stopClock*50)-(25*attempts))
    if (index===5){
      secondTime.innerText = `You finished the quiz! You answered in ${attempts} attempts and in ${5-stopClock} seconds. Your final score is ${score} points!`
      }
      else{
        secondTime.innerText = `You answered in ${attempts} attempts and in ${5-stopClock} seconds. You scored ${(stopClock*50)-(5*(attempts-1))} points!`
      }
    secondTime.classList.remove('hide')
    // clearInterval(timer)

  } else if (answered === false) {
    choice0El.style.color = 'red'
    attempts++

  }
}

function handleAnswer2(){
 //checks which answer choice is correct
  if (choice1El.innerText=== (correctAnswer1[topicNum][index-1])) {
    choice1El.style.color = 'green'
    answered = true
    stopClock = timeLeft
    countdownEl.classList.add('hide')
    score = score + ((stopClock*50)-(25*attempts))
    if (index===5){
      secondTime.innerText = `You finished the quiz! You answered in ${attempts} attempts and in ${5-stopClock} seconds. Your final score is ${score} points!`
      }
      else{
        secondTime.innerText = `You answered in ${attempts} attempts and in ${5-stopClock} seconds. You scored ${(stopClock*50)-(5*(attempts-1))} points!`
      }
    secondTime.classList.remove('hide')
    // clearInterval(timer)
  } else if (answered === false) {
  choice1El.style.color = 'red'
  attempts++
  }
}

function handleAnswer3(){
 //checks which answer choice is correct
  if (choice2El.innerText=== (correctAnswer1[topicNum][index-1])) {
    choice2El.style.color = 'green'
    answered = true
    stopClock = timeLeft
    countdownEl.classList.add('hide')
    score = score + ((stopClock*50)-(25*attempts))

    if (index===5){
    secondTime.innerText = `You finished the quiz! You answered in ${attempts} attempts and in ${5-stopClock} seconds. Your final score is ${score} points!`
    }
    else{
      secondTime.innerText = `You answered in ${attempts} attempts and in ${5-stopClock} seconds. You scored ${(stopClock*50)-(5*(attempts-1))} points!`
    }

    secondTime.classList.remove('hide')
    // clearInterval(timer)
    } else if (answered === false) {
    choice2El.style.color = 'red'
    attempts++
  }
}

function handleAnswer4(){
 //checks which answer choice is correct
  if (choice3El.innerText=== (correctAnswer1[topicNum][index-1])) {
    choice3El.style.color = 'green'
    answered = true
    stopClock = timeLeft
    countdownEl.classList.add('hide')
    score = score + ((stopClock*50)-(25*attempts))
    if (index===5){
      secondTime.innerText = `You finished the quiz! You answered in ${attempts} attempts and in ${5-stopClock} seconds. Your final score is ${score} points!`
      }
      else{
        secondTime.innerText = `You answered in ${attempts} attempts and in ${5-stopClock} seconds. You scored ${(stopClock*50)-(5*(attempts-1))} points!`
      }
    secondTime.classList.remove('hide')
    // clearInterval(timer)
  } else if (answered === false) {
  choice3El.style.color = 'red'
  attempts++
  }
}