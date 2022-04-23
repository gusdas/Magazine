import React, { useEffect } from 'react';
import AuthTemplate from '../templates/AuthTemplate';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LoginPage() {
  const isLogin = useSelector((state) => state.user.isLogin);

  const is_session = sessionStorage.getItem('token') ? true : false;

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin && is_session) {
      alert('이미 로그인이 되어있습니다!');
      navigate('/');
    }
  }, [isLogin, is_session]);

  return (
    <React.Fragment>
      <AuthTemplate type='login'></AuthTemplate>
    </React.Fragment>
  );
}

export default LoginPage;
