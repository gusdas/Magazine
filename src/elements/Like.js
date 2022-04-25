import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import heart from '/images/emptyHeart.png';
// import redHeart from '/images/redHeart.png';

const Like = (props) => {
  const { isLike = false, _onClick } = props;
  const [like, setLike] = useState('');

  useEffect(() => {
    setLike(isLike);
  }, [isLike]);

  const styles = {
    isLike: isLike,
  };
  console.log(like);
  return (
    <React.Fragment>
      {like === true ? (
        <StyledLike
          onClick={_onClick}
          src='/images/redHeart.png'
          {...styles}
        ></StyledLike>
      ) : (
        <StyledLike
          onClick={_onClick}
          src='/images/emptyHeart.png'
          {...styles}
        ></StyledLike>
      )}
    </React.Fragment>
  );
};
const StyledLike = styled.img`
  width: 30px;
  height: 30px;

  cursor: pointer;
`;

// export default Like;
export default React.memo(Like);
