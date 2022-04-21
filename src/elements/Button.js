import React from 'react';
import styled from 'styled-components';
const Button = (props) => {
  const {
    width,
    height,
    bgColor = 'lightgray',
    bold,
    _onClick,
    children,
  } = props;

  const styles = {
    width: width,
    height: height,
    bgColor: bgColor,
    bold: bold,
  };

  return (
    <React.Fragment>
      <StyledButton onClick={_onClick} {...styles}>
        {children}
      </StyledButton>
    </React.Fragment>
  );
};

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  font-weight: ${(props) => props.bold};
  ${(props) =>
    props.bgColor === 'lightgray' ? { color: 'black' } : { color: 'white' }}

  outline: 'none';
  border: none;
  cursor: pointer;
`;
export default Button;
