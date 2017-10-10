import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import Immutable from 'immutable';

import './TokenPicker.scss';
import TokenPickerItem from './TokenPickerItem';
import CloseButton from './CloseButton';


const propTypes = PropTypes && {
  onTokenSelected: PropTypes.func.isRequired,
  onToggleOpen: PropTypes.func.isRequired,
  tokens: PropTypes.instanceOf(Immutable.List).isRequired,
  activeTokenControlName: PropTypes.string.isRequired,
  selectedToken: PropTypes.string.isRequired,
  disabledTokens: PropTypes.instanceOf(Immutable.List).isRequired
};
const defaultProps = {};


class TokenPicker extends PureComponent {

  tokens() {

    const {
      tokens,
      onTokenSelected,
      activeTokenControlName,
      selectedToken,
      disabledTokens
    } = this.props;

    console.log('dt', disabledTokens, disabledTokens.includes('SAI'));
    return tokens.map(
        token => (
            <TokenPickerItem
                isDisabled={disabledTokens.includes(token.get('symbol'))}
                isSelected={selectedToken===token.get('symbol')}
                key={token.get('symbol')}
                activeTokenControlName={activeTokenControlName}
                onTokenSelected={onTokenSelected}
                token={token}
            />
        )
    )
  }

  render() {
    const { onToggleOpen } = this.props;
    return (
      <div className={'TokenPicker'}>
        <CloseButton onClick={onToggleOpen}/>
        <div className='Tokens'>{this.tokens()}</div>
      </div>
    );
  }
}

TokenPicker.displayName = 'TokenPicker';
TokenPicker.propTypes = propTypes;
TokenPicker.defaultProps = defaultProps;
export default TokenPicker;
