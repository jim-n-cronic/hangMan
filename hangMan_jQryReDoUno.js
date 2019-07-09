function hangman(word) {
    var trys = 0;
    var guess = 0;
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $.each(alpha.split(''), function(i, val) {
        $('#alpha').append($('<span class="guess">' + val + '</span>'));
    });
    $.each(word.split(''), function(i, val) {
        $('#word').append($('<span class="letter" letter="' + val + '">-</span>'));
    });
    $('.guess').click(function() {
        var count = $('#word [letter=' + $(this).text() + ']').each(function() {
            $(this).text($(this).attr('letter'));
        }).length;
        $(this).removeClass('guess').css('color', (count > 0 ? 'green' : 'red')).unbind('click');

        if (count > 0) {
        $('#win').text("Correct Guess");
        } else if (count <= 0) {
        trys++;
        $('#win').text("You have tried to guess the word and failed " + trys + " times");
        }
        if (trys == 6) {
        alert("You have guessed six times, you lose");
        trys = 0;
        $("#win").text("");
        $(this).val('');

        }
    });
}


$(document).ready(function() {
    $('#but').click(function() {
        var options = new Array("DINOSAUR", "DOG", "", "HORSE", "TIGER", "LION", "BEAR", "LIGER", "HOME RU", "JAVASCRIPT", "PYTHON", "LAPTOP", "MATLAB", "RUBY");
        var random = 1 + Math.floor(Math.random() * 12);
        hangman(options[random]);
    });
});
