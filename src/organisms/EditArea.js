import React, { useState, useRef, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { actionCreators as postAction } from '../redux/modules/post';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosFunc } from '../redux/modules/axios';
import Text from '../elements/Text';
import Grid from '../elements/Grid';
import FeedImg from '../elements/FeedImg';
import TextArea from '../elements/TextArea';
import Button from '../elements/Button';

function EditArea() {
  const fileInput = useRef('');
  const [content, setContent] = useState('');
  const [sendImg, setSendImg] = useState('');
  const [img, setImg] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postId = useParams().postId;
  const [post, setPost] = useState('');

  useEffect(() => {
    if (postId) {
      axiosFunc.postAxios(postId).then(function (res) {
        const preview = 'data:image/png;base64,' + res.data.picture;
        var file = dataURLtoFile(
          `data:image/png;base64,${res.data.picture}`,
          '수지.png'
        );

        setPost(res.data);
        setSendImg(file);
        setImg(preview);
        setContent(res.data.content);
      });
    }
  }, [setPost]);

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

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const onSend = () => {
    if (postId) {
      dispatch(postAction.modifyPostAPI(postId, sendImg, content));
    } else {
      dispatch(postAction.addPostAPI(sendImg, content));
    }

    navigate('/');
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <React.Fragment>
      <Grid height='calc(100% - 101px)'>
        <Grid padding='1rem'>
          <Text bold='bold' size='2rem'>
            {postId ? '게시글 수정' : '게시글 작성'}
          </Text>
        </Grid>

        <Grid padding='1rem'>
          <input type='file' onChange={selectFile} ref={fileInput}></input>
        </Grid>

        <Grid padding='1rem'>
          <Text bold='bold' size='1.5rem'>
            미리보기
          </Text>
        </Grid>

        <Grid padding='1rem' height='270px'>
          <FeedImg src={img} size='big'></FeedImg>
        </Grid>

        <Grid padding='1rem'>
          <TextArea
            _onChange={handleContent}
            _value={content}
            title='게시글 내용'
            placeholder={postId ? '게시글 수정' : '게시글 작성'}
          ></TextArea>
        </Grid>

        <Grid padding='1rem'>
          <Button
            bgColor='black'
            _onClick={() => {
              onSend();
            }}
          >
            {postId ? '게시글 수정' : '게시글 작성'}
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default EditArea;
