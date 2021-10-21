const popCultureQuizQ = ["How many Harry Potter films have been made?",
                      "What day is Star Wars day?",
                      "Who was the main character in Lord of the Rings?",
                      "All of these are songs by The Beatles except: ?",
                      "In the iconic titanic meme, Rose says: It's been blank years. What is the blank?"]
const popCultureQuizA =[['seven', 'nine', 'eight', 'six'],
                        ['October 3', 'May 4', 'January 9', 'July 4'],
                        ['Gandalf', 'Frodo', 'Smeagol', 'Bilbo Baggins'],
                        ['Hey Jude', 'Let it Be', "Don't stop me now", 'Hello, Goodbye'],
                        ['89', '47', '74', '84'] ]  
const correctAnswerIdx1 = [[2], [1], [1], [2], [3]]

const trueOrFalseQuizQ = ['In Scotland, the unicorn is their national animal.',
                        'The Great Wall of China is visibe from space', 
                        'An octopus has three hearts',
                        'In a regular deck of cards, all kings have a mustache.',
                        'Among the letters of the alphabet, only the letter J is not included in the periodic table.']
let trueOrFalseQuizA = [['True', 'False'],
                        ['True', 'False'],
                        ['True', 'False'],
                        ['True', 'False'],
                        ['True', 'False'] ]
const correctAnswerIdx2 = [[0], [1], [0], [1], [0]]                        

const funnyTriviaQuizQ =['In Texas, it’s illegal to swear in front of what?',
                        'What was the first fruit that was eaten on the moon?',
                        'Johnny Depp is famously afraid of what?',
                        'In June in Wyoming, it is illegal to take a picture of what?',
                        'What is illegal to eat with a cherry pie in Kansas?']
const funnyTriviaQuizA =[ ["a corpse", "children", "a horse", "a tree"],
                          ['apple', 'plum', 'peach', 'orange'],
                          ['heights', 'spiders', 'bees', 'clowns'],
                          ["a rooster", "a rabbit", "a fish", "a cat"],
                          ['Ice Cream', 'Pie', 'Cake', 'Bagels'] ]
const correctAnswerIdx3 = [[0], [2], [3], [1], [0]] 

const brandSlogansQuizQ =["What brand does this slogan belong to: What's in your wallet?",
                          "What brand does this slogan belong to: Move fast and break things?",
                          "What is the slogan for Google?",
                          "What brand does this slogan belong to: Expect more pay less?",
                          "What is the slogan for Adidas?"]
const brandSlogansQuizA = [ ['Chase', 'Citi', 'Discover', 'Capital One'],
                            ["Instagram", 'Snapchat', "Facebook", "Twitter"],
                            ["Be what's next", "Don't be evil", "Think Different", "Go Beyond"],
                            ['Walmart', 'Target', 'Walgreens', 'Trader Joes'],
                            ["Impossible is nothing", "Just do it", "Belong anywhere", "We go the extra mile"] ]
const correctAnswerIdx4 = [[3], [2], [1], [1], [0]]

export {
  popCultureQuizQ,
  popCultureQuizA,
  trueOrFalseQuizQ,
  trueOrFalseQuizA,
  funnyTriviaQuizQ,
  funnyTriviaQuizA,
  brandSlogansQuizQ,
  brandSlogansQuizA,
  correctAnswerIdx1, 
  correctAnswerIdx2, 
  correctAnswerIdx3, 
  correctAnswerIdx4
}