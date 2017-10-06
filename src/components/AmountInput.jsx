import React, {PureComponent} from 'react';
import {PropTypes} from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import styles from './AmountInput.scss';

const cx = classNames.bind(styles);

const propTypes = PropTypes && {
    name: PropTypes.string.isRequired,
    placeHolder: PropTypes.string
  };
const defaultProps = {};

class AmountInput extends PureComponent {
  render() {
    const className = cx({
      base: true
    });
    const {name, placeHolder} = this.props;
    return (
      <div className={className}>
        <input name={name} placeholder={placeHolder}/>
      </div>
    );
  }
}

AmountInput.displayName = 'AmountInput';
AmountInput.propTypes = propTypes;
AmountInput.defaultProps = defaultProps;
export default AmountInput;
