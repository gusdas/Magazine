import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

import FeedHeader from '../organisms/FeedHeader';
import FeedArea from '../organisms/FeedArea';
import Button from '../elements/Button';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as PostAction } from '../redux/modules/post';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function FeedTemplate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const last = useSelector((state) => state.post.last);
  const posts = useSelector((state) => state.post.posts);
  const currentPage = useSelector((state) => state.post.nextPage);
  const isLogin = useSelector((state) => state.user.isLogin);
  useEffect(() => {
    if (!last) {
      dispatch(PostAction.getPostsAPI(currentPage));
    }
    const token = sessionStorage.getItem('token');
    if (token) {
      const { username } = jwt_decode(token);
      setId(username);
    }
  }, [isLogin, last, dispatch, currentPage]);
  console.log(posts);
  // const [post, setPost] = useState('');
  // useEffect(() => {
  //   const getPost = async () => {
  //     const { data } = await axios.get('http://146.56.187.171/api/posts');
  //     setPost(data.rows);
  //   };
  //   getPost();
  //   return () => {};
  // }, []);

  return (
    <React.Fragment>
      <button
        onClick={() => {
          if (!last) {
            dispatch(PostAction.getPostsAPI(currentPage));
          }
        }}
      >
        다음 데이터가져오기
      </button>
      {posts.map((l, index) => (
        <div key={index}>
          <FeedHeader
            nickname={l.nickname}
            time={l.lastModifiedAt}
            userId={id}
            postId={l.postId}
          ></FeedHeader>
          <FeedArea
            content={l.content}
            isLike={l.like}
            likeCnt={l.likeCount}
            picture={l.picture}
            postId={l.postId}
            index={index}
          ></FeedArea>
        </div>
      ))}
      <Button
        isFloat='ture'
        _onClick={() => {
          navigate('/edit');
        }}
      >
        +
      </Button>
    </React.Fragment>
  );
}

export default FeedTemplate;
// export default React.memo(FeedTemplate);
