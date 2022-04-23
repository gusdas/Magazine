import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as PostAction } from '../redux/modules/post';

import FeedTemplate from '../templates/FeedTemplate';
function FeedPage(props) {
  // useEffect(() => {

  // }, []);

  return (
    <div>
      <FeedTemplate></FeedTemplate>
    </div>
  );
}

export default FeedPage;
