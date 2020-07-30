import React, {useState} from 'react';
import { Selector } from './patterns/js/Selector';
import { CSSGrid } from './patterns/js/CSSGrid';
import { CSSColumns } from './patterns/js/CSSColumns';
import { SVGGrid } from './patterns/js/SVGGrid';
import { IMGTest } from './patterns/js/IMGTest';

import './App.scss';

function App() {

  const [pattern, setPattern] = useState('cssGrid');
  const handlePatternChange = (pattern) => setPattern(pattern);

  return (
    <div>
      <div className="config container">
        <Selector onSelectedChange={handlePatternChange} />
      </div>
      <div className="css-grid container-fluid p-0">
        {pattern === 'cssGrid' && <CSSGrid />}
      </div>
      <div className="css-columns container-fluid p-0">
        {pattern === 'cssColumns' && <CSSColumns />}
      </div>
      <div className="svg-grid container-fluid p-0">
        {pattern === 'svgGrid' && <SVGGrid />}
        <div className="svg-js">
          <svg id="svg-js"></svg>
        </div>
      </div>
      <div className="css-columns container-fluid p-0">
        {pattern === 'imgTest' && <IMGTest />}
      </div>
    </div>
  );
}

export default App;
