import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import Immutable from 'immutable';
import reducers from './reducers';


function initStore(initialState = Immutable.Map()) {
  let middleware = applyMiddleware(thunk, promiseMiddleware());
  if (window.devToolsExtension) {
    middleware = compose(
      middleware,
      window.devToolsExtension && window.devToolsExtension()
    );
  }

  const store = createStore(
    reducers, initialState, middleware
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');  // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default initStore;
