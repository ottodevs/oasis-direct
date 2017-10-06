import {
  combineReducers,
} from 'redux-immutable';

import system from './system';
import tokens from './tokens';
import transactions from "./transactions";
import network from './network';
import params from './params';


export default combineReducers({
  ['system']:        system.reducer,
  ['tokens']:        tokens.reducer,
  ['network']:       network.reducer,
  ['transaction']:   transactions.reducer,
  ['params']:        params.reducer

})