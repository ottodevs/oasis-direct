import {
  combineReducers,
} from 'redux-immutable';

import system from './system';
import tokens from './tokens';
import transactions from "./transactions";
import network from './network';
import params from './params';
import tokenPicker from './tokenPicker';
import tradeDetails from './tradeDetails';



export default combineReducers({
  'system':        system.reducer,
  'tokens':        tokens.reducer,
  'network':       network.reducer,
  'transactions':  transactions.reducer,
  'params':        params.reducer,
  'tokenPicker':   tokenPicker.reducer,
  'tradeDetails':   tradeDetails.reducer

})