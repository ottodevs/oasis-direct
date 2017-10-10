import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import './TradeToken.scss';
import Pictogram from "./Pictogram";


const propTypes = PropTypes && {
  tokenSymbol: PropTypes.string,
  controlName: PropTypes.string,
  onToggleTokenPicker: PropTypes.func.isRequired
};
const defaultProps = {};


class TradeToken extends PureComponent {

  onClick() {
    const { controlName, token } = this.props;
    this.props.onToggleTokenPicker(controlName, token);
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  formControl() {
    const { controlName } = this.props;
    return controlName ? (<input name={controlName} type='hidden'/>) : null;
  }
  render() {
    const { tokenSymbol } = this.props;
    console.log(tokenSymbol);
    return (
      <div onClick={this.onClick} className={'TradeToken'}>
        {this.formControl()}
        <Pictogram symbol={tokenSymbol}/>
      </div>
    );
  }
}

TradeToken.displayName = 'TradeToken';
TradeToken.propTypes = propTypes;
TradeToken.defaultProps = defaultProps;
export default TradeToken;
