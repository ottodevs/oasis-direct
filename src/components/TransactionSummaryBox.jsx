import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import './TransactionSummaryBox.scss';


const propTypes = PropTypes && {
  heading: PropTypes.string.isRequired,
  type: PropTypes.oneOf([]),
  status: PropTypes.oneOf([]),
  amount: PropTypes.object.isRequired,
  token: PropTypes.oneOf([])
};
const defaultProps = {};


class TransactionSummaryBox extends PureComponent {
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
          <span className='transaction-type'>{type}</span>
          <span className='transaction-amount'>
            {amount}
            <span className='token'>{token}</span>
          </span>
          <span className='transaction-status'>{status}</span>
        </div>
      </div>
    );
  }
}

TransactionSummaryBox.displayName = 'TransactionSummaryBox';
TransactionSummaryBox.propTypes = propTypes;
TransactionSummaryBox.defaultProps = defaultProps;
export default TransactionSummaryBox;
