// Create array of words //
let wordList = [`monetize`, `coffee`, `fibonacci`, `lhopital`, `dutch master`, `yuengling`, `miller lite`, `budweiser`];
//*Set variables for wordChoices //
let randInput = Math.floor(Math.random() * wordList.length);
let chosenWord = wordList[randInput];
let underScores = [];
let typedWord = [];
//*Set variables for rightWords & wrongWords //
let rightWord = [];
let wrongWord = [];
$(document).ready(function () {
    // DOM MANIPULATION //
    let docUnderScore = $(".underScores"); // dynamically update words with correct number of underscores
    let docRightGuess = $(".rightWord");// trigger when user inputs right guess. otherwise hide this div. 
    let docWrongGuess = $(".wrongWord");//trigger when user inputs wrong guess. otherwise hide these divs!
    //===========//////
    console.log(chosenWord);
// computer chooses a random word from array and replaces all letters with _
    let generateUnderScore = () => {
        for (let i = 0; i, chosenWord.length; i++) {
            docUnderScore.push("_");
            console.log( docUnderScore)
        }
        return (docUnderScore);
    }
    // KeyUp function that takes in user input and compares it to the chosenWord
    $(document).click(chosenWord).keypress(function (e) {
        $(typedWord).each(String.fromCharCode(event.keyCode));
    },
    $("#textArea").keyup(function (e) { 
        alert(randInput);
    }));
    // Win condition statements ****USE IF STATEMENTS. This should be an easy google search. 
    if ($(typedWord).join("" == chosenWord)-1)()=> {
        rightWord.push(typedWord);
        return ()

        else if (
            underScore[typedWord.indexOf(chosenWord)] = chosenWord);
            docUnderScore[0].innerHTML = underScore.join("");
            docRightGuess[0].innerHTML = rightWord.join("");
        )
    }
//////CONSOLE LOGS?////////
    console.log(typedWord);    
    console.log(rightWord.join(""))
    
    // Call all functions here:
    generateUnderScore(); //
})