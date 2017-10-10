import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import './CloseButton.scss';


const propTypes = PropTypes && {
  onClick: PropTypes.func.isRequired
};
const defaultProps = {};


class CloseButton extends PureComponent {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() { this.props.onClick(); }

  render() {
    return (
        <span className='CloseButton' onClick={this.onClick}></span>
    );
  }
}

CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
export default CloseButton;
