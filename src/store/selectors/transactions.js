import { createSelector } from 'reselect';

const state = s => s.get('transactions');

const canStartTransaction = createSelector(
    state,
    s => false
);

const isTokenPickerOpen = createSelector(
    state,
    s => s.get('isTokenPickerOpen')
);

export default {
  canStartTransaction,
  isTokenPickerOpen
}