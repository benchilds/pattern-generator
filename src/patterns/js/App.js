import React, { useState } from 'react';
import { Selector } from './Selector';
import { CSSGrid } from './CSSGrid';
import { CSSColumns } from './CSSColumns';
import { SVGGrid } from './SVGGrid';

import '../scss/App.scss';

function App() {

  const [pattern, setPattern] = useState('cssGrid');
  const handlePatternChange = pattern => setPattern(pattern);

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'config container' },
      React.createElement(Selector, { onSelectedChange: handlePatternChange })
    ),
    React.createElement(
      'div',
      { className: 'css-grid container-fluid p-0' },
      pattern === 'cssGrid' && React.createElement(CSSGrid, null)
    ),
    React.createElement(
      'div',
      { className: 'css-columns container-fluid p-0' },
      pattern === 'cssColumns' && React.createElement(CSSColumns, null)
    ),
    React.createElement(
      'div',
      { className: 'svg-grid container-fluid p-0' },
      pattern === 'svgGrid' && React.createElement(SVGGrid, null),
      React.createElement(
        'div',
        { className: 'svg-js' },
        React.createElement('svg', { id: 'svg-js' })
      )
    )
  );
}

export default App;