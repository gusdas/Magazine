import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { axiosFunc } from './axios';

// actions
const ADD_POST = 'ADD_POST';
const SET_POST = 'SET_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';
const LIKE_POST = 'LIKE_POST';
const LIKE_DELETE_POST = 'LIKE_DELETE_POST';
// action creators
const addPost = createAction(ADD_POST, (post) => ({ post }));

const setPost = createAction(SET_POST, (posts, last, nextPage) => ({
  posts,
  last,
  nextPage,
}));

const updatePost = createAction(UPDATE_POST, (postId, post) => ({
  postId,
  post,
}));

const deletePost = createAction(DELETE_POST, (postId) => ({
  postId,
}));

const likePost = createAction(LIKE_POST, (postId) => ({
  postId,
}));

const likeDeletePost = createAction(LIKE_DELETE_POST, (postId) => ({
  postId,
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

    if (result) {
      dispatch(updatePost(postId, result.data));
    }
  };
};

//포스트 삭제하기
const deletePostAPI = (postId) => {
  return async function (dispatch, getState) {
    const result = await axiosFunc.postDeleteAxios(postId);

    if (result) {
      dispatch(deletePost(postId));
    }
  };
};

//포스트 좋아요
const likePostAPI = (postId) => {
  return async function (dispatch, getState) {
    const result = await axiosFunc.LikeAxios(postId);

    console.log(result);

    if (result) {
      dispatch(likePost(postId));
    }
  };
};

//포스트 좋아요삭제
const likeDeletePostAPI = (postId) => {
  return async function (dispatch, getState) {
    const result = await axiosFunc.LikeDeleteAxios(postId);

    console.log(result);

    if (result) {
      dispatch(likeDeletePost(postId));
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
    [UPDATE_POST]: (state, action) =>
      produce(state, (draft) => {
        const idx = draft.posts.findIndex(
          (p) => p.postId === parseInt(action.payload.postId)
        );

        draft.posts[idx] = { ...draft.posts[idx], ...action.payload.post };
      }),

    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts = draft.posts.filter(
          (p) => p.postId !== parseInt(action.payload.postId)
        );
      }),

    [LIKE_POST]: (state, action) =>
      produce(state, (draft) => {
        const idx = draft.posts.findIndex(
          (p) => p.postId === parseInt(action.payload.postId)
        );

        draft.posts[idx].like = true;
        draft.posts[idx].likeCount = draft.posts[idx].likeCount + 1;
      }),

    [LIKE_DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        const idx = draft.posts.findIndex(
          (p) => p.postId === parseInt(action.payload.postId)
        );

        draft.posts[idx].like = false;
        draft.posts[idx].likeCount = draft.posts[idx].likeCount - 1;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getPostsAPI,
  getPostAPI,
  addPostAPI,
  modifyPostAPI,
  deletePostAPI,
  likePostAPI,
  likeDeletePostAPI,
};

export { actionCreators };
