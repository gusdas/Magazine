import React, { useRef, useState } from 'react';
import { emailCheck } from '../common/common';

import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Input from '../elements/Input';
import Button from '../elements/Button';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as UserAction } from '../redux/modules/user';

import { axiosFunc } from '../redux/modules/axios';

import { useNavigate } from 'react-router-dom';

const textMap = {
  login: '로그인',
  register: '회원가입',
};

function Auth(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { type } = props;
  const title = textMap[type];

  const userId = useRef();
  const pw = useRef();
  const userName = useRef();
  const checkPw = useRef();
  const [userIP, setUserIP] = useState(sessionStorage.getItem('ip'));

  React.useEffect(() => {
    setUserIP(sessionStorage.getItem('ip'));
  }, []);
  const onLogin = () => {
    if (userId.current.value === '' || pw.current.value === '') {
      window.alert('아이디, 패스워드를 모두 입력해주세요!');
      return;
    }

    dispatch(
      UserAction.loginAPI(userId.current.value, pw.current.value, () => {
        navigate('/');
      })
    );
  };

  const onSignup = () => {
    if (
      userId.current.value === '' ||
      pw.current.value === '' ||
      userName.current.value === ''
    ) {
      window.alert('아이디, 패스워드, 닉네임을 모두 입력해주세요!');
      return;
    }

    // if (!emailCheck(userId.current.value)) {
    //   window.alert('이메일 형식이 맞지 않습니다!');
    //   return;
    // }

    if (pw.current.value !== checkPw.current.value) {
      window.alert('패스워드와 패스워드 확인이 일치하지 않습니다!');
      return;
    }

    dispatch(
      UserAction.signupAPI(
        userId.current.value,
        pw.current.value,
        userName.current.value,
        () => {
          navigate('/login');
        }
      )
    );
  };

  const handleIP = (seq) => {
    if (seq === 1) {
      //현웅
      sessionStorage.setItem('ip', 'http://15.164.221.8/api');
    } else if (seq === 2) {
      //수민
      sessionStorage.setItem('ip', 'http://13.125.207.199/api');
    } else if (seq === 3) {
      //동현
      sessionStorage.setItem('ip', 'http://3.34.136.55/api');
    }
  };
  return (
    <React.Fragment>
      <div>버튼 클릭 &gt; 새로고침 &gt; 확인가능</div>
      <div>세션스토리지확인</div>
      <Button
        bgColor='black'
        margin='10px'
        _onClick={() => {
          handleIP(1);
        }}
      >
        이현웅 IP세팅
      </Button>
      <Button
        margin='10px'
        bgColor='black'
        _onClick={() => {
          handleIP(2);
        }}
      >
        이수민 IP세팅
      </Button>
      <Button
        margin='10px'
        bgColor='black'
        _onClick={() => {
          handleIP(3);
        }}
      >
        고동현 IP세팅
      </Button>
      <div> 입력된 값 : {userIP}</div>
      <Grid height='calc(100% - 5.35rem)' padding='1rem'>
        <Text bold='bold' size='2rem'>
          {title}
        </Text>

        <Grid padding='1rem 0'>
          <Input
            title='아이디'
            placeholder='아이디를 입력해주세요'
            _ref={userId}
          ></Input>
        </Grid>
        {type === 'register' && (
          <Grid padding='0 0 1rem 0'>
            <Input
              title='닉네임'
              placeholder='닉네임을 입력해주세요'
              _ref={userName}
            ></Input>
          </Grid>
        )}

        <Input
          title='비밀번호'
          placeholder='비밀번호를 입력해주세요'
          _ref={pw}
        ></Input>

        {type === 'register' && (
          <Grid padding='1rem 0 0 0'>
            <Input
              title='비밀번호 확인'
              placeholder='비밀번호를 다시 입력해주세요'
              _ref={checkPw}
            ></Input>
          </Grid>
        )}

        <Grid padding='2rem 0'>
          {type === 'login' ? (
            <Button
              bgColor='black'
              _onClick={() => {
                onLogin();
              }}
            >
              로그인하기
            </Button>
          ) : (
            <Button
              bgColor='black'
              _onClick={() => {
                onSignup();
              }}
            >
              회원가입하기
            </Button>
          )}
        </Grid>
        <Button
          bgColor='black'
          _onClick={() => {
            navigate('/test');
          }}
        >
          페이지 이동
        </Button>
      </Grid>
    </React.Fragment>
  );
}

// export default Auth;
export default React.memo(Auth);
