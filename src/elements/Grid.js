import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const { children, padding, height, hasChild, margin } = props;
  const styles = {
    padding: padding,
    height: height,
    hasChild: hasChild,
    margin: margin,
  };

  return (
    <React.Fragment>
      <StyledDiv {...styles}>{children}</StyledDiv>
    </React.Fragment>
  );
};

const StyledDiv = styled.div`
  background-color: white;
  padding: ${(props) => props.padding};

  height: ${(props) => props.height};

  margin: ${(props) => props.margin};
  box-sizing: border-box;
`;

// export default Grid;
export default React.memo(Grid);
