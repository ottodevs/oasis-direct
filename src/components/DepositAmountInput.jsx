import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import styles from './DepositAmountInput.scss';

const cx = classNames.bind(styles);

const propTypes = PropTypes && {
  children: PropTypes.node
};
const defaultProps = {};


class DepositAmountInput extends PureComponent {
  render() {
    const className = cx({
      base: true
    });
    return (
      <div className={className}>
        <input placeholder={'Deposit amount'} name={'depositAmount'}/>
      </div>
    );
  }
}

DepositAmountInput.displayName = 'DepositAmountInput';
DepositAmountInput.propTypes = propTypes;
DepositAmountInput.defaultProps = defaultProps;
export default DepositAmountInput;
