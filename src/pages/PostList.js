import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import { Button, Grid } from '../elements';
import { actionCreators as postActions } from '../redux/modules/post';
import InfinityScroll from '../shared/InfinityScroll';
import Permit from '../shared/Permit';

const PostList = ({ history }) => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);
  const userInfo = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.post.isLoading);
  const paging = useSelector((state) => state.post.paging);

  const [Layout1, setLayout1] = useState(true);
  const [Layout2, setLayout2] = useState(false);
  const [Layout3, setLayout3] = useState(false);

  const onLayout1 = () => {
    setLayout1(true);
    setLayout2(false);
    setLayout3(false);
  };

  const onLayout2 = () => {
    setLayout1(false);
    setLayout2(true);
    setLayout3(false);
  };

  const onLayout3 = () => {
    setLayout1(false);
    setLayout2(false);
    setLayout3(true);
  };

  useEffect(() => {
    if (postList.length < 2) {
      dispatch(postActions.getPostFB());
    }
  }, [dispatch, postList.length]);

  return (
    <React.Fragment>
      <InfinityScroll
        callNext={() => {
          dispatch(postActions.getPostFB(paging.next));
        }}
        isNext={paging.next ? true : false}
        loading={isLoading}
      >
        {postList.map((p, idx) => {
          if (p.userInfo.userID === userInfo?.uid) {
            return (
              <Grid key={p.id}>
                <Post
                  {...p}
                  idx={idx}
                  isMe
                  Layout1={Layout1}
                  Layout2={Layout2}
                  Layout3={Layout3}
                  count='0'
                  _onClick={() => {
                    history.push(`/post/${p.id}`);
                  }}
                />
              </Grid>
            );
          } else {
            return (
              <Grid key={p.id}>
                <Post
                  {...p}
                  idx={idx}
                  Layout1={Layout1}
                  Layout2={Layout2}
                  Layout3={Layout3}
                  _onClick={() => {
                    history.push(`/post/${p.id}`);
                  }}
                />
              </Grid>
            );
          }
        })}
      </InfinityScroll>
      <Permit>
        <Button
          isFloat
          text='+'
          _onClick={() => {
            history.push('/write');
          }}
        ></Button>
      </Permit>
    </React.Fragment>
  );
};

export default PostList;
