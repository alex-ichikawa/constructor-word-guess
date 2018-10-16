var inquirer = require("inquirer");
var Word = require("./word");

const words = ['ayrton senna', 'ferrari', 'sebastian vettel', 'mclaren', 'williams', 'honda', 'monaco', 'red bull', 'adrian newey', 'fernando alonso', 'kamui kobayashi', 'jenson button', 'kimi raikkonen', 'eau rouge'];
// var guess = process.argv[2];

// let word1 = "alex ichikawa";
// let guess1 = "a";

// let newWord = new word(word1, guess1);

function startGame() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    chooseFisrtLetter();
}

function reset() {
    word.letter.tries = 6
    word.letter.underScore = [];
    word.letter.userGuesses = [];
    word.letter.guess = '';
    word.letter.spaceCounter = 0;
    word.letter.hasRan = false;
    startGame();
}

function chooseFisrtLetter() {
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
        word = new Word(randomWord, game.guess);
        word.doThing();
        word.doOtherThing();
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
        word.letter.guess = game.guess;
        word.doThing();
        word.doOtherThing();
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