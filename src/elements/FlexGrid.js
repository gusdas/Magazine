import React from 'react';
import styled from 'styled-components';

const FlexGrid = (props) => {
  const { children, padding, hasChild, margin } = props;
  const styles = {
    padding: padding,
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: white;

  position: relative;

  box-sizing: border-box;
  div:not(:first-child) {
    margin-left: ${(props) => (props.hasChild ? '1rem' : '')};
  }
`;
// export default FlexGrid;
export default React.memo(FlexGrid);
