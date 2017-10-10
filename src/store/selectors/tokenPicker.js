import { createSelector } from 'reselect';

import tokensSelectors from './tokens';

const state = s => s.get('tokenPicker');

const isOpen = createSelector(state, s => s.get('isOpen'));

const activeTokenControlName = createSelector(
    state,
    s => s.get('activeTokenControlName')
);

const selectedToken = createSelector(
    tokensSelectors.state,
    activeTokenControlName,
    (s, atcn) => s.getIn([ atcn, 'value'])
);

export default {
  state,
  isOpen,
  selectedToken,
  activeTokenControlName
}