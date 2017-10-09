import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeDetails from "../components/TradeDetails";
import transactionsHandler from '../store/reducers/transactions';
import transactionsSelectors from '../store/selectors/transactions';
import tokenPickerHandler from '../store/reducers/tokenPicker';


const propTypes = PropTypes && {
  actions: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired
};


export class TradeDetailsWrapper extends PureComponent {
  render() {

    const {
      actions,
      disabled,
    } = this.props;

    return (
      <TradeDetails
        onAmountBuyChange={actions.setAmountBuy}
        onAmountSellChange={actions.setAmountSell}
        onStartTransaction={actions.startTransaction}
        onToggleTokenPicker={actions.ToggleTokenPicker}
        disabled={disabled}
      />
    );
  }
}

export function mapStateToProps(state) {
  return {
    disabled: transactionsSelectors.canStartTransaction(state),
  };
}
export function mapDispatchToProps(dispatch) {
  const actions = {
    ...transactionsHandler.actions,
    ToggleTokenPicker: tokenPickerHandler.actions.ToggleOpen
  };
  return { actions: bindActionCreators(actions, dispatch) };
}

TradeDetailsWrapper.propTypes = propTypes;
TradeDetailsWrapper.displayName = 'TradeDetailsContainer';
export default connect(mapStateToProps, mapDispatchToProps)(TradeDetailsWrapper);
