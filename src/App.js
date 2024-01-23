import '../src/styles/App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home'
import Header from './components/Header';

const App = () => {
  return (
    <Container>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </Container>
  );
};

const Container = styled.div`
    background-color: transparent;
    height: 100%;
`;

export default App;
