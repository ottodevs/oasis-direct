import { createSelector } from 'reselect';
import tokenPickerSelectors from './tokenPicker';


const state = (s) => {
  return s.get('tokens');
};
const activeControlDisabledTokens = createSelector(
    state,
    tokenPickerSelectors.activeTokenControlName,
    (s, atcn) => s.getIn([ atcn, 'disabled'])
)
const items = createSelector(
    state,
    (s) => s.get('items')
);

const isSelected = createSelector(
    state,
    (s) => !!s.get('isOpen')
);

const disabledTokens = createSelector(
    state,
    (s, act) => {
      console.log({act});
      s.getIn(['buy','disabled']);
    }

);

export default {
  items,
  isSelected,
  activeControlDisabledTokens
}