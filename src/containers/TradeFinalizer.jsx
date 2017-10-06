import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeFinalizer from "../components/TradeFinalizer";

const propTypes = PropTypes && {
  actions: PropTypes.object.isRequired
};

export class TradeFinalizerWrapper extends PureComponent {
  render() {
    return (
      <TradeFinalizer/>
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

TradeFinalizerWrapper.propTypes = propTypes;
TradeFinalizerWrapper.displayName = 'TradeFinalizer';
export default connect(mapStateToProps, mapDispatchToProps)(TradeFinalizerWrapper);
