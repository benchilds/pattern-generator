import React, {useState} from 'react';
// import { Selector } from './patterns/js/Selector';
import { Customiser } from './patterns/js/Customiser';
import { SVGSlashesGrid } from './patterns/js/SVGSlashesGrid';
import { SVGZigzagPattern } from './patterns/js/SVGZigzagPattern';
import { SVGDiagonalBarsPattern } from './patterns/js/SVGDiagonalBarsPattern';
import { SVGSlashesPattern } from './patterns/js/SVGSlashesPattern';
import { SVGPyramidPattern } from './patterns/js/SVGPyramidPattern';

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
      {pattern === 'slashesGrid' && <SVGSlashesGrid />}
      {pattern === 'zigzagPattern' && <SVGZigzagPattern />}
      {pattern === 'diagonalBarsPattern' && <SVGDiagonalBarsPattern />}
      {pattern === 'slashesPattern' && <SVGSlashesPattern />}
      {pattern === 'pyramidPattern' && <SVGPyramidPattern />}
    </div>
  );
}

export default App;
