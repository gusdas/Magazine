import React from 'react';
import styled from 'styled-components';
const TextArea = (props) => {
  const { placeholder, title, children } = props;
  const styles = {
    placeholder: placeholder,
  };
  return (
    <React.Fragment>
      <StyledLabel>
        {title}

        <StyledArea {...styles}>{children}</StyledArea>
      </StyledLabel>
    </React.Fragment>
  );
};

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledArea = styled.textarea`
  border: 2px solid black;
  padding: 1rem;
  font-size: 1rem;
  resize: none;

  height: 100%;
  ::placeholder {
    ${(props) => props.placeholder}
  }

  :focus {
    outline: none;
    box-shadow: 0px 0px 2px black;
  }
`;

export default TextArea;
