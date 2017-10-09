import { handleActions, createAction } from 'redux-actions';
import Immutable from 'immutable';

const TOGGLE_OPEN = 'TOKEN_PICKER/TOGGLE_OPEN';
const SET_TOKEN_CONTROL_NAME = 'TOKEN_PICKER/SET_TOKEN_CONTROL_NAME';
const RESET_TOKEN_CONTROL_NAME = 'TOKEN_PICKER/RESET_TOKEN_CONTROL_NAME';

/**
 * Toggle picker open / closed.
 */
const ToggleOpen = createAction(
    TOGGLE_OPEN,
    (payload) => payload
)

/**
 * Sets name of token control we pick token type for
 */
const SetTokenControlName = createAction(
    SET_TOKEN_CONTROL_NAME,
    (v) => v
);


const ResetTokenControlName = createAction(
    RESET_TOKEN_CONTROL_NAME,
    () => null
);


const actions = {
  ToggleOpen,
  SetTokenControlName,
  ResetTokenControlName
};

const reducer = handleActions(
    {
      [ToggleOpen]: (state, { payload }) =>
        state
          .update('isOpen', v => !v)
          .update('activeTokenControlName', () => payload)
      ,
      [SetTokenControlName]: (state, {payload}) =>
        state
          .update('activeTokenControlName', () => payload),
      [ResetTokenControlName]: (state) =>
          state
          .update('activeTokenControlName', () => null)

    }
    , Immutable.fromJS({
      activeTokenControlName: null,
      isOpen: false,
    }));

export default {
  actions,
  reducer
};




