import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();
const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <Router routes={routes} />
  </Provider>,
  rootElement
);
