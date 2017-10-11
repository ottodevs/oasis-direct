import { createSelector } from 'reselect';
import tokensSelectors from './tokens';

const state = s => s.get('transactions');

const canStartTransaction = createSelector(
    tokensSelectors.buyTokenAmount,
    tokensSelectors.depositTokenAmount,
    (bta, dta) => !!(dta && bta)
);

const isTokenPickerOpen = createSelector(
    state,
    s => s.get('isTokenPickerOpen')
);

export default {
  state,
  canStartTransaction,
  isTokenPickerOpen
}