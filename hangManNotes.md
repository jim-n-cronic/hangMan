> Code is all written out as far as the logic.

* PROBLEM-1 = ("keypress") command not working.
* PROBLEM-2 =  "generateUnderScores" is NOT working!

###### text area code #####
document.getElementById("textArea").onkeypress = function(){inputFunction()};
    function inputFunction() {}




######### Remaining cod to convert from js to jquery
 let keyword = String.fromCharCode(event.keyCode);
    // IF userGuess = true;// 
    if(underScore.join("" == chosenWord)  -1) => {
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
    //!!When userLOSE!!//
        else {
            wrongWord.push(keyword);
        }
    
;
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