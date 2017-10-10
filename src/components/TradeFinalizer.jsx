import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import './TradeFinalizer.scss';
import TransactionSummaryBox from "./TransactionSummaryBox";


const propTypes = PropTypes && {
  children: PropTypes.node
};
const defaultProps = {};

const NeedHelpBox = () => (
  <div>
    Need help? Contact us on <a href="http://chat.makerdao.com">chat.makerdao.com</a>
  </div>
);

const TRANSACTION_TYPE_DEPOSIT = 'TRANSACTIONS/TRANSACTION_TYPE_DEPOSIT';
const TRANSACTION_TYPE_BUY = 'TRANSACTIONS/TRANSACTION_TYPE_BUY';
const TRANSACTION_STATUS_SIGN = 'TRANSACTIONS/TRANSACTION_STATUS_SIGN';
const TRANSACTION_STATUS_WAITING = 'TRANSACTIONS/TRANSACTION_STATUS_WAITING';
class TradeFinalizer extends PureComponent {
  transactionsList = [
    {
      heading: 'Transaction 1',
      type: TRANSACTION_TYPE_DEPOSIT,
      status: TRANSACTION_STATUS_SIGN,
      amount: 1234.12345,
      token: 'ETH'

    },
    {
      heading: 'Transaction 2',
      type: TRANSACTION_TYPE_BUY,
      status: TRANSACTION_STATUS_WAITING,
      amount: 22324.12345,
      token: 'ETH'

    },

  ];
  transactions() {
    return this.transactionsList.map(
        (t, i) => (<TransactionSummaryBox key={i} {...t}/>)
    )
  }
  render() {
    return (
      <div className={'TradeFinalizer'}>
        <div>
          <h3>Finalize trade</h3>
        </div>
        <div>
          {this.transactions()}
        </div>
        <div>
          <NeedHelpBox/>
        </div>
      </div>
    );
  }
}

TradeFinalizer.displayName = 'TradeFinalizer';
TradeFinalizer.propTypes = propTypes;
TradeFinalizer.defaultProps = defaultProps;
export default TradeFinalizer;
