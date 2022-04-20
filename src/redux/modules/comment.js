import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { firestore, realtime } from '../../shared/firebase';
import moment from 'moment';
import firebase from 'firebase/app';
import { actionCreators as postActions } from './post';

const SET_COMMENT = 'SET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';

const LOADING = 'LOADING';

const setComment = createAction(SET_COMMENT, (postID, commentList) => ({
  postID,
  commentList,
}));
const addComment = createAction(ADD_COMMENT, (postID, comment) => ({
  postID,
  comment,
}));

const loading = createAction(LOADING, (isLoading) => ({ isLoading }));

const initialState = {
  list: {},
  isLoading: false,
};

const addCommentFB = (postID, contents) => {
  return function (dispatch, getState, { history }) {
    const commentDB = firestore.collection('comment');
    const userInfo = getState().user.user;

    let comment = {
      postID: postID,
      userID: userInfo.uid,
      userName: userInfo.userName,
      userProfile: userInfo.userProfile,
      contents: contents,
      insertDt: moment().format('YYYY-MM-DD HH:mm:ss'),
    };

    commentDB.add(comment).then((doc) => {
      const postDB = firestore.collection('post');

      const post = getState().post.list.find((l) => l.id === postID);

      const increment = firebase.firestore.FieldValue.increment(1);

      comment = { ...comment, id: doc.id };
      postDB
        .doc(postID)
        .update({ commentCnt: increment })
        .then((_post) => {
          dispatch(addComment(postID, comment));

          if (post) {
            dispatch(
              postActions.editPost(postID, {
                commentCnt: parseInt(post.commentCnt) + 1,
              })
            );

            const _noti_item = realtime
              .ref(`noti/${post.userInfo.userID}/list`)
              .push();

            _noti_item.set(
              {
                postID: post.id,
                userName: comment.userName,
                imageUrl: post.imageUrl,
                insertDt: comment.insertDt,
              },
              (error) => {
                if (error) {
                  console.log('NOTIFICATION FAILED!');
                } else {
                  const notiDB = realtime.ref(`noti/${post.userInfo.userID}`);

                  notiDB.update({ read: false });
                }
              }
            );
          }
        });
    });
  };
};

const getCommentFB = (postID = null) => {
  return function (dispatch, getState, { history }) {
    if (!postID) {
      return;
    }

    const commentDB = firestore.collection('comment');

    commentDB
      .where('postID', '==', postID)
      .orderBy('insertDt', 'desc')
      .get()
      .then((docs) => {
        let list = [];

        docs.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });

        dispatch(setComment(postID, list));
      })
      .catch((error) => {
        console.log('COMMENT ERROR', error);
      });
  };
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postID] = action.payload.commentList;
      }),

    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postID].unshift(action.payload.comment);
      }),

    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.isLoading = action.payload.isLoading;
      }),
  },
  initialState
);

const actionCreators = {
  getCommentFB,
  addCommentFB,
  setComment,
  addComment,
};

export { actionCreators };
