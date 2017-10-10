import React, {PureComponent} from 'react';
import {PropTypes} from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import './TradeDetails.scss';
import TradeToken from '../components/TradeToken';
import AmountInput from './AmountInput';
import Pictogram from './Pictogram';
import Button from './Button';
import TradeDetailsInfoBox from './TradeDetailsInfoBox';
import TokenPickerContainer from './../containers/TokenPicker'



const propTypes = PropTypes && {};
const defaultProps = {};

class TradeDetails extends PureComponent {
  render() {
    const {
      onAmountBuyChange,
      onAmountSellChange,
      onStartTransaction,
      onToggleTokenPicker,
      disabled,
    } = this.props;

    return (
      <div className={'TradeDetails'}>
        <TokenPickerContainer/>
        <section className="TradeDetailsHeading">
          <h3>Choose which Assets to trade</h3>
        </section>
        <section>
          <form>
            <div>
              <div className='TradeTokenSelector'>
                <TradeToken
                  onToggleTokenPicker={onToggleTokenPicker}
                  controlName={'deposit'}
                  token="ETH"
                />
                <AmountInput
                  onChange={onAmountSellChange}
                  name="deposit"
                  placeHolder="Deposit Amount"
                />
              </div>
              <div className="Separator">
                <Pictogram symbol={'trade'}/>
              </div>
              <div className='TradeTokenSelector'>
                <TradeToken
                  onToggleTokenPicker={onToggleTokenPicker}
                  controlName={'buy'} token="MKR"/>
                <AmountInput
                  onChange={onAmountBuyChange}
                  name="buy"
                  placeHolder="Receive Amount"
                />
              </div>
            </div>
            <div>
              <TradeDetailsInfoBox/>
            </div>
            <div>
              <Button
                  disabled={disabled}
                  onClick={onStartTransaction}
                  text={'Start transaction'}
              />
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
