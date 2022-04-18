import React from 'react';
import Alert from '../elements/Alert';
import FlexGrid from '../elements/FlexGrid';
import Button from '../elements/Button';
import FlexDiv from '../elements/FlexDiv';

const LoginHeader = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <FlexGrid margin='0 0 1rem 0'>
        <FlexGrid padding='1rem'>
          <Button width='1rem' height='1rem'></Button>
        </FlexGrid>
        <FlexDiv>
          <FlexGrid hasChild='true' padding='1rem'>
            <Button>내 정보</Button>

            <Button>알림</Button>

            <Button>로그아웃</Button>
          </FlexGrid>
        </FlexDiv>
        <Alert>10</Alert>
      </FlexGrid>
    </React.Fragment>
  );
};

export default LoginHeader;
