import * as types from '../../actions/app/types';

const initialState = {
  title: 'Hello yura',
};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_TITLE:
      return {...state, title: action.payload};
    default:
      return state;
  }
};

export default appReducer;
