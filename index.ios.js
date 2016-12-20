import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore,  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './app/containers/App';
import reducers from './app/reducers';
import rootSaga from './app/sagas';

export default class SparxoEventChat extends Component {
  render() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('SparxoEventChat', () => SparxoEventChat);
