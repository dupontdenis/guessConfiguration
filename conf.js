const fs = require('fs');
const path = require('path');
const { random } = require('./utils');


const guess = {
    min: 0,
    max: 10,
    turns: 0,
    limit: 3,
    init() {
        this.secretnumber = parseInt(process.argv[2]) || random(this.min, this.max);
    }
};
 
guess.init();

 
fs.writeFileSync(path.resolve(__dirname, 'guess.json'), JSON.stringify(guess));