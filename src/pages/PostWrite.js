import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Text, Button, Image, Input } from '../elements';
import Upload from '../shared/Upload';
import { history } from '../redux/configureStore';
import { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as imageActions } from '../redux/modules/image';
import { useParams } from 'react-router-dom';

const PostWrite = () => {
  const dispatch = useDispatch();
  const contents = useRef('');

  const isLogin = useSelector((state) => state.user.isLogin);
  const preview = useSelector((state) => state.image.preview || '');
  const postList = useSelector((store) => store.post.list);

  const { id } = useParams();

  const isEdit = id ? true : false;

  const post = isEdit ? postList.find((p) => p.id === id) : null;

  useEffect(() => {
    if (isEdit) {
      contents.current.value = post ? post.contents : '';
    }
  }, [post, postList, isEdit]);

  useEffect(() => {
    if (isEdit && !post) {
      console.log('POST UNDEFINED');
      history.goBack();
      return;
    }

    if (isEdit) {
      dispatch(imageActions.setPreview(post.imageUrl));
    }
  }, [post, dispatch, isEdit]);

  const addPost = () => {
    const CONTENTS = contents.current.value;

    if (!CONTENTS) {
      alert('게시글 내용을 입력해주세요!');
      return;
    }

    dispatch(postActions.addPostFB(CONTENTS));
  };

  const editPost = () => {
    const CONTENTS = contents.current.value;

    if (!CONTENTS) {
      alert('게시글 내용을 입력해주세요!');
      return;
    }

    dispatch(postActions.editPostFB(id, { contents: CONTENTS }));
  };

  const deletePost = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(postActions.deleteFB(id));
      history.replace('/');
    }
  };

  if (!isLogin) {
    return (
      <Grid
        bg='white'
        height='calc(100vh - 46px)'
        margin='100px 0'
        padding='16px'
        center
      >
        <Text size='32px' bold>
          PLEASE WAIT!
        </Text>
        <Text size='16px'>You can write after login!</Text>
        <Button
          text='로그인 하러가기'
          _onClick={() => {
            history.replace('/login');
          }}
        ></Button>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid bg='white' height='100%' margin='20px 0'>
        <Grid padding='16px'>
          <Text margin='0px' size='32px' bold>
            {isEdit ? '게시글 수정' : '게시글 작성'}
          </Text>
          <Upload />
        </Grid>

        <Grid>
          <Grid padding='16px'>
            <Text margin='0px' size='20px' bold>
              미리보기
            </Text>
          </Grid>

          <Image
            shape='rectangle'
            src={preview ? preview : 'http://via.placeholder.com/400x300'}
          />
        </Grid>

        <Grid padding='16px'>
          <Input
            _ref={contents}
            label='게시글 내용'
            placeholder='게시글 작성'
            multiLine
          />
        </Grid>

        <Grid padding='16px'>
          {isEdit ? (
            <>
              <Grid isFlex>
                {/* <Button _onClick={onLayout1} text='1'></Button>
            <Button _onClick={onLayout2} text='2'></Button>
            <Button _onClick={onLayout3} text='3'></Button> */}

                <Button text='1'></Button>
                <Button text='2'></Button>
                <Button text='3'></Button>
              </Grid>
              <Button text='게시글 수정' _onClick={editPost}></Button>
            </>
          ) : (
            <>
              <Grid isFlex>
                {/* <Button _onClick={onLayout1} text='1'></Button>
                <Button _onClick={onLayout2} text='2'></Button>
                <Button _onClick={onLayout3} text='3'></Button> */}

                <Button text='1'></Button>
                <Button text='2'></Button>
                <Button text='3'></Button>
              </Grid>
              <Button text='게시글 작성' _onClick={addPost}></Button>
            </>
          )}
          {isEdit && (
            <Button
              margin='10px 0 0 0'
              text='게시글 삭제'
              _onClick={deletePost}
            ></Button>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
