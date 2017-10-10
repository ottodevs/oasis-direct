import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import './TokenPickerItem.scss';
import Pictogram from "./Pictogram";


const propTypes = PropTypes && {
  tokenSymbol: PropTypes.string.isRequired,
  activeTokenControlName: PropTypes.string.isRequired,
  onTokenSelected: PropTypes.func.isRequired,
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
      token,
      activeTokenControlName
    } = this.props;
    this.props.onTokenSelected({ tokenSymbol: token.get('symbol'), activeTokenControlName });

  }

  render() {
    const {
      token,
      isDisabled,
      isSelected
    } = this.props;
    const className =
        `TradeToken 
        ${isSelected ? 'TradeToken--selected':''} 
        ${isDisabled ? 'TradeToken--disabled':''}
        `;
    return (
        <div onClick={this.onClick} className={className}>
          <div>
            <Pictogram symbol={token.get('symbol')}/>
          </div>
          <div className="TradeTokenName">{token.get('name')}</div>
        </div>
    );
  }
}

TokenPickerItem.displayName = 'TokenPickerItem';
TokenPickerItem.propTypes = propTypes;
TokenPickerItem.defaultProps = defaultProps;
export default TokenPickerItem;
