const fs = require('fs');
const path = require('path');
const conf = require('./conf');

// let rawdata = fs.readFileSync(path.resolve(__dirname, './config.json'));
let rawdata = fs.readFileSync(path.resolve(__dirname, './guess.json'));
let { secretnumber, turns, limit} = JSON.parse(rawdata);


console.log('Guess a number :');
process.stdin.on('data', (chunk) => {
    turns++;
    if (parseInt(chunk) == secretnumber) {
        console.log(`Well Done !`);
        process.exit(0);
    }
    else if (turns < limit) {
        console.log(`Guess a new number !`);
    }
    else {
        console.log(`secret: ${secretnumber}, Let's play again !`);
        process.exit(0);
    }
});
