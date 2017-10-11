import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import './TradeDetailsInfoBox.scss';


const propTypes = PropTypes && {
  transactionInfo: PropTypes.shape({
    market: PropTypes.string,
    tokenPrice: PropTypes.number,
    transactionFee: PropTypes.number,
    tokenPriceUnitSymbol: PropTypes.string
  })
};
const defaultProps = {};


class TradeDetailsInfoBox extends PureComponent {
  render() {
    const {
      transactionInfo: {
        market,
        tokenPrice,
        transactionFee,
        tokenPriceUnitSymbol
      }
    } = this.props;
    return (
      <div className={'TradeDetailsInfoBox'}>
        <span>
          <span className='Value'>{market}</span>
        </span>
        <span>
          <span className="Label">Price </span>
          <span className='Value'>{tokenPrice} {tokenPriceUnitSymbol}</span>
        </span>
        <span>
          <span className="Label">Fee </span>
          <span className='Value'>{transactionFee} ETH</span>
        </span>
      </div>
    );
  }
}

TradeDetailsInfoBox.displayName = 'TradeDetailsInfoBox';
TradeDetailsInfoBox.propTypes = propTypes;
TradeDetailsInfoBox.defaultProps = defaultProps;
export default TradeDetailsInfoBox;
