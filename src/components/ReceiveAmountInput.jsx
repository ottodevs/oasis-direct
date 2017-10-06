import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import styles from './ReceiveAmountInput.scss';

const cx = classNames.bind(styles);

const propTypes = PropTypes && {};
const defaultProps = {};


class ReceiveAmountInput extends PureComponent {
  render() {
    const className = cx({
      base: true
    });
    return (
      <div className={className}>
        <input placeholder={'Receive amount'} name={'receiveAmount'}/>
      </div>
    );
  }
}

ReceiveAmountInput.displayName = 'ReceiveAmountInput';
ReceiveAmountInput.propTypes = propTypes;
ReceiveAmountInput.defaultProps = defaultProps;
export default ReceiveAmountInput;
