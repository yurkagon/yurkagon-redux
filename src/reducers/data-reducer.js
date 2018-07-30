const initialState = {
  posts: [],
  comments: [],
};

const dataReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_POSTS': 
      return {...state, posts: action.payload};
    case 'SET_COMMENTS': 
      return {...state, comments: action.payload};
    default:
      return state;
  }
};

export default dataReducer;
