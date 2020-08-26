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

  const [template, setTemplate] = useState('diagonalBarsPattern');
  const handleTemplateChange = (template) => setTemplate(template);

  return (
    <div>
      <div className="config container">
        <Customiser onSelectedChange={handleTemplateChange} patternSel={template} />
        {/* <Selector onSelectedChange={handlePatternChange} /> */}
      </div>
      {template === 'slashesGrid' && <SVGSlashesGrid />}
      {template === 'zigzagPattern' && <SVGZigzagPattern />}
      {template === 'diagonalBarsPattern' && <SVGDiagonalBarsPattern />}
      {template === 'slashesPattern' && <SVGSlashesPattern />}
      {template === 'pyramidPattern' && <SVGPyramidPattern />}
    </div>
  );
}

export default App;
