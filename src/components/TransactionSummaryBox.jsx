import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import styles from './TransactionSummaryBox.scss';

const cx = classNames.bind(styles);

const propTypes = PropTypes && {
  children: PropTypes.node
};
const defaultProps = {};


class TransactionSummaryBox extends PureComponent {
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

TransactionSummaryBox.displayName = 'TransactionSummaryBox';
TransactionSummaryBox.propTypes = propTypes;
TransactionSummaryBox.defaultProps = defaultProps;
export default TransactionSummaryBox;
