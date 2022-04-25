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
    isFloat,
    margin,
  } = props;

  if (isFloat) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    width: width,
    height: height,
    bgColor: bgColor,
    bold: bold,
    margin: margin,
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
  margin: ${(props) => props.margin};
  ${(props) =>
    props.bgColor === 'lightgray' ? { color: 'black' } : { color: 'white' }}

  outline: 'none';
  border: none;
  cursor: pointer;
`;

const FloatButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: rgba(33, 33, 33, 0.8);
  color: white;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 800;
  position: sticky;
  bottom: 3%;
  left: 82%;
  border: none;
  text-align: center;
  border-radius: 30px;
  cursor: pointer;

  /* @media screen and (min-width: 480px) {
    right: 25%;
  } */
`;
// export default Button;
export default React.memo(Button);
