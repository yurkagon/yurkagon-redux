import React from 'react';
import MainPage from '../pages/MainPage';
import { Provider } from '../yurkagon-react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);

export default App;
