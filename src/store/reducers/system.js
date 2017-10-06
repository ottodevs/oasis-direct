import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

const actions = {};

const reducer = handleActions({}, Immutable.fromJS(
  {
    step: 1,
    type: 'basic',
    from: null,
    to: null,
    amountSell: null,
    amountBuy: 0,
  }
));

export default {
  actions,
  reducer
};




