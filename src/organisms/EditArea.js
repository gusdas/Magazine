import React from 'react';
import Text from '../elements/Text';
import Grid from '../elements/Grid';
import FeedImg from '../elements/FeedImg';
import TextArea from '../elements/TextArea';
import Button from '../elements/Button';
function EditArea() {
  return (
    <React.Fragment>
      <Grid height='calc(100% - 101px)'>
        <Grid padding='1rem'>
          <Text bold='bold' size='2rem'>
            게시글 작성
          </Text>
        </Grid>

        <Grid padding='1rem'>
          <input type='file'></input>
        </Grid>

        <Grid padding='1rem'>
          <Text bold='bold' size='1.25rem'>
            미리보기
          </Text>
        </Grid>

        <Grid padding='1rem' height='270px'>
          <FeedImg size='big'></FeedImg>
        </Grid>

        <Grid padding='1rem'>
          <TextArea title='게시글 내용' placeholder='게시글 작성'></TextArea>
        </Grid>

        <Grid padding='1rem'>
          <Button bgColor='black'>게시글 작성</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default EditArea;
