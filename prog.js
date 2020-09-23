const textFileWorker = require("./textFileWorker");
const textParser = require("./textParser");

if (process.argv.length >= 3) {
    let sourceTextFile = process.argv[2];
    try {
        let worker = new textFileWorker(sourceTextFile);
        let parser = new textParser(worker.text);

        let lixIndex = parser.calculateLixValue();
        let rapport = `Lix index er ${lixIndex} \n\r`;

        if (lixIndex < 30) {
            rapport += "Dette kan Donald Trumph lese... hmm muligens";
        } else if (lixIndex < 40) {
            rapport += "Lett å lese. SE og Hør type ting";
        } else if (lixIndex < 50) {
            rapport += "Daglidags riks avis";
        } else if (lixIndex < 60) {
            rapport += "Storebror ser deg tekst";
        } else {
            rapport += "PhD student som har røykt sokka sine.";
        }

        if (process.argv[3]) {
            worker.writeToFile(rapport, process.argv[3])
        }

        console.log(rapport);

    } catch (error) {
        console.error(error)
    }
} else {
    console.error("use: prog.js <file-to-read>");
}