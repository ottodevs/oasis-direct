import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import './Button.scss';

const propTypes = PropTypes && {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  text: PropTypes.string.isRequired
};
const defaultProps = {
  type: 'button'
};


class Button extends PureComponent {
  render() {
    const {
      disabled,
      type,
      text,
      onClick
    } = this.props;
    return (
      <button
          onClick={onClick}
          disabled={disabled}
          className={'Button'}
          type={type}
      >
        {text}
      </button>
    );
  }
}

Button.displayName = 'Button';
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
