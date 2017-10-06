import React, {PureComponent} from 'react';
import {PropTypes} from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import styles from './TradeDetails.scss';
import TradeToken from '../components/TradeToken';
import StartTransactionButton from './StartTransactionButton';
import DepositAmountInput from './DepositAmountInput';
import ReceiveAmountInput from './ReceiveAmountInput';
import Pictogram from './Pictogram';

const cx = classNames.bind(styles);

const propTypes = PropTypes && {};
const defaultProps = {};

class TradeDetails extends PureComponent {
  render() {
    const className = cx({
      base: true,
    });

    const { market, price, fee } = this.props;

    return (
        <div className={className}>
          <section>
            <h3>Enter Order Details</h3>
          </section>
          <section>
            <form>
              <div>
                <TradeToken controlName={'from'}/>
                <Pictogram/>
                <TradeToken controlName={'to'}/>
              </div>
              <div>
                <div>
                  <DepositAmountInput/>
                </div>
                <div>
                  <ReceiveAmountInput/>
                </div>
              </div>
              <div>
                <span>{market}</span>
                <span>{price}</span>
                <span>{fee}</span>
              </div>
              <div>
                <StartTransactionButton/>
              </div>
            </form>
          </section>
        </div>
    );
  }
}

TradeDetails.displayName = 'TradeDetails';
TradeDetails.propTypes = propTypes;
TradeDetails.defaultProps = defaultProps;
export default TradeDetails;
