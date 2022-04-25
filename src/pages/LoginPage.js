import React, { useEffect } from 'react';
import AuthTemplate from '../templates/AuthTemplate';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LoginPage() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    const is_session = sessionStorage.getItem('token') ? true : false;
    if (isLogin && is_session) {
      alert('이미 로그인이 되어있습니다!');
      navigate('/');
    }
  }, []);

  return (
    <React.Fragment>
      <AuthTemplate type='login'></AuthTemplate>
    </React.Fragment>
  );
}

// export default LoginPage;
export default React.memo(LoginPage);
