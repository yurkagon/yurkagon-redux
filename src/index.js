import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from './yurkagon-redux';

ReactDOM.render(
  <Provider store={store} ref={provider => {store.setProvider(provider)}}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
