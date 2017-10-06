import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import styles from './TradeDetailsInfoBox.scss';

const cx = classNames.bind(styles);

const propTypes = PropTypes && {
  children: PropTypes.node
};
const defaultProps = {};


class TradeDetailsInfoBox extends PureComponent {
  render() {
    const className = cx({
      base: true
    });
    const { market, price, fee, token } = this.props;
    return (
      <div className={className}>
        <span>
          <span className='market'>{market}</span>
        </span>
        <span>
          <span>Price</span>
          <span className='amount'>{price}</span>
          <span className='token'>{token}</span>
        </span>
        <span>
          <span>Fee</span>
          <span className='amount'>{fee}</span>
          <span className='token'>{token}</span>
        </span>
      </div>
    );
  }
}

TradeDetailsInfoBox.displayName = 'TradeDetailsInfoBox';
TradeDetailsInfoBox.propTypes = propTypes;
TradeDetailsInfoBox.defaultProps = defaultProps;
export default TradeDetailsInfoBox;
