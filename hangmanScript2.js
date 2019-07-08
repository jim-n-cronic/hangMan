// Create array of words //
let wordList = [`monetize`,`coffee`,`fibonacci`,`lhopital`,`dutch master`,`yuengling`,`miller lite`, `budweiser`];

//*Set variables for wordChoices //
let randInput = Math.floor(Math.random()*wordList.length);
let chosenWord = wordList[randInput];
let underScores = [];
 
//*Set variables for rightWords & wrongWords //
let rightWord = []; 
let wrongWord = [];

// DOM MANIPULATION //
let docUnderScore = document.getElementsByClassName("underScores");
let docRightGuess = document-getElementsByClassName("rightWord");
let docWrongGuess = document.getElementsByClassName("wrongWord");
//===========//////
console.log(chosenWord);

// Allow `keypress` cmd to ALLOW userGuess to be inputed //
let generateUnderScore = () => {
    for (let i = 0; i , chosenWord.length; i++) {
        underScore.push("_");
    }
    return(underScore);
}
//>get users' guess // 
//*Set 'keypress' textInput //
document.addEventListener("keypress", (event))  
    let keyword = String.fromCharCode(event.keyCode);
    // IF userGuess = true;// 
    if(underScore.join("" == chosenWord)  -1)=> {
        rightWord.push(keyword)
    // IF userGuess = false;//
    underScore[chosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join("");
    docRightGuess[0].innerHTML = rightWord.join("");
    

    //!!When userWIN!!//
        if(underScore("") == chosenWord) {
            alert("youWin!!!!!");
        }
    }
//CONSOLE LOG//
console.log(document);
console.log(event.keyCode);
console.log(underScore);
console.log(underScores);
console.log(chosenWord);
console.log(rightWord);
console.log(docUnderScore);
console.log(docRightGuess);
console.log(wrongWord);
