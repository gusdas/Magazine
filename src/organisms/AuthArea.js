import React from 'react';
import styled from 'styled-components';

import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Input from '../elements/Input';
import Button from '../elements/Button';
const textMap = {
  login: '로그인',
  register: '회원가입',
};
function Auth(props) {
  const { type = 'register' } = props;
  const title = textMap[type];

  return (
    <React.Fragment>
      <Grid height='calc(100% - 85px)' padding='1rem'>
        <Text bold='bold' size='2rem'>
          {title}
        </Text>

        <Grid padding='1rem 0'>
          <Input title='아이디' placeholder='아이디를 입력해주세요'></Input>
        </Grid>
        {type === 'register' && (
          <Grid padding='0 0 1rem 0'>
            <Input title='닉네임' placeholder='닉네임을 입력해주세요'></Input>
          </Grid>
        )}

        <Input title='비밀번호' placeholder='비밀번호를 입력해주세요'></Input>

        {type === 'register' && (
          <Grid padding='1rem 0 0 0'>
            <Input
              title='비밀번호 확인'
              placeholder='비밀번호를 다시 입력해주세요'
            ></Input>
          </Grid>
        )}

        <Grid padding='2rem 0'>
          {type === 'login' ? (
            <Button bgColor='black'>로그인하기</Button>
          ) : (
            <Button bgColor='black'>회원가입하기</Button>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
const StyledDiv = styled.div`
  background-color: white;
`;
export default Auth;
