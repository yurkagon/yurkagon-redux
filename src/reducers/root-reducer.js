import { combineReducers } from '../yurkagon-redux';

import dataReducer from './data-reducer';
import profileReducer from './profile-reducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  data: dataReducer,
});

export default rootReducer;