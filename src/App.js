import React from 'react';
import { Selector } from './patterns/js/Selector';
import { CSSGrid } from './patterns/js/CSSGrid';

// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div>
      <div className="config container">
        <Selector />
      </div>
      <div className="pattern container-fluid p-0">
        <CSSGrid />
      </div>
    </div>
  );
}

export default App;
