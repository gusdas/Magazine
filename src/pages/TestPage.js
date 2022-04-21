import React, { useRef, useState } from 'react';

import Grid from '../elements/Grid';
import Button from '../elements/Button';
import FeedImg from '../elements/FeedImg';

import { axiosFunc } from '../redux/modules/axios';

function TestPage(props) {
  const fileInput = useRef('');
  const [img, setImg] = useState('');

  const num = '2'; //게시물 id

  //파일선택
  const selectFile = () => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  //로그아웃
  const onLogout = async () => {
    const result = await axiosFunc.logoutAxios();
    console.log(result);
  };

  //게시글 목록 전체 조회
  //현재 페이지 번호
  const onPosts = async () => {
    const result = await axiosFunc.postsAxios(1);
    console.log(result);
  };

  //게시글 한개 조회
  const onPost = async (postId) => {
    const result = await axiosFunc.postAxios(postId);
    console.log(result);
  };

  //게시물 추가
  const onAddData = async () => {
    const result = await axiosFunc.postWriteAxios(img, '이미지 올라갔어요?');
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
        <Button
          bgColor='black'
          _onClick={() => {
            onAddData(num);
          }}
        >
          게시물 추가
        </Button>
      </Grid>
      <Grid>
        <input type='file' onChange={selectFile} ref={fileInput}></input>
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
    </Grid>
  );
}

export default TestPage;
