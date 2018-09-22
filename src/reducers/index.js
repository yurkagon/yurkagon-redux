import { combineReducers } from '../yurkagon-redux';

import dataReducer from './dataReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  app: appReducer,
  data: dataReducer,
});

export default rootReducer;
