import { createSelector } from 'reselect';

const state = s => s.get('tokenPicker');

const isOpen = createSelector(state, s => s.get('isOpen'));
const activeTokenControlName = createSelector(
    state,
    s => s.get('activeTokenControlName')
);


export default {
  isOpen,
  activeTokenControlName
}