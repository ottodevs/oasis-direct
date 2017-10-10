import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import './TransactionSummaryBox.scss';

const TRANSACTION_TYPE_DEPOSIT = 'TRANSACTIONS/TRANSACTION_TYPE_DEPOSIT';
const TRANSACTION_TYPE_BUY = 'TRANSACTIONS/TRANSACTION_TYPE_BUY';
const TRANSACTION_STATUS_SIGN = 'TRANSACTIONS/TRANSACTION_STATUS_SIGN';
const TRANSACTION_STATUS_WAITING = 'TRANSACTIONS/TRANSACTION_STATUS_WAITING';


const propTypes = PropTypes && {
  heading: PropTypes.string.isRequired,
  type: PropTypes.oneOf(
    [
      TRANSACTION_TYPE_BUY,
      TRANSACTION_TYPE_DEPOSIT
    ]
  ),
  status: PropTypes.oneOf(
    [
      TRANSACTION_STATUS_SIGN,
      TRANSACTION_STATUS_WAITING
    ]
  ),
  amount: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired // TODO add list from config
};
const defaultProps = {};



class TransactionSummaryBox extends PureComponent {

  static getTransactionTypeLabel(t) {
    switch (t) {
      case TRANSACTION_TYPE_BUY: return 'Buying';
      case TRANSACTION_TYPE_DEPOSIT: return 'Depositing';
      default:
    }
  }

  static getTransactionStatusLabel(t) {
    switch (t) {
      case TRANSACTION_STATUS_WAITING: return 'Waiting';
      case TRANSACTION_STATUS_SIGN: return 'Sign';
      default:
    }
  }

  render() {

    const {
      heading,
      type,
      status,
      amount,
      token
    } = this.props;

    return (
      <div className={'TransactionSummaryBox'}>
        <h4>{heading}</h4>
        <div>
          <span className='transaction-type'>
            {TransactionSummaryBox.getTransactionTypeLabel(type)}
          </span>
          <span className='transaction-amount'>
            {amount}
            <span className='token'>{token}</span>
          </span>
          <span className='transaction-status'>
            {TransactionSummaryBox.getTransactionStatusLabel(status)}
            </span>
        </div>
      </div>
    );
  }
}

TransactionSummaryBox.displayName = 'TransactionSummaryBox';
TransactionSummaryBox.propTypes = propTypes;
TransactionSummaryBox.defaultProps = defaultProps;
export default TransactionSummaryBox;
