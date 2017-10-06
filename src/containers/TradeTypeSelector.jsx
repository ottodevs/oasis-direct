import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeTypeSelector from "../components/TradeTypeSelector";

const propTypes = PropTypes && {
  actions: PropTypes.object.isRequired
};

export class TradeTypeSelectorWrapper extends PureComponent {
  render() {
    return (
      <TradeTypeSelector/>
    );
  }
}

export function mapStateToProps(state) {
  return {};
}
export function mapDispatchToProps(dispatch) {
  const actions = {};
  return { actions: bindActionCreators(actions, dispatch) };
}

TradeTypeSelectorWrapper.propTypes = propTypes;
TradeTypeSelectorWrapper.displayName = 'TradeTypeSelector';
export default connect(mapStateToProps, mapDispatchToProps)(TradeTypeSelectorWrapper);
