import React, {PureComponent} from 'react';
import {PropTypes} from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';

import styles from './TradeDetails.scss';
import TradeToken from '../components/TradeToken';
import StartTransactionButton from './StartTransactionButton';
import AmountInput from './AmountInput';
import Pictogram from './Pictogram';
const propTypes = PropTypes && {};
const defaultProps = {};

class TradeDetails extends PureComponent {
  render() {
    const {market, price, fee} = this.props;

    return (
      <div className="TradeDetails">
        <section className="TradeDetailsHeading">
          <h3>Choose which Assets to trade</h3>
        </section>
        <section>
          <form>
            <div className="TradeTokenSelector">
              <TradeToken controlName={'from'} token="ETH"/>
              <AmountInput name="deposit" placeHolder="Deposit Amount"/>
            </div>
            <div className="Separator">
              <Pictogram symbol="trade"/>
            </div>
            <div className="TradeTokenSelector">
                <TradeToken controlName={'to'} token="MKR"/>
                <AmountInput name="receive" placeHolder="Receive Amount"/>
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
