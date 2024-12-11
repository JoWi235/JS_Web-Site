let word; //string
let wordInChars; //array
let wrongChars = [];//array
let wordOutputArray = [];//array
let wordOutputString; //string
let inputGuess;//string
let guessArray;//array

document.addEventListener("DOMContentLoaded", () => {
          document.getElementById("hangman").innerHTML = hangmanStages[0];
     }
)

function readTextField(){
     word = readAndDelete("wordTextField"); 
     document.getElementById("submitButton").disabled = true;
     wordInChars = word.split('');

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
     wordOutputArray = [];
}

function readGuessTextField(){
     inputGuess = readAndDelete("guessTextField");
     guessArray = inputGuess.split('',1);
     guess();
}

function readAndDelete(textField){
     originalText = document.getElementById(textField).value;
     text = originalText.toLowerCase();
     document.getElementById(textField).value = "";
     return text;
}

function guess(){
     if (wordInChars.some(char => char == guessArray[0])) {
          console.log("test123");
     }else{
          wrongChars.push(guessArray);
          console.log(wrongChars);
          document.getElementById("wrongOutput").innerHTML = wrongChars;
          document.getElementById("hangman").innerHTML = hangmanStages[wrongChars.length];
     }
}





function reset(){
     word = '';
     wrongChars = [];
     document.getElementById("wordOutput").innerHTML = '';
     document.getElementById("wrongOutput").innerHTML = '';
     document.getElementById("hangman").innerHTML = hangmanStages[0];
     document.getElementById("submitButton").disabled = false;
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