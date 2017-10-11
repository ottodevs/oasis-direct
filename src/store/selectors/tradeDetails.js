import { createSelector } from 'reselect';

const state = s => s.get('tradeDetails');


const transactionFee = createSelector(
    state,
    s => s.get('transactionFee')
);

const tokenPrice = createSelector(
    state,
    s => s.get('tokenPrice')
);

const tokenPriceUnitSymbol = createSelector(
    state,
    s => s.get('tokenPriceUnitSymbol')
);

const market = createSelector(
    state,
    s => s.get('market')
);

const transactionInfo = createSelector(
    tokenPrice,
    tokenPriceUnitSymbol,
    transactionFee,
    market,
    (tokenPrice, tokenPriceUnitSymbol, transactionFee, market) => {
      const info = {
        tokenPrice,
        tokenPriceUnitSymbol,
        transactionFee,
        market
      };
      if(Object.values(info).every(v => !!v)) { return info; }
    }
);

export default {
  state,
  transactionFee,
  tokenPrice,
  tokenPriceUnitSymbol,
  transactionInfo,
  market
}