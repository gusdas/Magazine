import './App.css';
import styled from 'styled-components';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EditPage from './pages/EditPage';
import FeedPage from './pages/FeedPage';
import AlertPage from './pages/AlertPage';

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Wrapper>
      <Container>
        <Routes>
          <Route element={<LoginPage />} path='/login' />
          <Route element={<RegisterPage />} path='/register' />
          <Route element={<FeedPage />} path='/' />
          <Route element={<EditPage />} path='/edit' />
          <Route element={<AlertPage />} path='/alert' />
        </Routes>
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
  background-color: rgb(239, 246, 255);

  height: 90vh;
  width: 480px;

  position: relative;

  overflow: auto;

  border-radius: 5px;

  /* @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    padding: 0;
  }
  ::-webkit-scrollbar {
    display: none;
  } */
`;
export default App;