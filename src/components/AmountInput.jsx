import React, {PureComponent} from 'react';
import {PropTypes} from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import './AmountInput.scss';


const propTypes = PropTypes && {
    name: PropTypes.string.isRequired,
    placeHolder: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };
const defaultProps = {};

class AmountInput extends PureComponent {
  render() {
    const {
      name,
      placeHolder,
      onChange
    } = this.props;
    return (
      <div className={'AmountInput'}>
        <input
            onChange={onChange}
            name={name}
            placeholder={placeHolder}
        />
      </div>
    );
  }
}

AmountInput.displayName = 'AmountInput';
AmountInput.propTypes = propTypes;
AmountInput.defaultProps = defaultProps;
export default AmountInput;
