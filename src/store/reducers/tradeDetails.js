import {createAction, handleActions} from 'redux-actions';
import Immutable from 'immutable';

const SET_TOKEN_PRICE =   'TRADE_DETAILS/SET_TOKEN_PRICE';
const SET_TRANSACTION_FEE = 'TRADE_DETAILS/SET_TRANSACTION_FEE';
const SET_TOKEN_UNIT_SYMBOL = 'TRADE_DETAILS/SET_TOKEN_UNIT_SYMBOL';
const SET_TRANSACTION_MARKET = 'TRADE_DETAILS/SET_TRANSACTION_MARKET';


const SetTokenPrice = createAction(
    SET_TOKEN_PRICE, (tokenPrice) => tokenPrice
);

const SetTransactionFee = createAction(
    SET_TRANSACTION_FEE, (transactionFee) => transactionFee
);

const SetTokenPriceUnitSymbol = createAction(
    SET_TOKEN_UNIT_SYMBOL, (unitSymbol) => unitSymbol
)
;

const SetTransactionMarket = createAction(
    SET_TRANSACTION_MARKET, (transactionMarket) => transactionMarket
);

const actions = {
  SetTokenPrice,
  SetTransactionFee,
  SetTokenPriceUnitSymbol,
  SetTransactionMarket
};



const reducer = handleActions({
  [SetTokenPrice]: (state, {payload}) =>
      state
      .update(
          'tokenPrice', v => payload
      ),
  [SetTransactionFee]: (state, {payload}) =>
      state
      .update(
          'transactionFee', v => payload
      ),
  [SetTokenPriceUnitSymbol]: (state, {payload}) =>
      state
      .update(
          'tokenPriceUnitSymbol', v => payload
      ),
  [SetTransactionMarket]: (state, {payload}) =>
      state
      .update('market', v => payload),


}, Immutable.fromJS(
  {
    tokenPrice: 1.22332,
    transactionFee: 0.22,
    tokenPriceUnitSymbol: 'ETH',
    market: ' Oasisdex'
  }
));

export default {
  actions,
  reducer
};




