import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

import FlexGrid from '../elements/FlexGrid';
import Button from '../elements/Button';
import Grid from '../elements/Grid';
import Alert from '../elements/Alert';
import FlexDiv from '../elements/FlexDiv';

const Header = (props) => {
  const { children } = props;
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);

  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(
      userActions.logoutAPI(() => {
        navigate('/');
      })
    );
  };
  return (
    <React.Fragment>
      {isLogin ? (
        <FlexGrid>
          <FlexGrid padding='1rem'>
            <Button
              width='1rem'
              height='1rem'
              _onClick={() => {
                navigate(-1);
              }}
            ></Button>
          </FlexGrid>
          <FlexDiv>
            <FlexGrid hasChild='true' padding='1rem'>
              <Button
                _onClick={() => {
                  navigate('/test');
                }}
              >
                내 정보
              </Button>

              <Button>알림</Button>

              <Button
                _onClick={() => {
                  onLogout();
                }}
              >
                로그아웃
              </Button>
            </FlexGrid>
          </FlexDiv>
          <Alert>10</Alert>
        </FlexGrid>
      ) : (
        <FlexGrid>
          <Grid padding='1rem'>
            <Button
              _onClick={() => navigate(-1)}
              width='1rem'
              height='1rem'
            ></Button>
          </Grid>

          <FlexGrid hasChild='true' padding='1rem'>
            <Button _onClick={() => navigate('/register')}>회원가입</Button>

            <Button _onClick={() => navigate('/login')}>로그인</Button>
          </FlexGrid>
        </FlexGrid>
      )}
    </React.Fragment>
  );
};

export default Header;
