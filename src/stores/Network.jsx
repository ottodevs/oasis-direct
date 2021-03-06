// Libraries
import {observable} from "mobx";

// Utils
import * as blockchain from "../utils/blockchain";

import * as settings from "../settings";

export default class NetworkStore {
  @observable stopIntervals = false;
  @observable loadingAddress = false;
  @observable loadingFirstAddress = false;
  @observable accounts = [];
  @observable defaultAccount = null;
  @observable isConnected = false;
  @observable latestBlock = null;
  @observable network = "";
  @observable outOfSync = true;
  @observable isHw = false;
  @observable hw = {active: false, showSelector: false, wallet: null, derivationPath: null, addresses: [], loading: false, error: null, cache: {}};
  @observable downloadClient = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  setNetwork = async () => {
    try {
      const result = await blockchain.checkNetwork(this.isConnected, this.network);
      Object.keys(result.data).forEach(key => { this[key] = result.data[key]; });
      if (!this.stopIntervals && result.status) {
        this.setAccount();
        if (!this.hw.active) {
          this.setAccountInterval = setInterval(this.setAccount, 1000);
        }
      }
    } catch(e) {
      console.log(e);
    }
  }

  stopNetwork = () => {
    this.stopIntervals = true;
    blockchain.stopProvider();
    clearInterval(this.setAccountInterval);
    clearInterval(this.setNetworkInterval);
    this.network = "";
    this.hw = {active: false, showSelector: false, wallet: null, derivationPath: null, addresses: [], loading: false, error: null, cache:{}};
    this.accounts = [];
    this.defaultAccount = null;
    this.isConnected = false;
    this.latestBlock = null;
    this.outOfSync = true;
    this.isHw = false;
  }

  setAccount = () => {
    blockchain.getAccounts().then(async accounts => {
      if (this.network && !this.hw.active && accounts && accounts[0] !== blockchain.getDefaultAccount()) {
        const account = await blockchain.getDefaultAccountByIndex(0);
        if (!this.stopIntervals) { // To avoid race condition
          blockchain.setDefaultAccount(account);
        }
      }
      if (!this.stopIntervals) { // To avoid race condition
        const oldDefaultAccount = this.defaultAccount;
        this.defaultAccount = blockchain.getDefaultAccount();
        if (this.defaultAccount && oldDefaultAccount !== this.defaultAccount) {
          this.rootStore.loadContracts();
        }
        if (!this.defaultAccount) {
          this.loadingAddress = false;
        }
      }
    }, () => {});
  }

  // Web3 web client
  setWeb3WebClient = async () => {
    try {
      this.stopIntervals = false;
      this.loadingAddress = true;
      await blockchain.setWebClientProvider();
      this.setNetwork();
      this.setNetworkInterval = setInterval(this.setNetwork, 3000);
    } catch (e) {
      this.loadingAddress = false;
      this.downloadClient = true;
      console.log(e);
    }
  }

  // Hardwallets
  showHW = wallet => {
    this.hw.wallet = wallet;
    this.hw.showSelector = true;
  }

  hideHw = () => {
    this.hw.active = false;
    this.hw.loading = false;
    this.hw.showSelector = false;
    this.hw.wallet = "";
    this.hw.derivationPath = false;
  }

  loadHWAddresses = async (derivationPath = this.hw.derivationPath, amount = 100) => {
    const { wallet } = this.hw;
    try {
      await blockchain.setHWProvider(wallet, settings.hwNetwork, derivationPath, 0, amount);

      if(this.hw.cache[wallet]){
        this.hw.addresses = this.hw.cache[wallet];
      } else {
        this.hw.addresses = await blockchain.getAccounts();
        this.hw.cache[wallet] = this.hw.addresses;
      }

      this.hw.derivationPath = derivationPath;
      this.hw.isConnected = true;
      return this.hw.addresses;
    } catch (e) {
      blockchain.stopProvider();
      console.log(`Error connecting ${wallet}`, e.message);
      return [];
    }
  }

  importAddress = account => {
    try {
      this.hw.active = true;
      this.loadingAddress = true;
      this.stopIntervals = false;
      blockchain.setDefaultAccount(account);
      this.setNetwork();
      this.setNetworkInterval = setInterval(this.setNetwork, 10000);
    } catch (e) {
      this.loadingAddress = false;
      this.hw.addresses = [];
    }
  }
  //

  stopLoadingAddress = () => {
    this.loadingAddress = false;
    this.loadingFirstAddress = false;
    this.hw.showSelector = false;
  }
}
