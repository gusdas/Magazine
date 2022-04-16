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
      {isLike ? (
        <StyledLike src='/images/redHeart.png' {...styles}></StyledLike>
      ) : (
        <StyledLike src='/images/redHeart.png' {...styles}></StyledLike>
      )}
    </React.Fragment>
  );
};
const StyledLike = styled.img`
  width: 50px;
  height: 50px;

  cursor: pointer;
`;

export default Like;
