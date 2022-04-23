import React from 'react';

import Text from '../elements/Text';
import FeedImg from '../elements/FeedImg';
import Grid from '../elements/Grid';
import Like from '../elements/Like';
import FlexGrid from '../elements/FlexGrid';

function FeedArea({ content, isLike, likeCnt, picture }) {
  const src = `data:image/jpeg;base64,${picture}`;
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
          <Like isLike={isLike}></Like>
        </div>
      </FlexGrid>
    </Grid>
  );
}

export default FeedArea;
