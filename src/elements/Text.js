import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const { bold = '', size, children, color = 'black', margin } = props;
  const styles = {
    bold: bold,
    size: size,
    color: color,
    margin: margin,
  };
  return (
    <React.Fragment>
      <P {...styles}>{children}</P>
    </React.Fragment>
  );
};

const P = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.bold};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
`;
export default Text;
