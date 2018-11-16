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

var instruments = [
    new instrument("157a", "US177376AD23", 75, 0.56, 0.01),
    new instrument("157b", "US177376AD23", 75, 0.56, 0.50),
];

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

    createInstrument: (Number, ISIN, CreditSpread, StockBorrowRate, TakeOverProbability) => {
        var p = new instrument(Number, ISIN, CreditSpread, StockBorrowRate, TakeOverProbability);
        instruments.push(p);
        return p;
    },
};