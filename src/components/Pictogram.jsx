import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import styles from './Pictogram.scss';

const cx = classNames.bind(styles);

const propTypes = PropTypes && {
  size: PropTypes.number,
  symbol: PropTypes.oneOf([
    'ether',
    'maker',
    'augur',
    'golem',
    'digix',
    'SAI',
    'trade'
  ])
};
const defaultProps = {
};


class Pictogram extends PureComponent {
  render() {
    const className = cx({
      base: true
    });
    return (
      <div className={className}>
      </div>
    );
  }
}

Pictogram.displayName = 'Pictogram';
Pictogram.propTypes = propTypes;
Pictogram.defaultProps = defaultProps;
export default Pictogram;
