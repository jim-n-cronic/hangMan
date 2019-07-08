<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8">
    <title>Hangman!</title>
   <!--css-->
    <link rel="stylesheet" type="text/css" href="hangmanHomework3.css">
    <!--reset.css-->
    <link rel="stylesheet" href="reset.css">
    <!--bootStrap-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<!--jQuery CDN-->
<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>
</head>
<body>
    
    <div class="container">
        <header>
        <h2>Lets play HangMan!</h2>
        </header>
      <div class="jumbotron">
      
        <div class="underScores">_ _ _ _ _ </div>
        <input type="text" id="textArea"> 
        <div class="rightGuess">Right Guess</div>
        <div class="wrongGuess">Wrong Guess</div>     
      </div>

    </div>
<script src= "hangmanScript_jQuery.js"></script>



</body>
<footer>

<button id="trigger" >Click here to submit your response! ;) </button>
<p id="thanksForPlaying"></p>
<div class="container">
<input type="text" name="name" value="<?php echo $name;?>">
<input type="text" name="email" value="<?php echo $email;?>">
<div class="container">
<input type="text" name="linkedIn" value="<?php echo $linkedIn;?>">
</div>
</div>
<?php
    $x=38.2;
    $y=61.8;
    function mathTest() {
        global $x, $y;
        $z = $x + $y;
    }
    mathTest();
    echo $z;
?>
</footer>
</html>  


