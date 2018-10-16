class Letter {
    constructor(word, guess) {
        this.word = word;
        this.guess = guess;
        this.correct = false;
        this.tries = 6;
        this.underScore = [];
        this.userGuesses = [];
        this.spaceCounter = 0;
        this.hasRan = false;
    }

    printWord() {
        this.correct = false;
        for (let i = 0; i < this.word.length; i++) {
            if (this.hasRan == false) {
                this.underScore.push('_');
                if (this.word[i] === ' ') {
                    this.underScore[i] = ' ';
                    this.spaceCounter++;
                }
                else if (this.word[i] === this.guess && this.userGuesses.indexOf(this.guess) === -1) {
                    this.underScore[i] = this.guess;
                    this.correct = true;
                }
            }
            else {
                if (this.word[i] === this.guess && this.userGuesses.indexOf(this.guess) === -1) {
                    this.underScore[i] = this.guess;
                    this.correct = true;
                }
                else if (this.userGuesses.indexOf(this.guess) > -1) {
                    console.log("You've already chosen this letter");
                    console.log(this.guess);
                    break;
                }
            }

        }
        this.hasRan = true;
        // console.log('word ' + this.underScore.join(' '));
        // console.log(this.tries);
        // console.log('guess ' + userGuesses);
        // console.log(this.correct);
    }

    checkGuess() {
        if (this.word.indexOf(this.guess) === -1 && this.userGuesses.indexOf(this.guess) === -1) {
            this.tries--;
            this.userGuesses.push(this.guess);
            this.correct = false;
            // console.log(this.tries);
        }
        else if (this.word.indexOf(this.guess) > -1 && this.userGuesses.indexOf(this.guess) === -1) {
            this.userGuesses.push(this.guess);
            this.correct = true;
        }
    }
}

module.exports = Letter;