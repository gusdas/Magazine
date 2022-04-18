import React from 'react';

import FlexGrid from '../elements/FlexGrid';
import Button from '../elements/Button';
import Grid from '../elements/Grid';

const Header = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <FlexGrid>
        <Grid padding='1rem'>
          <Button width='1rem' height='1rem'></Button>
        </Grid>

        <FlexGrid hasChild='true' padding='1rem'>
          <Button>회원가입</Button>

          <Button>로그인</Button>
        </FlexGrid>
      </FlexGrid>
    </React.Fragment>
  );
};

export default Header;
