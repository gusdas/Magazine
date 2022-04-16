import React from 'react';
import styled from 'styled-components';
import FlexGrid from '../organisms/FlexGrid';
import Button from '../elements/FlexGrid';
const Auth = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <FlexGrid>
        <Button width='5rem' height='5rem'></Button>
        <Button width='5rem' height='5rem'>
          회원가입
        </Button>
        <Button width='5rem' height='5rem'>
          로그인
        </Button>
        {/* {children} */}
      </FlexGrid>
    </React.Fragment>
  );
};

export default Auth;
