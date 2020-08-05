import React, {useState} from 'react';
import { Selector } from './patterns/js/Selector';
import { CSSGrid } from './patterns/js/CSSGrid';
import { CSSColumns } from './patterns/js/CSSColumns';
import { SVGHolder } from './patterns/js/SVGHolder';
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
      {pattern === 'cssGrid' && <CSSGrid />}
      {pattern === 'cssColumns' && <CSSColumns />}
      {/* {pattern === 'imgTest' && <SVGHolder />} */}
      <div className="css-columns container-fluid p-0">
        <div className="svg-js">
          <svg id="svg-js"></svg>
        </div>
      </div>
      {pattern === 'svgGrid' && <SVGGrid />}
      {pattern === 'imgTest' && <IMGTest />}
      {pattern === 'svgHolder' && <SVGHolder />}
    </div>
  );
}

export default App;
