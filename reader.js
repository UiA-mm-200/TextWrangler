const fs = require("fs");

module.exports = class TextReader {

    constructor(sourcefile) {
        this.sourceTextFile = sourcefile
        this.text = "";

        if (fs.existsSync(this.sourceTextFile)) {
            this.text = fs.readFileSync(this.sourceTextFile, "utf-8");
        } else {
            throw new Error(`No such file ${this.sourceTextFile}`);
        }
    }

}