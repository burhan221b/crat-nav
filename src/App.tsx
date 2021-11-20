import React from 'react';
import { Nav } from './components/nav/Nav';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="overlay"></div>
    </div>
  );
}

export default App;
