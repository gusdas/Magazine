import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const ADD_LIKE = 'ADD_LIKE';
const DELETE_LIKE = 'DELETE_LIKE';
const SET_LIKE = 'SET_LIKE';

const addLike = createAction(ADD_LIKE, (postID, count) => ({
  postID,
  count,
}));

const deleteLike = createAction(DELETE_LIKE, (postID, count) => ({
  postID,
  count,
}));

const setLike = createAction(SET_LIKE, (postID) => ({
  postID,
}));
const initialState = {
  list: {},
  isLoading: false,
};

//미들웨어
const addLiketFB = (postID, count) => {
  return function (dispatch, getState, { history }) {
    dispatch(addLike(postID, count));
  };
};

const deleteLiketFB = (postID, count) => {
  return function (dispatch, getState, { history }) {
    dispatch(deleteLike(postID, count));
  };
};
export default handleActions(
  {
    [ADD_LIKE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.list[action.payload.postID] = action.payload.count + 1;
      }),
    [DELETE_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postID] = action.payload.count - 1;
      }),
    [SET_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postID] = 0;
      }),
  },
  initialState
);

const actionCreators = {
  deleteLiketFB,
  addLiketFB,
  setLike,
};

export { actionCreators };
