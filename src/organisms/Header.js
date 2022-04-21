import React from 'react';
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
  const is_login = useSelector((state) => state.user.is_login);

  const is_session = sessionStorage.getItem('token') ? true : false;

  const navigate = useNavigate();
  return (
    <React.Fragment>
      {is_login && is_session ? (
        <FlexGrid>
          <FlexGrid padding='1rem'>
            <Button width='1rem' height='1rem'></Button>
          </FlexGrid>
          <FlexDiv>
            <FlexGrid hasChild='true' padding='1rem'>
              <Button>내 정보</Button>

              <Button>알림</Button>

              <Button
                _onClick={() => {
                  dispatch(userActions.logoutFB());
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
