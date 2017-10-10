import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import './TokenPickerItem.scss';
import Pictogram from "./Pictogram";


const propTypes = PropTypes && {
  tokenSymbol: PropTypes.string.isRequired,
  activeTokenControlName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};
const defaultProps = {};


class TokenPickerItem extends PureComponent {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {
      tokenSymbol,
      activeTokenControlName
    } = this.props;

    this.props.onClick({ tokenSymbol, activeTokenControlName });
  }

  render() {
    const { tokenSymbol, isDisabled } = this.props;
    return (
        <div onClick={this.onClick} className='TradeToken'>
          <div>
            {isDisabled? 'yes': 'no'}
            <Pictogram symbol={tokenSymbol}/>
          </div>
          <div>{tokenSymbol}</div>
        </div>
    );
  }
}

TokenPickerItem.displayName = 'TokenPickerItem';
TokenPickerItem.propTypes = propTypes;
TokenPickerItem.defaultProps = defaultProps;
export default TokenPickerItem;
