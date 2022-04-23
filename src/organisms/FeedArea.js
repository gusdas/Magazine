import React, { useState, useEffect } from 'react';

import Text from '../elements/Text';
import FeedImg from '../elements/FeedImg';
import Grid from '../elements/Grid';
import Like from '../elements/Like';
import FlexGrid from '../elements/FlexGrid';

import { useDispatch } from 'react-redux';
import { actionCreators as PostAction } from '../redux/modules/post';

function FeedArea({ content, isLike, likeCnt, picture, postId }) {
  const src = `data:image/jpeg;base64,${picture}`;
  const dispatch = useDispatch();
  const [like, setLike] = useState(isLike);

  useEffect(() => {
    setLike(isLike);
  }, [isLike]);

  const handleLike = (postId) => {
    if (isLike) {
      dispatch(PostAction.likeDeletePostAPI(postId, !isLike));
    } else {
      dispatch(PostAction.likePostAPI(postId, !isLike));
    }
  };

  return (
    <Grid>
      <FeedImg src={src}></FeedImg>
      <Grid padding='1rem'>
        <Text>{content}</Text>
      </Grid>
      <hr></hr>
      <FlexGrid padding='0.5rem'>
        <div>
          <Text bold='bold' size='0.9rem;'>
            좋아요 {likeCnt} 개
          </Text>
        </div>
        <div>
          <Like _onClick={() => handleLike(postId)} isLike={like}></Like>
        </div>
      </FlexGrid>
    </Grid>
  );
}

export default FeedArea;
