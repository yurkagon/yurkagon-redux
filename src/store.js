import { createStore } from './yurkagon-redux';
import rootReducer from './reducers/root-reducer';

const store = createStore(rootReducer);
// store.subscribe('log', ({ profile}) => console.log(profile.name));

export const connect = store.connect;
export default store;