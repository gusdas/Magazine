import React from 'react';
import styled from 'styled-components';

const FeedImg = (props) => {
  const { src, size = 'big' } = props;

  const styles = {
    src: src,
    size: size,
  };

  return <React.Fragment>{src && <Img {...styles}></Img>}</React.Fragment>;
};

const Img = styled.img`
  ${(props) =>
    props.size === 'big'
      ? { width: '100%', height: ' 100%' }
      : { width: '180px', height: '90px', marginRigft: '1rem' }}
  overflow: 'hidden';
`;
// export default FeedImg;
export default React.memo(FeedImg);
