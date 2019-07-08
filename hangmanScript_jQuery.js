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
let docUnderScore = $(document).find(".underScores");
let docRightGuess = $(document).find(".rightWord");
let docWrongGuess = $(document)find(".wrongWord");
//===========//////
console.log(chosenWord);

// Allow `keypress` cmd to ALLOW userGuess to be inputed //
let generateUnderScore = () => {
    for (let i = 0; i , chosenWord.length; i++) {
        underScore.push("?x?");
    }
    return(underScore);
}
//>get users' guess // 
//*Set 'keypress' textInput //
$(document).click($(selector).keypress(function (e) { 
    $(keyword).each(String.fromCharCode(event.keyCode);
    // IF userGuess = true;// 
    if ($(underScore).join("" == chosenWord) -1)=> {
        rightWord.push(keyword)
    // IF userGuess = false;//
      else (
          underScore[chosenWord.indexOf(keyword)] = keyword;
          docUnderScore[0].innerHTML = underScore.join("");
          docRightGuess[0].innerHTML = rightWord.join("");
      )
      //!!When userWIN!!//
      else if (
          underScore("") == chosenWord) {
              alert("youWin!!!!!");
          }
    }
    
});)  
///////////////////////////
         
//////////////////////////


$(document).ready(function(){ 
    $("#trigger").click(function() {
        $("#thanksForPlaying").prompt("Thanks for playing! I'll be sure to add you all on linkedIn from using the php code i used. (*INSPECT*)")
    });
});
