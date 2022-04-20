import React from 'react';
import styled from 'styled-components';

const Image = ({ shape, src, size, _onClick }) => {
  const styles = {
    src: src,
    size: size,
  };

  if (shape === 'circle') {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles} onClick={_onClick} />
      </AspectOutter>
    );
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles} onClick={_onClick}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: 'circle',
  src: 'data:image/webp;base64,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',
  size: 36,
  _onClick: () => {},
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 4px;
  border: 1px solid #ccc;
`;

export default Image;
