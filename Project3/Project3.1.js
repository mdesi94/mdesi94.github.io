let answer = Math.floor(Math.random() * 100) + 1;

const playButton = document.getElementById("playbutton");
const lowOrHi = document.getElementById("answercheck");

const guessSubmit = document.getElementById("checkbutton");
const inputBox = document.getElementById("numberinput");
const keepScore = document.getElementById("score");
let guessCount = 10;
let resetButton;


function checkAnswer() {
    let userGuess = Number(inputBox.value);
    if (userGuess === answer) {
        answercheck.textContent = 'Congratulations! You got it right!';
        displayanswer.textContent = answer;

       if (score > highscore.textContent) {
        highscore.textContent = score.textContent;
       }
       resetGame();
    
    }
    else if (userGuess > answer) {
        answercheck.textContent = 'Too high';
        score.textContent = guessCount--;
    }

    else if (userGuess < answer) {
        answercheck.textContent = 'Too low';
        score.textContent = guessCount--;
    }
    else {
        answercheck.textContent = 'Invalid input, try again';
    }
}

guessSubmit.addEventListener('click', checkAnswer);

playbutton.addEventListener('click', resetGame);


function resetGame() 
