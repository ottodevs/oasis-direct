import { handleActions, createAction } from 'redux-actions';
import Immutable from 'immutable';

const SET_AMOUNT_SELL = 'TRANSACTIONS/SET_AMOUNT_SELL';
const SET_AMOUNT_BUY = 'TRANSACTIONS/SET_AMOUNT_BUY';
const START_TRANSACTION = 'TRANSACTIONS/START_TRANSACTION';


const setAmountBuy = createAction(
    SET_AMOUNT_BUY,
    ({ target:{ value } }) => value
);

const setAmountSell = createAction(
    SET_AMOUNT_SELL,
    ({ target: { value } }) => value
);
const startTransaction = createAction(
    START_TRANSACTION,
    () => null
);

const actions = {
  setAmountBuy,
  setAmountSell,
  startTransaction
};

const reducer = handleActions(
    {
      [setAmountSell]: (state, {payload}) =>
        state
          .update('amountSell', v => v)
          .update('amountBuy', v => state.get('amountSell') ),
      [setAmountBuy]:  (state, { payload }) => (state)
    }
    , Immutable.fromJS({
      fromToken: null,
      toToken: null,
      amountSell: null,
      amountBuy: 0
    }));

export default {
  actions,
  reducer
};




