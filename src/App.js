import React, {useState} from 'react';
import { Selector } from './patterns/js/Selector';
import { Customiser } from './patterns/js/Customiser';
import { SVGZigzagGrid } from './patterns/js/SVGZigzagGrid';
import { SVGDiagonalBars } from './patterns/js/SVGDiagonalBars';
import { SVGSlashesGrid } from './patterns/js/SVGSlashesGrid';
import { SVGPyramid } from './patterns/js/SVGPyramid';

import './App.scss';

function App() {

  const [pattern, setPattern] = useState('diagonalBars');
  const handlePatternChange = (pattern) => setPattern(pattern);

  return (
    <div>
      <div className="config container">
        <Customiser onSelectedChange={handlePatternChange} patternSel={pattern} />
        {/* <Selector onSelectedChange={handlePatternChange} /> */}
      </div>
      {pattern === 'zigzagGrid' && <SVGZigzagGrid />}
      {pattern === 'diagonalBars' && <SVGDiagonalBars />}
      {pattern === 'slashesGrid' && <SVGSlashesGrid />}
      {pattern === 'pyramid' && <SVGPyramid />}
    </div>
  );
}

export default App;
