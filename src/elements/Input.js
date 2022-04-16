import React from 'react';
import styled from 'styled-components';
const Input = (props) => {
  const { placeholder, title, children } = props;
  const styles = {
    placeholder: placeholder,
  };
  return (
    <React.Fragment>
      <StyledLabel>
        {title}

        <StyledInput {...styles}>{children}</StyledInput>
      </StyledLabel>
    </React.Fragment>
  );
};

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border: 2px solid black;
  padding: 1rem;
  font-size: 1rem;

  ::placeholder {
    ${(props) => props.placeholder || 'hiff'}
  }

  :focus {
    outline: none;
    box-shadow: 0px 0px 2px black;
  }
`;

export default Input;
