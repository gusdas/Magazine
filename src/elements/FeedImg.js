import React from 'react';
import styled from 'styled-components';

const Avata = (props) => {
  const { src, size = 'big' } = props;

  const styles = {
    src: src,
    size: size,
  };

  return <React.Fragment>{src && <Img {...styles}></Img>}</React.Fragment>;
};

const Img = styled.img`
  ${(props) =>
    props.size === 'big'
      ? { width: '480px', height: '360px' }
      : { width: '120px', height: '90px' }}
  overflow: 'hidden';
`;
export default Avata;
