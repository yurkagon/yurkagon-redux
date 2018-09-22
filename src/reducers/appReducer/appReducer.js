import * as types from '../../actions/app/types';

const initialState = {
  title: 'Hello yura',
  color: '#222'
};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_TITLE:
      return { ...state, title: action.payload };
    case types.SET_COLOR:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export default appReducer;
