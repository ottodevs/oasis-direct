import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import styles from './Pictogram.scss';

const cx = classNames.bind(styles);

const icons = {
  'ETH':"/assets/od-icons/od_ether.svg",
  'MKR':"/assets/od-icons/od_maker.svg",
  'REP':"/assets/od-icons/od_augur.svg",
  'GNT':"/assets/od-icons/od_golem.svg",
  'DGX':"/assets/od-icons/od_digix.svg",
  'SAI':"/assets/od-icons/od_sai.svg",
  'trade':"",
};

const propTypes = PropTypes && {
  size: PropTypes.number,
  symbol: PropTypes.oneOf(Object.keys(icons)),
};

const defaultProps = {
};


class Pictogram extends PureComponent {
  render() {
    const className = cx({
      base: true
    });

    const { symbol } = this.props;

    return (
      <div className=''>
        <img src={icons[symbol]}/>
      </div>
    );
  }
}

Pictogram.displayName = 'Pictogram';
Pictogram.propTypes = propTypes;
Pictogram.defaultProps = defaultProps;
export default Pictogram;
