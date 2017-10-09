import React, {PureComponent} from 'react';
import {PropTypes} from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import './AmountInput.scss';

const propTypes = PropTypes && {
    name: PropTypes.string.isRequired,
    placeHolder: PropTypes.string
  };
const defaultProps = {};

class AmountInput extends PureComponent {
  render() {
    const {name, placeHolder} = this.props;
    return (
      <div className='TakerTokenAmount'>
        <input type="number"
               name={name} placeholder={placeHolder}
               onFocus={(e) => e.target.placeholder = ""}
               onBlur={(e) => e.target.placeholder = placeHolder}
        />
      </div>
    );
  }
}

AmountInput.displayName = 'AmountInput';
AmountInput.propTypes = propTypes;
AmountInput.defaultProps = defaultProps;
export default AmountInput;
