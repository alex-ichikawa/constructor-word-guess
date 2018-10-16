var Letter = require("./letter");

// let word = "alex ichikawa";
// let guess = "b";

class Word {
    constructor( word, guess) {
        this.letter = new Letter(word, guess);
    }

    doThing() {
        this.letter.printWord();
        console.log(this.letter.underScore.join(' '));
        
    }

    doOtherThing() {
        this.letter.checkGuess();
        console.log(this.letter.correct);
        console.log(this.letter.tries);
    }
    
}

// var newWord = new Word(word, guess);
// newWord.doThing();
// newWord.doOtherThing();

module.exports = Word;