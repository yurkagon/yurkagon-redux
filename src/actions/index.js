export const SET_NAME = 'SET_NAME';
export const SET_POSTS = 'SET_POSTS';

export const setName = name => ({
  type: SET_NAME,
  payload: name
});

export const setPosts = posts => ({
  type: SET_POSTS,
  payload: posts,
});

export const getPosts = () => async dispatch => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.json();
  dispatch(setPosts(posts));
}
