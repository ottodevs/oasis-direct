import React, {PureComponent} from 'react';
import {PropTypes} from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import './TradeDetails.scss';
import TradeToken from '../components/TradeToken';
import Button from './Button';
import AmountInput from './AmountInput';
import Pictogram from './Pictogram';
import TradeDetailsInfoBox from './TradeDetailsInfoBox';
import TokenPickerContainer from './../containers/TokenPicker';


const propTypes = PropTypes && {
  onAmountBuyChange: PropTypes.func.isRequired,
  onAmountSellChange: PropTypes.func.isRequired,
  onStartTransaction: PropTypes.func.isRequired,
  onToggleTokenPicker: PropTypes.func.isRequired,
};

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
          <section>
            <h3>Enter Order Details</h3>
          </section>
          <section>
            <form>
              <div>
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
              <div>
                <Pictogram symbol={'trade'}/>
              </div>
              <div>
                <TradeToken
                    onToggleTokenPicker={onToggleTokenPicker}
                    controlName={'buy'} token="MKR"/>
                <AmountInput
                    onChange={onAmountBuyChange}
                    name="buy"
                    placeHolder="Receive Amount"
                />
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
