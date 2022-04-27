import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import heart from '/images/emptyHeart.png';
// import redHeart from '/images/redHeart.png';

const Like = (props) => {
  const { isLike, _onClick } = props;
  const [like, setLike] = useState();

  useEffect(() => {
    setLike(isLike);
    console.log(isLike);
  }, [props, isLike]);

  return (
    <React.Fragment>
      {like === true ? (
        <StyledLike onClick={_onClick} src='/images/redHeart.png'></StyledLike>
      ) : (
        <StyledLike
          onClick={_onClick}
          src='/images/emptyHeart.png'
        ></StyledLike>
      )}
      {/* <StyledLike onClick={_onClick} {...styles}></StyledLike> */}
    </React.Fragment>
  );
};
const StyledLike = styled.img`
  width: 30px;
  height: 30px;
  /* src: ${(props) =>
    props.isLike ? '/images/redHeart.png' : '/images/emptyHeart.png'}; */
  cursor: pointer;
`;

// export default Like;
export default React.memo(Like);
