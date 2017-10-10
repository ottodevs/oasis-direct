import {createAction, handleActions} from 'redux-actions';
import Immutable from 'immutable';

const TOKEN_SELECTED = 'TOKENS/TOKEN_SELECTED';

const TokenSelected = createAction(
    TOKEN_SELECTED,
    (v) => v,
);

const actions = {
  TokenSelected,
};

const reducer = handleActions(
    {
      [TokenSelected]: (
          state,
          { payload: {tokenSymbol, activeTokenControlName} }
      ) => {
        return state
        .updateIn(
            [activeTokenControlName, 'symbol'],
            () => tokenSymbol
        );
      }
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




