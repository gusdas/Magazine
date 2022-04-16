import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Grid = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <StyledDiv>
        <Button width='5rem' height='5rem'></Button>
        <Button width='5rem' height='5rem'>
          회원가입
        </Button>
        <Button width='5rem' height='5rem'>
          로그인
        </Button>
        {/* {children} */}
      </StyledDiv>
    </React.Fragment>
  );
};

const StyledDiv = styled.div`
  background-color: red;
  padding: 10px;
`;
export default Grid;
