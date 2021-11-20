import React from 'react';
import MainContent from './components/MainContent';
import { Nav } from './components/nav/Nav';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <MainContent />
      <div className="overlay"></div>
    </div>
  );
}

export default App;
