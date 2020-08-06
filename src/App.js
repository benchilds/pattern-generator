import React, {useState} from 'react';
import { Selector } from './patterns/js/Selector';
import { Customiser } from './patterns/js/Customiser';
import { SVGDiagonalBars } from './patterns/js/SVGDiagonalBars';

import './App.scss';

function App() {

  const [pattern, setPattern] = useState('diagonalBars');
  const handlePatternChange = (pattern) => setPattern(pattern);

  return (
    <div>
      <div className="config container">
        <Customiser onSelectedChange={handlePatternChange} patternSel={pattern} />
        <Selector onSelectedChange={handlePatternChange} />
      </div>
      {pattern === 'diagonalBars' && <SVGDiagonalBars />}
    </div>
  );
}

export default App;
