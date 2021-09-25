let { secretnumber, turns, limit } = require('./config');

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
