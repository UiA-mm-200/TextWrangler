const textReader = require("./reader");
const textParser = require("./textParser");

if (process.argv.length >= 3) {
    let sourceTextFile = process.argv[2];
    try {
        let reader = new textReader(sourceTextFile);
        let parser = new textParser(reader.text);

        let lixIndex = parser.calculateLixValue();
        console.log(`Lix index er ${lixIndex}`);




    } catch (error) {
        console.error(error)
    }
} else {
    console.error("use: prog.js <file-to-read>");
}