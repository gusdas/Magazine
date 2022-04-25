import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { axiosFunc } from './axios';
import { actionCreators as PostAction } from './post';

// actions
const LOG_OUT = 'LOG_OUT';
const SET_USER = 'SET_USER';
// action creators
const logOut = createAction(LOG_OUT, () => ({}));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  isLogin: false,
};

// middleware actions
//회원가입
const signupAPI = (id, pw, nickname, navigate) => {
  return async function (dispatch, getState) {
    const result = await axiosFunc.registerAxios(id, pw, nickname);
    if (result) {
      navigate();
    }
  };
};

//로그인
const loginAPI = (id, pw, navigate) => {
  return async function (dispatch, getState) {
    const result = await axiosFunc.loginAxios(id, pw);
    if (result) {
      dispatch(
        setUser({
          user: id,
          isLogin: true,
        })
      );

      dispatch(PostAction.getPostsAPI(getState().post.nextPage));
      navigate();
    }
  };
};

//로그아웃
const logoutAPI = (navigate) => {
  return function (dispatch, getState) {
    // const result = axiosFunc.loginAxios(id, pw);
    sessionStorage.removeItem('token');
    axiosFunc.logoutAxios();
    dispatch(PostAction.getPostsAPI(getState().post.nextPage));
    dispatch(logOut());
    navigate();
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.isLogin = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.isLogin = false;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  logoutAPI,
  signupAPI,
  loginAPI,
};

export { actionCreators };
