import React from 'react';

import FlexDiv from '../elements/FlexDiv';
import FlexGrid from '../elements/FlexGrid';
import Text from '../elements/Text';
import Button from '../elements/Button';
import AvataImg from '../elements/AvataImg';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCreators as PostAction } from '../redux/modules/post';

function FeedHeader({ nickname, time, userId, postId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = (pageId) => {
    dispatch(PostAction.deletePostAPI(pageId));
  };

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
          width='1rem;'
          height='0.1rem'
          bold='bold'
          _onClick={() => {
            navigate(`/modify/${postId}`);
          }}
        >
          수정
        </Button>
        <Button
          margin='0 0 0 10px'
          width='1rem;'
          height='0.1rem'
          bold='bold'
          _onClick={() => {
            handleDelete(postId);
          }}
        >
          삭제
        </Button>
      </FlexDiv>
    </FlexGrid>
  );
}

// export default FeedHeader;
export default React.memo(FeedHeader);
