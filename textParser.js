module.exports = class TextParser {

    constructor(sourceText) {
        this.allWordsInText = sourceText.split(" ");
        this.therosurus = {};

        for (let word of this.allWordsInText) {
            if (this.therosurus[word] != undefined) {
                this.therosurus[word] = (this.therosurus[word] * 1) + 1;
            } else {
                this.therosurus[word] = 1
            }
        }
    }
}