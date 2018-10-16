class Letter {
    constructor(word) {
        this.word = word;
        this.correct = false;
        this.tries = 6;
        this.underScore = [];
        this.userGuesses = [];
        this.spaceCounter = 0;
        this.usedBefore = false;
    }

    printWord() {
        this.correct = false;
        for (let i = 0; i < this.word.length; i++) {
            this.underScore.push('_');
            if (this.word[i] === ' ') {
                this.underScore[i] = ' ';
                this.spaceCounter++;
            }

        }
    }

    checkGuess(guess) {
        if (this.word.indexOf(guess) > -1 && this.userGuesses.indexOf(guess) === -1) {
            for (let i = 0; i < this.word.length; i++) {
                if (this.word[i] == guess) {
                    this.userGuesses.push(guess);
                    this.underScore[i] = guess;
                    this.correct = true;
                }
            }

        }
        else if (this.word.indexOf(guess) === -1 && this.userGuesses.indexOf(guess) === -1) {
            this.userGuesses.push(guess);
            this.correct = true;
            this.tries--;
            this.correct = false;
        }
        else if(this.userGuesses.indexOf(guess) > -1) {
            this.usedBefore = true;
        }
    }
    
}

module.exports = Letter;