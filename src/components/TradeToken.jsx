import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import styles from './TradeToken.scss';
import Pictogram from "./Pictogram";

const propTypes = PropTypes && {};
const defaultProps = {};


class TradeToken extends PureComponent {
  render() {
    const { token } = this.props;
    return (
      <div className='TradeToken'>
        <Pictogram symbol={token}/>
      </div>
    );
  }
}

TradeToken.displayName = 'TradeToken';
TradeToken.propTypes = propTypes;
TradeToken.defaultProps = defaultProps;
export default TradeToken;
