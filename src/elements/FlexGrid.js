import React from 'react';
import styled from 'styled-components';

const FlexGrid = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <StyledDiv>{children}</StyledDiv>
    </React.Fragment>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
  padding: 10px;
  margin-bottom: 10px;

  div:nth-child(n) {
    margin: 0 10px;
  }
`;
export default FlexGrid;
