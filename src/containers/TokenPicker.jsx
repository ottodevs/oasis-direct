import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import tokenPickerHandler from '../store/reducers/tokenPicker';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TokenPicker from '../components/TokenPicker';
import tokenPickerSelectors from '../store/selectors/tokenPicker';
import tokensSelectors from '../store/selectors/tokens';
import tokensHandler from '../store/reducers/tokens';


const propTypes = PropTypes && {
};

export class TokenPickerWrapper extends PureComponent {
  render() {
    const {
      isTokenPickerOpen,
      actions,
      tokens,
      isSelected,
      activeTokenControlName
    } = this.props;
    return (
        isTokenPickerOpen ? (
            <TokenPicker
                activeTokenControlName={activeTokenControlName}
                tokens={tokens}
                isSelected={isSelected}
                onTokenSelected={actions.TokenSelected}
                onToggleOpen={actions.ToggleOpen}
            />
        ): null
    );
  }
}

export function mapStateToProps(state, props) {
  return {
    tokens: tokensSelectors.items(state),
    activeTokenControlName: tokenPickerSelectors.activeTokenControlName(state),
    isTokenPickerOpen: tokenPickerSelectors.isOpen(state),
    isSelected: tokensSelectors.isSelected(state, props)
  };
}
export function mapDispatchToProps(dispatch) {
  const actions = {
      ...tokenPickerHandler.actions,
      TokenSelected: tokensHandler.actions.TokenSelected
  };
  return { actions: bindActionCreators(actions, dispatch) };
}

TokenPickerWrapper.propTypes = propTypes;
TokenPickerWrapper.displayName = 'TokenPickerContainer';
export default connect(mapStateToProps, mapDispatchToProps)(TokenPickerWrapper);
