import {createAction, handleActions} from 'redux-actions';
import Immutable from 'immutable';

const TOKEN_SELECTED = 'TOKENS/TOKEN_SELECTED';
const DEPOSIT_AMOUNT_CHANGED = 'TOKENS/DEPOSIT_AMOUNT_CHANGED';
const BUY_AMOUNT_CHANGED = 'TOKENS/BUY_AMOUNT_CHANGED';

const TokenSelected = createAction(
    TOKEN_SELECTED,
    (v) => v,
);

const DepositAmountChanged = createAction(
    DEPOSIT_AMOUNT_CHANGED,
    ({ target: { value } }) => parseFloat(value.replace(/\D+/g,'')),
);

const BuyAmountChanged = createAction(
    BUY_AMOUNT_CHANGED,
    ({ target: { value } }) => parseFloat(value.replace(/\D+/g,'')),
);

const actions = {
  TokenSelected,
  BuyAmountChanged,
  DepositAmountChanged
};



const reducer = handleActions(
    {
      [TokenSelected]: (
          state,
          { payload: {tokenSymbol, activeTokenControlName} }
      ) => {
        return state
        .updateIn(
            [activeTokenControlName, 'value'],
            () => tokenSymbol
        );
      },
      [DepositAmountChanged]: (state, {payload}) =>
          state.updateIn(
              ['deposit','amount'],
              v => payload
          ),
      [BuyAmountChanged]: (state, {payload}) =>
          state.updateIn(
            ['buy','amount'],
            v => payload
      ),

    },

    Immutable.fromJS(
        {
          items: [
            { symbol: 'ETH', name: 'Ether' },
            { symbol: 'MKR', name: 'Maker' },
            { symbol: 'REP', name: 'Augur' },
            { symbol: 'GNT', name: 'Golem' },
            { symbol: 'DGX', name: 'Digix' },
            { symbol: 'SAI', name: 'SAI' },
          ],
          deposit: {
            amount: null,
            disabled: [
                'MKR', 'REP', 'GNT', 'DGX','SAI'
            ],
            value: 'ETH',
          },
          buy: {
            amount: null,
            disabled: ['ETH'],
            value: 'SAI',
          },
        },
    ));

export default {
  actions,
  reducer,
};




