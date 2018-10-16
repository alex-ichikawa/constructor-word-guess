var Letter = require("./letter");

class Word {
    constructor( word) {
        this.letter = new Letter(word);
    }

    doThing() {
        this.letter.printWord();
        console.log(this.letter.underScore.join(' '));
        
    }

    doOtherThing(guess) {
        this.letter.usedBefore = false;
        this.letter.checkGuess(guess);
        console.log(this.letter.underScore.join(' '));
        console.log(`Lives left: ${this.letter.tries}`);
        if (this.letter.usedBefore == true) {
            console.log("You've guessed this letter before");
        }
    }
    
}

module.exports = Word;