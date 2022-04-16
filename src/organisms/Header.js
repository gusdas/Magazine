import React from 'react';
import styled from 'styled-components';
import FlexGrid from '../elements/FlexGrid';
import Button from '../elements/Button';

const Header = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <FlexGrid>
        <Button width='5rem' height='5rem'></Button>
        <StyledDiv></StyledDiv>
        <Button width='5rem' height='5rem'>
          회원가입
        </Button>
        <Button width='5rem' height='5rem'>
          로그인
        </Button>
      </FlexGrid>
    </React.Fragment>
  );
};
const StyledDiv = styled.div`
  flex: 1;
`;

export default Header;
