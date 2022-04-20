import React, { useEffect } from 'react';
import { Grid, Image, Text } from '../elements';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';

const CommentList = ({ postID }) => {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comment.list);
  const a = useSelector((state) => state);
  console.log(a);
  useEffect(() => {
    if (!commentList[postID]) {
      dispatch(commentActions.getCommentFB(postID));
    }
  }, [commentList, postID, dispatch]);

  if (!commentList[postID] || !postID) {
    return null;
  }

  return (
    <React.Fragment>
      <Grid padding='16px' bg='white'>
        {commentList[postID].map((c) => {
          return <CommentItem key={c.id} {...c} />;
        })}
      </Grid>
    </React.Fragment>
  );
};

CommentList.defaultProps = {
  postID: null,
};

export default CommentList;

const CommentItem = ({
  userProfile,
  userName,
  userID,
  postID,
  contents,
  insertDt,
}) => {
  return (
    <Grid isFlex bg='white'>
      <Grid isFlex width='auto'>
        <Image shape='circle' />
        <Text bold>{userName}</Text>
      </Grid>
      <Grid isFlex margin='0px 4px'>
        <Text margin='0px'>{contents}</Text>
        <Text margin='0px'>{insertDt}</Text>
      </Grid>
    </Grid>
  );
};

CommentItem.defaultProps = {
  userProfile: '',
  userName: 'mean0',
  userID: '',
  postID: 1,
  contents: '귀여운 고양이네요!',
  insertDt: '2021-01-01 19:00:00',
};
