import React from 'react';
import styled from 'styled-components';
function Alert(props) {
  const { children } = props;
  return <StyledDiv>{children}</StyledDiv>;
}
const StyledDiv = styled.div`
  text-align: center;
  font-weight: bold;
  width: 30px;
  height: 30px;
  font-size: 1.25rem;

  border-radius: 100%;
  background-color: orange;
  color: green;

  position: absolute;
  left: 70%;
  top: 0%;
`;
export default Alert;
