const instruments = require('../instruments');




module.exports = {
    'GET /api/instruments': async (ctx, next) => {
        ctx.response.type = 'application/json';
        ctx.response.body = instruments.getInstruments();
    },

    'POST /api/instruments': async (ctx, next) => {
        var p = instruments.createInstrument(ctx.request.body.Number, ctx.request.body.ISIN, ctx.request.body.CreditSpread, ctx.request.body.StockBorrowRate, ctx.request.body.TakeOverProbability)
        ;
        ctx.response.type = 'application/json';
        ctx.response.body = p;
    }
};
