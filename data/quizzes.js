const popCultureQuiz = {
  question1: "How many Harry Potter films have been made?",
  answerChoices: ['seven', 'nine', 'eight', 'six' ],
  rightAnswer: 2,

  question2: "What day is Star Wars day?",
  answerChoices: ['October 3', 'May 4', 'January 9', 'July 4'],
  rightAnswer: 1,

  question3: "Who was the main character in Lord of the Rings?",
  answerChoices: ["Gandalf", "Frodo", "Smeagol", "Bilbo Baggins"],
  rightAnswer: 1,

  question4: "All of these are The Beatles song titles except: ?",
  answerChoices: ['Hey Jude', 'Let It Be', "Don't stop me now", "Hello, Goodbye"],
  rightAnswer: 2,

  question5: " In the iconic titanic meme, Rose says: It's been blank years. What is the blank?",
  answerChoices: ["89", "47", "74", "84"],
  rightAnswer: 3,
  }

const trueOrFalseQuiz = {
  question1: "In Scotland, the unicorn is their national animal.",
  answerChoices: ['True', 'False'],

  question2: "The Great Wall of China is visibe from space",
  answerChoices: ['True', 'False'],
  rightAnswer: 1,

  question3: "An octopus has three hearts",
  answerChoices: ['True', 'False'],
  rightAnswer: 0,

  question4: "In a regular deck of cards, all kings have a mustache.",
  answerChoices: ['True', 'False'],
  rightAnswer: 1,

  question5: "Among the letters of the alphabet, only the letter J is not included in the periodic table.",
  answerChoices: ['True', 'False'],
  rightAnswer: 0,
  }

const funnyTriviaQuiz = {
  question1: "In Texas, it’s illegal to swear in front of what?",
  answerChoices: ["a corpse", "children", "a horse", "a tree"],
  rightAnswer: 0,

  question2: "What was the first fruit that was eaten on the moon?",
  answerChoices: ['apple', 'plum', 'peach', 'orange'],
  rightAnswer: 2,

  question3: "Johnny Depp is famously afraid of what?",
  answerChoices: ['heights', 'spiders', 'bees', 'clowns'],
  rightAnswer: 2,

  question4: "In June in Wyoming, it is illegal to take a picture of what?",
  answerChoices: ["a rooster", "a rabbit", "a fish", "a cat"],
  rightAnswer: 1,

  question5: "What is the world record for number of hot dogs eaten in one sitting?",
  answerChoices: ['65', '85', '74', '101'],
  rightAnswer: 2
  }

const brandSlogansQuiz = {
  question1: "What brand does this slogan belong to: What's in your wallet?",
  answerChoices: ['Chase', 'Citi', 'Discover', 'Capital One'],
  rightAnswer: 3,
    
  question2: "What brand does this slogan belong to: Move fast and break things",
  answerChoices: ["Instagram", 'Snapchat', "Facebook", "Twitter"],
  rightAnswer: 2,
    
  question3: "What is the slogan for Google?",
  answerChoices: ["Be what's next", "Don't be evil", "Think Different", "Go Beyond"],
  rightAnswer: 1,
    
  question4: "What brand does this slogan belong to: Expect more pay less",
  answerChoices: ['Walmart', 'Target', 'Walgreens', 'Trader Joes'],
  rightAnswer: 1,
    
  question5: "What is the slogan for Adidas", 
  answerChoices: ["Impossible is nothing", "Just do it", "Belong anywhere", "We go the extra mile"],
  rightAnswer: 0
  }

function getpopCultureQuiz() {
  return popCultureQuiz
}

function gettrueOrFalseQuiz() {
  return trueOrFalseQuiz
}

function getfunnyTriviaQuiz() {
  return funnyTriviaQuiz
}

function getbrandSlogansQuiz() {
  return brandSlogansQuiz
}


export {
  getpopCultureQuiz,
  gettrueOrFalseQuiz,
  getfunnyTriviaQuiz,
  getbrandSlogansQuiz
}