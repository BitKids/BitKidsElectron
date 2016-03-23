import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { createStore } from 'redux';
import routes from './routes';
import rootReducer from './reducers'

const store = createStore(rootReducer);
const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <Router routes={routes} />
  </Provider>,
  rootElement
);