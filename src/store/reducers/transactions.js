import {handleActions, createAction} from 'redux-actions';
import Immutable from 'immutable';

const START_TRANSACTION = 'TRANSACTIONS/START_TRANSACTION';

const StartTransaction = createAction(
    START_TRANSACTION, (state) => undefined
)

;

const actions = {
  StartTransaction,
};

const reducer = handleActions(
    {
      StartTransaction,
    }
    , Immutable.fromJS({}));

export default {
  actions,
  reducer,
};




