import React, { useRef, useState } from 'react';

import Grid from '../elements/Grid';
import Button from '../elements/Button';
import FeedImg from '../elements/FeedImg';

import { axiosFunc } from '../redux/modules/axios';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as PostAction } from '../redux/modules/post';

import jwt_decode from 'jwt-decode';
function TestPage(props) {
  const dispatch = useDispatch();

  const nextPage = useSelector((state) => state.post.nextPage);
  const last = useSelector((state) => state.post.last);

  const fileInput = useRef('');
  const [img, setImg] = useState('');
  const [sendImg, setSendImg] = useState('');
  const num = '2'; //게시물 id

  //파일선택
  const selectFile = () => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    setSendImg(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  //로그아웃
  const onLogout = async () => {
    sessionStorage.removeItem('token');
  };

  //게시글 목록 전체 조회
  //현재 페이지 번호
  const onPosts = async () => {
    if (!last) {
      // dispatch(PostAction.getPostsAPI(nextPage));
    }
    dispatch(PostAction.getPostsAPI());
  };

  //게시글 한개 조회
  const onPost = async (postId) => {
    const result = await axiosFunc.postAxios('2');

    const a = 'data:image/png;base64,' + result;

    setImg(a);
  };

  //게시물 추가
  const onAddData = async () => {
    const result = await axiosFunc.postWriteAxios(
      sendImg,
      '이미지 올라갔어요?'
    );
    console.log(result);
    // const b = 'data:image/png;base64,' + result;
    // setImg(b);
  };

  //게시물 수정
  const onEditData = async (postId) => {
    const result = await axiosFunc.postUpdateAxios(
      postId,
      img,
      '이미지 올라갔어요?'
    );

    console.log(result);
    // const b = 'data:image/png;base64,' + result;
    // setImg(b);
  };

  //게시물 삭제
  const onDeleteData = async (postId) => {
    const result = await axiosFunc.postDeleteAxios(postId);

    console.log(result);
  };

  //좋아요
  const onLike = async (postId) => {
    const result = await axiosFunc.LikeAxios(postId);
    console.log(result);
  };
  //좋아요삭제
  const onUnLike = async (postId) => {
    const result = await axiosFunc.LikeDeleteAxios(postId);
    console.log(result);
  };

  const onChkToken = async () => {
    const token = sessionStorage.getItem('token');
    const a = jwt_decode(token);
    console.log(a);
  };

  return (
    <Grid padding='10px'>
      <Grid margin='10px'>
        <Button
          bgColor='black'
          _onClick={() => {
            onPosts();
          }}
        >
          게시글전체조회
        </Button>
      </Grid>
      <Grid margin='10px'>
        <Button
          bgColor='black'
          _onClick={() => {
            onPost();
          }}
        >
          게시글하나조회
        </Button>
      </Grid>
      <Grid margin='10px'>
        <form encType='multipart/form-data'>
          <Button
            bgColor='black'
            _onClick={() => {
              onAddData();
            }}
          >
            게시물 추가
          </Button>
          <input type='file' onChange={selectFile} ref={fileInput}></input>
        </form>
      </Grid>
      <Grid>
        <FeedImg src={img}></FeedImg>
      </Grid>
      <Grid margin='10px'>
        <Button
          bgColor='black'
          _onClick={() => {
            onEditData(num);
          }}
        >
          게시물 수정
        </Button>
      </Grid>
      <Grid margin='10px'>
        <Button
          bgColor='black'
          _onClick={() => {
            onDeleteData(num);
          }}
        >
          게시물 삭제
        </Button>
      </Grid>
      <Grid margin='10px'>
        <Button
          bgColor='black'
          _onClick={() => {
            onLike(num);
            // onUnLike(num)
          }}
        >
          좋아요
        </Button>
      </Grid>

      <Grid margin='10px'>
        <Button
          bgColor='black'
          _onClick={() => {
            onLogout();
          }}
        >
          로그아웃
        </Button>
      </Grid>
      <Grid margin='10px'>
        <Button
          bgColor='black'
          _onClick={() => {
            onChkToken();
          }}
        >
          토큰확인하기
        </Button>
      </Grid>
    </Grid>
  );
}

export default TestPage;
