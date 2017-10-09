import { createSelector } from 'reselect';

const state = (s, p) => s.get('tokens');

const items = createSelector(state, s => s.get('items'));
const isSelected = createSelector(state, s => !!s.get('isOpen'));

export default {
  items,
  isSelected
}