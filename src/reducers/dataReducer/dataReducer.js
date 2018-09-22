import * as types from '../../actions/data/types';

const initialState = {
  posts: [],
  comments: [],
};

const dataReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_POSTS:
      return {...state, posts: action.payload};
    default:
      return state;
  }
};

export default dataReducer;
