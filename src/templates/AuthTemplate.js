import React from 'react';
import Header from '../organisms/Header';

import AuthArea from '../organisms/AuthArea';
const Auth = (props) => {
  const { type, children } = props;
  return (
    <React.Fragment>
      <AuthArea type={type}></AuthArea>
    </React.Fragment>
  );
};

export default Auth;
