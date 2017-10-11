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
          <span className='market'>{market}</span>
        </span>
        <span>
          <span>Price</span>
          <span className='amount'>{tokenPrice}</span>
          <span className='token'>{tokenPriceUnitSymbol}</span>
        </span>
        <span>
          <span>Fee</span>
          <span className='amount'>{transactionFee}</span>
          <span className='token'>{tokenPriceUnitSymbol}</span>
        </span>
      </div>
    );
  }
}

TradeDetailsInfoBox.displayName = 'TradeDetailsInfoBox';
TradeDetailsInfoBox.propTypes = propTypes;
TradeDetailsInfoBox.defaultProps = defaultProps;
export default TradeDetailsInfoBox;
