let word; //string
let wordInChars; //array
let wrongChars = [];//array
let wordOutputArray = [];//array
let wordOutputString; //string
let inputGuess;//string
let guessArray = [];//array

document.addEventListener("DOMContentLoaded", () => {
          document.getElementById("hangman").innerHTML = hangmanStages[0];
     }
)

function readTextField(){
     word = readAndDelete("wordTextField");
     if (word != 1) {
          document.getElementById("submitButton").disabled = true;
          wordInChars = word.split('');
          document.getElementById("submitGuessButton").disabled = false;

          for (let i = 0; i < wordInChars.length; i++) {

               if(wordInChars[i] == " "){
                    wordOutputArray[i] = ' ';  
               }else{
                    wordOutputArray[i] = '_';
               }
               
          }

          wordOutputString = wordOutputArray.join('');
          document.getElementById("wordOutput").innerHTML = wordOutputString;
          console.log(wordInChars);
          console.log(wordOutputArray);
          
     }else{
          alert('Please put a character in the Guess Field!');
     }
}

function readGuessTextField(){
     inputGuess = readAndDelete("guessTextField");
     if (inputGuess != 1) {
          guessArray = inputGuess.split('',1);
          guess();   
     }else{
          alert('Please put a character in the Guess Field!');
     }
     
}

function readAndDelete(textField){
     originalText = document.getElementById(textField).value;
     text = originalText.toLowerCase();
     document.getElementById(textField).value = '';
     if (originalText.trim() == '') {
          console.log("hallo");
          return 1;
     }else{
          return text;
     }   
}

function guess(){
     if (wordInChars.some(char => char == guessArray[0])) {
          for (i = 0; i < wordInChars.length; i++) {
               if ( wordInChars[i] == guessArray[0]) {
                    wordOutputArray[i] = guessArray[0];
                    wordOutputString = wordOutputArray.join('');
                    document.getElementById("wordOutput").innerHTML = wordOutputString;
               }
             }
          if (!wordOutputArray.some(underscore => underscore == "_")) {
               console.log('You won! The word was: ' + word);
               reset();
          }
     }else{
          wrongChars.push(guessArray);
          console.log(wrongChars);
          document.getElementById("wrongOutput").innerHTML = wrongChars;
          if (wrongChars.length == 9) {
               console.log('You lost! The word was: '+ word);
               reset();
          }
          document.getElementById("hangman").innerHTML = hangmanStages[wrongChars.length];
     }
}





function reset(){
     word = '';
     wordInChars = []; //array
     wrongChars = [];//array
     wordOutputArray = [];//array
     wordOutputString = ''; //string
     inputGuess = '';//string
     guessArray = [];//array
     document.getElementById("wordOutput").innerHTML = '';
     document.getElementById("wrongOutput").innerHTML = '';
     document.getElementById("hangman").innerHTML = hangmanStages[0];
     document.getElementById("submitButton").disabled = false;
     document.getElementById("submitGuessButton").disabled = true;
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