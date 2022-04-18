import React from 'react';

import FeedHeader from '../organisms/FeedHeader';
import FeedArea from '../organisms/FeedArea';
import LoginHeader from '../organisms/LoginHeader';
function FeedTemplate(props) {
  const array = [0, 1, 2, 3];

  return (
    <React.Fragment>
      <LoginHeader></LoginHeader>
      {array.map((l) => (
        <div>
          <FeedHeader></FeedHeader>
          <FeedArea></FeedArea>
        </div>
      ))}
    </React.Fragment>
  );
}

export default FeedTemplate;
