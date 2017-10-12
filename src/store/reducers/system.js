import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { methodSig, toBytes32, addressToBytes32 } from '../../helpers';
import web3 from  '../../web3';
const settings = require('../../settings');
const dsproxy = require('../../abi/dsproxy');

const GET_BUY_AMOUNT = 'SYSTEM/GET_BUY_AMOUNT';
const GET_PAY_AMOUNT = 'SYSTEM/GET_BUY_AMOUNT';
const START_TRANSACTION = 'SYSTEM/START_TRANSACTION';

const GetBuyAmount = createAction(
  // network: should come from state.network.network
  // proxyAddress: should come from state.system.proxy
  // sellToken: should come from the tokenPicker from
  // receiveToken: should come from the tockenPicker to
  // amount: should come from deposit amount input value
  GET_BUY_AMOUNT, async (network, proxyAddress, sellToken, receiveToken, amount) => {
    this.loadObject(dsproxy.abi, proxyAddress).execute.call(settings[network].proxyContracts.oasisSai,
      `${methodSig('sellAllAmountPayEth(address,address,address,uint256)')}${addressToBytes32(settings[network].otc, false)}${addressToBytes32(settings[network].tokens[receiveToken], false)}${addressToBytes32(settings[network].tokens[sellToken], false)}${toBytes32(0, false)}`,
      { value: web3.toWei(amount) },
      (e, r) => {
        if (!e) {
          console.log(r);
        }
      });
  }
)

const GetPayAmount = createAction(
  GET_PAY_AMOUNT, (state) => undefined
)

const StartTransaction = createAction(
    START_TRANSACTION, (state) => undefined
)

const actions = {
  GetBuyAmount,
  GetPayAmount,
  StartTransaction
};

const reducer = handleActions({
  [StartTransaction]: (state) => state.set('step', 2)
}, Immutable.fromJS(
  {
    step: 1,
    type: 'basic',
  }
));

export default {
  actions,
  reducer
};




