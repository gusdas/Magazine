import './App.css';
import styled from 'styled-components';
import Like from './elements/Like';

import Grid from './elements/Grid';
import Header from './organisms/Header';
function App() {
  return (
    <Wrapper>
      <Container>
        {/* <Grid></Grid>
        <hr></hr> */}
        <Header></Header>
        <Header></Header>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  background-color: white;

  height: 90vh;
  width: 480px;

  position: relative;

  overflow: auto;

  border-radius: 5px;

  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    padding: 0;
  }
`;
export default App;
