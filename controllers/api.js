const instruments = require('../instruments');

module.exports = {
    'GET /api/instruments': async (ctx, next) => {
        ctx.response.type = 'application/json';
        ctx.response.body = instruments.getInstruments();
    },

    'POST /api/instruments': async (ctx, next) => {
        var OutputFileName = ctx.request.body.OutputFileName;
        var FirstRun = ctx.request.body.IsItTheFirstRun;
        for (var i = 0; i < ctx.request.body.InstrumentList.length; i++) {
            var s = ctx.request.body.InstrumentList[i];
            if ('StockPrice' in s.keys) { var StockPrice = s.StockPrice; } else { var StockPrice = null; }
            if ('StockPriceFormat' in s.keys) { var StockPriceFormat = s.StockPriceFormat; } else { var StockPriceFormat = null; }
            if ('StockVolatility' in s.keys) { var StockVolatility = s.StockVolatility; } else { var StockVolatility = null; }
            if ('StockVolFormat' in s.keys) { var StockVolFormat = s.StockVolFormat; } else { var StockVolFormat = null; }
            if ('BondPrice' in s.keys) { var BondPrice = s.BondPrice; } else { var BondPrice = null; }
            var p = instruments.createInstrument(s.Number, s.ISIN, s.CreditSpread, s.StockBorrowRate, s.TakeOverProbability,
                StockPrice, StockPriceFormat, StockVolatility, StockVolFormat, BondPrice);
        }
        ctx.response.type = 'application/json';
        ctx.response.body = instruments.getInstruments();
    }
};
