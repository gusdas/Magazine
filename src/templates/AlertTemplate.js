import React from 'react';
import Header from '../organisms/Header';
import AlertArea from '../organisms/AlertArea';

function AlertTemplate(props) {
  return (
    <React.Fragment>
      <AlertArea></AlertArea>
    </React.Fragment>
  );
}

// export default AlertTemplate;
export default React.memo(AlertTemplate);
