import React from 'react';
import styled from 'styled-components';
// import heart from '/images/emptyHeart.png';
// import redHeart from '/images/redHeart.png';

const Like = (props) => {
  const { isLike = false } = props;

  const styles = {
    isLike: isLike,
  };
  return (
    <React.Fragment>
      {isLike === true ? (
        <StyledLike src='/images/redHeart.png' {...styles}></StyledLike>
      ) : (
        <StyledLike src='/images/emptyHeart.png' {...styles}></StyledLike>
      )}
    </React.Fragment>
  );
};
const StyledLike = styled.img`
  width: 30px;
  height: 30px;

  cursor: pointer;
`;

export default Like;
