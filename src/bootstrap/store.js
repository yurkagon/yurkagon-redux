import { createStore } from '../yurkagon-redux';
import rootReducer from '../reducers';
import logger from '../helpers/redux-logger';

const store = createStore(rootReducer);
store.subscribe('logger', logger);

export default store;
