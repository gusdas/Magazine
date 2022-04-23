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
  const content = useRef('');
  const fileInput = useRef('');
  const [sendImg, setSendImg] = useState('');
  const [img, setImg] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postId = useParams().postId;
  const [post, setPost] = useState('');
  useEffect(() => {
    axiosFunc.postAxios(postId).then(function (res) {
      setPost(res.data);
      const preview = 'data:image/png;base64,' + res.data.picture;

      setSendImg(res.data.picture);
      setImg(preview);
      fileInput.current.file[0] = res.data.picture;
      console.log(content.current);
    });
  }, []);

  console.log(post);

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

  const onSend = () => {
    if (postId) {
      dispatch(
        postAction.modifyPostAPI(post.postId, sendImg, content.current.value)
      );
    } else {
      dispatch(
        postAction.addPostAPI(post.postId, sendImg, content.current.value)
      );
    }

    navigate('/');
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
            _ref={content}
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
