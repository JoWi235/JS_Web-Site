
let word;
let wordInChars = [];
let wrongChars = [];
let wordOutputArray = [];
let wordOutputString;
let inputGuess;
let guessArray = [];
let wordlength = 0;


document.addEventListener("DOMContentLoaded", () => {
          document.getElementById("hangman").innerHTML = hangmanStages[0];
     }
)

function readTextField(){
     word = readAndDelete("wordTextField");
     if (word == null) {
          alert('Please put a word in the word Field!');
          return;
     }
     buttonMode(false);
     wordInChars = word.split('');
     charToOutput();
     displayWordLength();
}

function readGuessTextField(){
     inputGuess = readAndDelete("guessTextField");
     if (inputGuess == null){
          alert('Please put a character in the Guess Field!');
          return;
     }
     guessArray = inputGuess.split('',1);
     guess();
}

function readAndDelete(textField){
     originalText = document.getElementById(textField).value;
     document.getElementById(textField).value = '';
     if (originalText.trim() == '') {
          return null;
     }else{
          text = originalText.toLowerCase();
          return text;
     }   
}

function reset(){
     variableReset();
     frontReset();
}

function charToOutput(){
     for (let i = 0; i < wordInChars.length; i++) {

          if(wordInChars[i] == " "){
               wordOutputArray[i] = ' ';  
          }else{
               wordOutputArray[i] = '_';
          }   
     }
     wordOutputString = wordOutputArray.join('');
     document.getElementById("wordOutput").innerHTML = wordOutputString;
}

function displayWordLength() {
     for (let j = 0; j < wordOutputArray.length; j++) {
          if (wordOutputArray[j] == '_') {
               wordlength++;
          }
     }

     document.getElementById("word").innerHTML = 'Wort(' + wordlength + ' Buchstaben):'; 
}

function guess(){
     if (wordInChars.some(char => char == guessArray[0])) { 
          dislayCorrectChars();
          checkWin();
     }else{
          displayWrongChars();
          checkLose();
     }
}

function dislayCorrectChars(){
     for (i = 0; i < wordInChars.length; i++) {
          if ( wordInChars[i] == guessArray[0]) {
               wordOutputArray[i] = guessArray[0];
               wordOutputString = wordOutputArray.join('');
               document.getElementById("wordOutput").innerHTML = wordOutputString;
          }
     }
}

function displayWrongChars(){
     wrongChars.push(guessArray);
     document.getElementById("wrongOutput").innerHTML = wrongChars;
}

function checkWin(){
     if (!wordOutputArray.some(underscore => underscore == "_")) {
          console.log('You won! The word was: ' + word);
          alert('You won! The word was: ' + word);
          reset();
     } 
}

function checkLose(){
     if (wrongChars.length == 9) {
          console.log('You lost! The word was: '+ word);
          alert('You lost! The word was: '+ word);
          reset();
     }
     document.getElementById("hangman").innerHTML = hangmanStages[wrongChars.length];
}

function variableReset(){
     word = '';
     wordInChars = [];
     wrongChars = [];
     wordOutputArray = [];
     wordOutputString = '';
     inputGuess = '';
     guessArray = [];
     wordlength = 0;
}

function frontReset(){
     document.getElementById("wordOutput").innerHTML = '';
     document.getElementById("wrongOutput").innerHTML = '';
     document.getElementById("word").innerHTML = 'Wort:'
     document.getElementById("hangman").innerHTML = hangmanStages[0];
     buttonMode(true);
}

function buttonMode(mode){
     document.getElementById("submitButton").disabled = !mode;
     document.getElementById("wordTextField").disabled = !mode;
     document.getElementById("submitGuessButton").disabled = mode;
     document.getElementById("guessTextField").disabled = mode;
}

const hangmanStages = [
     ` 
                 
                 
                 
                 
                 
                 
=========
     `,
     `

     |   
     |
     |
     |
     |
=========
     `,
     `
     -----
     |   
     |
     |
     |
     |
=========
     `,
    `
     -----
     |   |
     |
     |
     |
     |
=========
    `,
    `
     -----
     |   |
     |   O
     |
     |
     |
=========
    `,
    `
     -----
     |   |
     |   O
     |   |
     |
     |
=========
    `,
    `
     -----
     |   |
     |   O
     |  /|
     |
     |
=========
    `,
    `
     -----
     |   |
     |   O
     |  /|\\
     |   
     |
=========
    `,
    `
     -----
     |   |
     |   O
     |  /|\\
     |  /
     |
=========
    `,
    `
     -----
     |   |
     |   O
     |  /|\\
     |  / \\
     |
=========
    `
    ];//von 0 bis 9