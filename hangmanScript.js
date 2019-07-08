//create array of words
let correctAnswers = ['jughandle', 'fat', 'articulate', 'hunger', 'swimming', 'summer', 'barbeque' ];

//choose word rnadomly 
let randNum = Math.floor(Math.random()*correctAnswers.length);
let chosenWord = correctAnswers[randNum];
let underScore = [];
let rightWord = [];
let wrongWord = [];

//DOM Manipulation
let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightWord'); 
let docWrongGuess = document.getElementsByClassName('wrongWord')


//Main
//======================================

console.log(chosenWord);

//create underscores
let generateUnderscore = () => {
for (let i = 0; i < chosenWord.length;    i++) {
    underScore.push('_');
    }
    return underScore;
}
console.log(generateUnderScore);

//get users guess
document.addEventListener(`keypress`, (event) => {
    let keyword = String.fromCharCode(event.keyCode);

//IF user's guess is right
if(keyword.indexOf(chosenWord) > -1) {
        // add to rightWords [array]//
        rightWord.push(keyword);
       
        //replace unserscore with right letter // 
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join('');
        docRightGuess[0].innerHTML = rightWord.join('');

// checks to see if user word matches guesses <
///////TRUE////////    
    if(underScore.join('') == chosenWord) {
        alert(`YOU WIN!`);
    }        
  }   
////////FALSE/////////  
    else {
        wrongWord.push(keyword);
    }

    }
);


