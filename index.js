var inquirer = require("inquirer");
var Word = require("./word");

const words = ['ayrton senna', 'ferrari', 'sebastian vettel', 'mclaren', 'williams', 'honda', 'monaco', 'red bull', 'adrian newey', 'fernando alonso', 'kamui kobayashi', 'jenson button', 'kimi raikkonen', 'eau rouge'];

function startGame() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    chooseFisrtLetter();
}

function reset() {
    word.letter.tries = 6
    word.letter.underScore = [];
    word.letter.userGuesses = [];
    word.letter.spaceCounter = 0;
    startGame();
}

function chooseFisrtLetter() {
    word = new Word(randomWord);
    word.doThing();
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Guess a letter!",
            validate: function (value) {
                if (value.length > 1) {
                    return false;       
                }
                else {
                    return true;
                }
            }
        },
    ]).then(function (game) {

        word.doOtherThing(game.guess);
        chooseMoreLetters();

    })
}

function chooseMoreLetters() {
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Guess a letter!",
            validate: function (value) {
                if (value.length > 1) {
                    return false;
                }
                else {
                    return true;
                }
            }
        },
    ]).then(function (game) {
        let guess = game.guess.toLowerCase();
        word.doOtherThing(guess);
        if (word.letter.underScore.indexOf('_') == -1) {
            console.log("you win");
            reset();
        }
        else if (word.letter.tries == 0) {
            console.log("you lose!");
            reset();
        }
        else {
            chooseMoreLetters();
        }

    })
}


startGame();