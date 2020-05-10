import React, {useState} from 'react';
import { Selector } from './patterns/js/Selector';
import { CSSGrid } from './patterns/js/CSSGrid';
import { CSSColumns } from './patterns/js/CSSColumns';

import './App.scss';

function App() {

  const [pattern, setPattern] = useState('grid');
  const togglePattern = () => setPattern(pattern === 'grid' ? 'columns' : 'grid');

  return (
    <div>
      <div className="config container">
        <Selector />
        <button type="button" onClick={togglePattern}>Toggle Pattern</button>
      </div>
      <div className="css-grid container-fluid p-0">
        {pattern === 'grid' && <CSSGrid />}
      </div>
      <div className="css-columns container-fluid p-0">
        {pattern === 'columns' && <CSSColumns />}
      </div>
    </div>
  );
}

export default App;
