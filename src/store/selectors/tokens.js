import { createSelector } from 'reselect';

const state = (s) => {
  return s.get('tokens');
};
const activeControlDisabledTokens = createSelector(
    state,
    s => s.getIn(['tokenPicker', 'activeTokenControlName']),
    (s, atcn) => s.getIn([ atcn, 'disabled'])
)
const items = createSelector(
    state,
    (s) => s.get('items')
);

export default {
  state,
  items,
  activeControlDisabledTokens
}