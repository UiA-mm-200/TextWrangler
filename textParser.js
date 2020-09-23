module.exports = class TextParser {

    constructor(sourceText) {
        this.allWordsInText = sourceText.split(" ");
        this.therosurus = {};
        this.terminatorsInText = sourceText.search(/[^\w\s]/g);
        this.bigWords = [];

        for (let word of this.allWordsInText) {
            if (this.therosurus[word] != undefined) {
                this.therosurus[word] = (this.therosurus[word] * 1) + 1;
            } else {
                this.therosurus[word] = 1
                if (word.length >= 6) {
                    this.bigWords.push(word)
                }
            }

        }
    }

    calculateLixValue() {
        return (this.allWordsInText.length / this.terminatorsInText) + ((this.bigWords.length * 100) / this.allWordsInText.length)
    }
}