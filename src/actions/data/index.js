import * as types from './types';

export const setPosts = posts => ({
  type: types.SET_POSTS,
  payload: posts,
});

export const getPosts = () => async dispatch => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.json();
  dispatch(setPosts(posts));
}
