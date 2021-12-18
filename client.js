import 'regenerator-runtime/runtime'

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './client/src/Redux/store';

import App from './client/app';
import ErrorBoundary from './client/src/Components/ErrorBoundary';

ReactDOM.render(
        <ErrorBoundary>
          <Provider store={store}>
            <App />
          </Provider>
        </ErrorBoundary>,
        document.getElementById('app')
      );