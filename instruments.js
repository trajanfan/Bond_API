const jsonprocess = require('./jsonprocess.js');

var id = 0;

function nextId() {
    id++;
    return 'p' + id;
}

function instrument(Number, ISIN, CreditSpread, StockBorrowRate, TakeOverProbability) {
    this.id = nextId();
    this.Number = Number;
    this.ISIN = ISIN;
    this.CreditSpread = CreditSpread;
    this.StockBorrowRate = StockBorrowRate;
    this.TakeOverProbability = TakeOverProbability;
}

var instruments = jsonprocess.readfile('./input.json');

module.exports = {
    getInstruments: () => {
        return intruments;
    },

    getIntrument: (id) => {
        var i;
        for (i = 0; i < instruments.length; i++) {
            if (instruments[i].id === id) {
                return instruments[i];
            }
        }
        return null;
    },

    createInstrument: (Number, ISIN, CreditSpread, StockBorrowRate, TakeOverProbability,
        StockPrice, StockPriceFormat, StockVolatility, StockVolFormat, BondPrice) => {
        var p = new instrument(Number, ISIN, CreditSpread, StockBorrowRate, TakeOverProbability,
            StockPrice, StockPriceFormat, StockVolatility, StockVolFormat, BondPrice);
        instruments.push(p);
        jsonprocess.writefile('./input.json', instruments);
        return p;
    },
};