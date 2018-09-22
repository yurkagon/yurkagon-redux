import { createStore } from './yurkagon-redux';
import { connectToReact } from './yurkagon-react-redux';
import rootReducer from './reducers/root-reducer';

const logger = (newState, prevState, action) => {
  console.log({prevState});
  console.log({
    action: action.type,
    payload: action.payload,
  });
  console.log({newState});
};

const store = createStore(rootReducer);
store.subscribe('logger', logger);
export const connect = connectToReact(store);

export default store;