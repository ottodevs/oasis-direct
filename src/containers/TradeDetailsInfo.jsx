import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import tradeDetailsSelectors from './../store/selectors/tradeDetails';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeDetailsInfoBox from '../components/TradeDetailsInfoBox';

const propTypes = PropTypes && {
  actions: PropTypes.object.isRequired
};

export class TradeDetailsInfoWrapper extends PureComponent {
  render() {
    const { transactionInfo } = this.props;
    if(transactionInfo) {
      return (
          (<TradeDetailsInfoBox transactionInfo={transactionInfo}/>)
      );
    }
    return null;
  }
}

export function mapStateToProps(state) {
  return {
    transactionInfo: tradeDetailsSelectors.transactionInfo(state)
  };
}
export function mapDispatchToProps(dispatch) {
  const actions = {};
  return { actions: bindActionCreators(actions, dispatch) };
}

TradeDetailsInfoWrapper.propTypes = propTypes;
TradeDetailsInfoWrapper.displayName = 'TradeDetailsInfoContainer';
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TradeDetailsInfoWrapper);
