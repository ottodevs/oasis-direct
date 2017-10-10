import { createSelector } from 'reselect';

const state = (s) => {
  return s.get('tokens');
};
const activeControlDisabledTokens = createSelector(
    state,
    s => s.getIn(['tokenPicker', 'activeTokenControlName']),
    (s, atcn) => s.getIn([ atcn, 'disabled'])
);
const items = createSelector(
    state,
    (s) => s.get('items')
);

const depositTokenValue = createSelector(
    state,
    (s) => s.getIn(['deposit', 'value'])
);

const depositTokenAmount = createSelector(
    state,
    (s) => s.getIn(['deposit', 'amount'])
);

const buyTokenValue = createSelector(
    state,
    (s) => s.getIn(['buy', 'value'])
);

const buyTokenAmount = createSelector(
    state,
    (s) => s.getIn(['buy', 'amount'])
);


export default {
  state,
  items,
  depositTokenValue,
  buyTokenValue,
  depositTokenAmount,
  buyTokenAmount,
  activeControlDisabledTokens
}