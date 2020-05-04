import React from 'react';
import { Configurator } from './patterns/js/Configurator';
import { Pattern } from './patterns/js/Pattern';

// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div>
      <div id="conf"></div>
      <div className="config">
        <Configurator />
      </div>
      <div className="pattern">
        <Pattern />
      </div>
    </div>
  );
}

export default App;
