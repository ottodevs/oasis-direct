import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import styles from './StartTransactionButton.css';

const propTypes = PropTypes && {
  disabled: PropTypes.bool
};
const defaultProps = {};


class StartTransactionButton extends PureComponent {
  render() {
    const { disabled } = this.props;
    return (
      <button disabled={disabled} className={'StartTransactionButton'} type='submit'>
        Start transaction
      </button>
    );
  }
}

StartTransactionButton.displayName = 'StartTransactionButton';
StartTransactionButton.propTypes = propTypes;
StartTransactionButton.defaultProps = defaultProps;
export default StartTransactionButton;
