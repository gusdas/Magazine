import React from 'react';

import FlexDiv from '../elements/FlexDiv';
import FlexGrid from '../elements/FlexGrid';
import Text from '../elements/Text';
import Button from '../elements/Button';
import AvataImg from '../elements/AvataImg';

function FeedHeader({ nickname, time, userId }) {
  return (
    <FlexGrid margin='1rem 0 0 0' padding='1rem'>
      <FlexDiv>
        <AvataImg></AvataImg>
        <Text bold='bold' margin='0.5rem'>
          {nickname}
        </Text>
      </FlexDiv>
      <FlexDiv>
        <Text margin='0.5rem'>{time}</Text>
        <Button
          width='2rem;'
          height='0.1rem'
          bold='bold'
          onClick={() => {
            // navigate(`/modify/${postId}`);
          }}
        >
          수정
        </Button>
      </FlexDiv>
    </FlexGrid>
  );
}

export default FeedHeader;
