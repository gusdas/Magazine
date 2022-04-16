import React from 'react';
import styled from 'styled-components';
const Button = (props) => {
  const {
    width = '10rem',
    height = '5rem',
    bgColor = 'gray',
    children,
  } = props;

  const styles = {
    width: width,
    height: height,
    bgColor: bgColor,
  };

  return (
    <React.Fragment>
      <StyledButton {...styles}>{children}</StyledButton>
    </React.Fragment>
  );
};

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};

  /* ${(props) =>
    props.bgColor === 'gray' ? { color: 'black' } : { color: 'white' }} */
`;
export default Button;
