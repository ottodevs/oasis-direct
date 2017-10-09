import React, {PureComponent} from 'react';
import {PropTypes} from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

const icons = {
  'ETH': "/assets/od-icons/od_ether.svg",
  'MKR': "/assets/od-icons/od_maker.svg",
  'REP': "/assets/od-icons/od_augur.svg",
  'GNT': "/assets/od-icons/od_golem.svg",
  'DGX': "/assets/od-icons/od_digix.svg",
  'SAI': "/assets/od-icons/od_sai.svg",
  'trade': "/assets/od-icons/od_transition_arrow.svg",
};

const propTypes = PropTypes && {
    size: PropTypes.number,
    symbol: PropTypes.oneOf(Object.keys(icons)),
  };

const defaultProps = {};


class Pictogram extends PureComponent {
  render() {
    const {symbol} = this.props;

    return (
      <img src={icons[symbol]} alt={symbol} className="Pictogram"/>
    );
  }
}

Pictogram.displayName = 'Pictogram';
Pictogram.propTypes = propTypes;
Pictogram.defaultProps = defaultProps;
export default Pictogram;
