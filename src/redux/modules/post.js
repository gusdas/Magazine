import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { axiosFunc } from './axios';

// actions
const ADD_POST = 'ADD_POST';
const SET_POST = 'SET_POST';

// action creators
const addPost = createAction(ADD_POST, (post) => ({ post }));
const setPost = createAction(SET_POST, (posts, last, nextPage) => ({
  posts,
  last,
  nextPage,
}));

// initialState
const initialState = {
  posts: [],
  last: false,
  nextPage: 0,
};

// middleware actions
//포스트 전체가져오기
const getPostsAPI = (currentPage) => {
  return async function (dispatch, getState) {
    const result = await axiosFunc.postsAxios(currentPage);
    const posts = result.posts;
    const last = result.last;
    const pageNum = result.pageNum;

    if (result) {
      dispatch(setPost(posts, last, parseInt(pageNum)));
    }
  };
};
//포스트 하나가져오기
const getPostAPI = async (pageId) => {
  return await (async function (dispatch, getState) {
    const result = await axiosFunc.postAxios(pageId);
    console.log(result);
    return result;
  })();
};

//포스트 추가하기
const addPostAPI = (picture, content) => {
  return async function (dispatch, getState) {
    const result = await axiosFunc.postWriteAxios(picture, content);
    console.log(result);

    if (result) {
      dispatch(addPost(result));
    }
  };
};

//포스트 수정하기
const modifyPostAPI = (postId, picture, content) => {
  return async function (dispatch, getState) {
    const result = await axiosFunc.postUpdateAxios(postId, picture, content);
    console.log(result);

    if (result) {
      dispatch(addPost(result));
    }
  };
};
// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts.push(...action.payload.posts);
        draft.last = action.payload.last;
        draft.nextPage = action.payload.nextPage + 1;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts.push(action.payload.post);
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getPostsAPI,
  getPostAPI,
  addPostAPI,
};

export { actionCreators };
