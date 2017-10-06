import { handleActions } from 'redux-actions';

const actions = {};

const reducer = handleActions({},  {
  weth: '',
  mkr: '',
  sai: ''
});

export default {
  actions,
  reducer
};




