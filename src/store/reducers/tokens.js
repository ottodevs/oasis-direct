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
      [TokenSelected]: (state, { payload }) => {
        return state
        .updateIn(
            ['buy', 'symbol'],
            () => payload.tokenSymbol
        );
      }
    },

    Immutable.fromJS(
        {
          items: [
            { symbol: 'ETH' },
            { symbol: 'MKR' },
            { symbol: 'REP' },
            { symbol: 'GNT' },
            { symbol: 'DGX' },
            { symbol: 'SAI' },
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




