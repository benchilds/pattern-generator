import React, {useState} from 'react';
import { Selector } from './patterns/js/Selector';
import { CSSGrid } from './patterns/js/CSSGrid';
import { CSSColumns } from './patterns/js/CSSColumns';

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
    </div>
  );
}

export default App;
