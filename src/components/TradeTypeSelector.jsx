import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import styles from './TradeTypeSelector.scss';

const cx = classNames.bind(styles);

const propTypes = PropTypes && {
  children: PropTypes.node
};
const defaultProps = {};


class TradeTypeSelector extends PureComponent {
  render() {
    const className = cx({
      base: true
    });
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

TradeTypeSelector.displayName = 'TradeTypeSelector';
TradeTypeSelector.propTypes = propTypes;
TradeTypeSelector.defaultProps = defaultProps;
export default TradeTypeSelector;
