import { combineReducers } from '../yurkagon-redux';

import dataReducer from './dataReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  data: dataReducer,
});

export default rootReducer;
