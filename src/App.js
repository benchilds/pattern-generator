import React from 'react';
import { Selector } from './patterns/js/Selector';
import { Pattern } from './patterns/js/Pattern';

// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div>
      <div className="config container">
        <Selector />
      </div>
      <div className="pattern container-fluid p-0">
        <Pattern />
      </div>
    </div>
  );
}

export default App;
