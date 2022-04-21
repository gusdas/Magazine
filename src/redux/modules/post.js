import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { axiosFunc } from './axios';

// actions
const ADD_POST = 'ADD_POST';
const SET_POST = 'SET_POST';

// action creators
const addPost = createAction(ADD_POST, (post) => ({ post }));
const setPost = createAction(SET_POST, (posts) => ({ posts }));

// initialState
const initialState = {
  posts: null,
  isLoding: false,
  currentPage: 0,
};

// middleware actions
//포스트 전체가져오기
const getPostAPI = (currentPage) => {
  return function (dispatch, getState) {
    const result = axiosFunc.postsAxios(currentPage);
    if (result) {
      dispatch(setPost());
    }
  };
};
//로그인
const loginAPI = (id, pw, navigate) => {
  return function (dispatch, getState) {
    const result = axiosFunc.loginAxios(id, pw);

    if (result) {
      dispatch(
        setPost({
          user: id,
          is_login: true,
        })
      );

      navigate();
    }
  };
};

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getPostAPI,
};

export { actionCreators };
