import React from 'react';
import LoginHeader from '../organisms/LoginHeader';
import AlertArea from '../organisms/AlertArea';

function AlertTemplate(props) {
  return (
    <React.Fragment>
      <LoginHeader></LoginHeader>
      <AlertArea></AlertArea>
    </React.Fragment>
  );
}

export default AlertTemplate;
