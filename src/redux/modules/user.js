import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { axiosFunc } from './axios';

// actions
const LOG_OUT = 'LOG_OUT';
const SET_USER = 'SET_USER';

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
//회원가입
const signupAPI = (id, pw, nickname, navigate) => {
  return function (dispatch, getState) {
    const result = axiosFunc.registerAxios(id, pw, nickname);
    if (result) {
      navigate();
    }
  };
};
//로그인
const loginAPI = (id, pw, navigate) => {
  return function (dispatch, getState) {
    const result = axiosFunc.loginAxios(id, pw);

    if (result) {
      dispatch(
        setUser({
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
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,
  setUser,
  signupAPI,
  loginAPI,
};

export { actionCreators };
