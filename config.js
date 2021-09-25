const { random } = require('./utils');

const guess = {
    min: 0,
    max: 9,
    get secretnumber() {
        return this._secretnumber;
    },
    set secretnumber(value) {
        this._secretnumber = value;
    },
    turns: 0,
    limit: 3,
    init() {
        this.secretnumber = parseInt(process.argv[2]) || random(this.min, this.max);
    }
};

guess.init();

module.exports = guess;