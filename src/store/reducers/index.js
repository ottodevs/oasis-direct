import {
  combineReducers,
} from 'redux-immutable';

import setAssetsStep from './setAssetsStep';
import setDetailsStep from './setDetailsStep';
import tradingStep from './tradingStep';
import system from './system';

export default combineReducers({
  ['setAssetsStep']: setAssetsStep.reducer,
  ['setDetailStep']: setDetailsStep.reducer,
  ['tradingStep']:   tradingStep.reducer,
  ['system']:        system.reducer
})