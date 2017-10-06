import { createSelector } from 'reselect';

const state = s => s.get('system');

const activeStep = createSelector(state, s => s.get('step'));

export default {
  activeStep
}