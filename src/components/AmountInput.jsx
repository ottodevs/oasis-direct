import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import styles from './AmountInput.scss';

const cx = classNames.bind(styles);

const propTypes = PropTypes && {
  children: PropTypes.node
};
const defaultProps = {};


class AmountInput extends PureComponent {
  render() {
    const className = cx({
      base: true
    });
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

AmountInput.displayName = 'AmountInput';
AmountInput.propTypes = propTypes;
AmountInput.defaultProps = defaultProps;
export default AmountInput;
