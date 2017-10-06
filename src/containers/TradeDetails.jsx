import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeDetails from "../components/TradeDetails";

const propTypes = PropTypes && {
  actions: PropTypes.object.isRequired
};


export class TradeDetailsWrapper extends PureComponent {
  render() {
    return (
      <TradeDetails></TradeDetails>
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

TradeDetailsWrapper.propTypes = propTypes;
TradeDetailsWrapper.displayName = 'TradeDetails';
export default connect(mapStateToProps, mapDispatchToProps)(TradeDetailsWrapper);
