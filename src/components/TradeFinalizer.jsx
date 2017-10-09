import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import './TradeFinalizer.scss';
import TransactionSummaryBox from "./TransactionSummaryBox";


const propTypes = PropTypes && {
  children: PropTypes.node
};
const defaultProps = {};

const NeedHelpBox = () => (
  <div>
    Need help? Contact us on <a href="http://chat.makerdao.com">chat.makerdao.com</a>
  </div>
);

class TradeFinalizer extends PureComponent {
  render() {
    return (
      <div className={'TradeFinalizer'}>
        <div>
          <h3>Finalize trade</h3>
        </div>
        <div>
          <TransactionSummaryBox/>
        </div>
        <div>
          <NeedHelpBox/>
        </div>
      </div>
    );
  }
}

TradeFinalizer.displayName = 'TradeFinalizer';
TradeFinalizer.propTypes = propTypes;
TradeFinalizer.defaultProps = defaultProps;
export default TradeFinalizer;
