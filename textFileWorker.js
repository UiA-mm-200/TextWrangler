const fs = require("fs");

module.exports = class TextFileWorker {

    constructor(sourcefile) {
        this.sourceTextFile = sourcefile
        this.text = "";

        if (fs.existsSync(this.sourceTextFile)) {
            this.text = fs.readFileSync(this.sourceTextFile, "utf-8");
        } else {
            throw new Error(`No such file ${this.sourceTextFile}`);
        }
    }

    writeToFile(text, targetFile) {
        fs.writeFileSync(targetFile, text, "utf-8");
    }

}