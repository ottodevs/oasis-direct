import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import styles from './TradeToken.scss';
import Pictogram from "./Pictogram";

const cx = classNames.bind(styles);

const propTypes = PropTypes && {
  controlName: PropTypes.string.isRequired
};
const defaultProps = {};


class TradeToken extends PureComponent {
  render() {
    const className = cx({
      base: true
    });
    const { controlName, token } = this.props;
    return (
      <div className={className}>
        <input name={controlName} type='hidden'/>
        <Pictogram symbol={token}/>
      </div>
    );
  }
}

TradeToken.displayName = 'TradeToken';
TradeToken.propTypes = propTypes;
TradeToken.defaultProps = defaultProps;
export default TradeToken;
