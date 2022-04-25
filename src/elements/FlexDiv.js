import React from 'react';
import styled from 'styled-components';

function FlexDiv(props) {
  const { children } = props;
  return <StyledDiv>{children}</StyledDiv>;
}
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// export default FlexDiv;
export default React.memo(FlexDiv);
