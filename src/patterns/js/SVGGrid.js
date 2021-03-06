import React, { useState } from "react";
import { SVG } from '@svgdotjs/svg.js';

export function SVGGrid() {

  const handleColsChange = numCols => {
    setNumCols(numCols);
    setCellSize(svgW / numCols);
    setNumRows(Math.floor(svgH / cellSize));
  };

  const svgW = 1280;
  const svgH = 720;
  const [numCols, setNumCols] = useState(16);
  console.log(`numCols: ${numCols}`);
  const [cellSize, setCellSize] = useState(svgW / numCols);
  console.log(`cellSize: ${cellSize}`);
  const [numRows, setNumRows] = useState(Math.floor(svgH / cellSize));
  console.log(`numRows: ${numRows}`);
  const rowRem = svgH % cellSize;
  console.log(`rowRem: ${rowRem}`);
  const [selX, setX] = useState(2);
  const [selY, setY] = useState(3);

  let rowNum = 1;
  let colNum = 1;
  let fullRow = rowRem > 0 ? false : true;
  let rowOffset = 0;
  let cellHeight = cellSize;
  console.log(`fullRow: ${fullRow}`);
  let rect;

  // Calculate and draw the SVG
  // Unfortunately, using svg.js this is detached from React and hence the whole SVG is re-rendered for every change
  // @todo: Consider just drawing an SVG natively using React Components

  let draw = SVG('#svg-js').size(svgW, svgH);

  for (let i = 1; i <= numCols * (numRows + 2); i++) {

    cellHeight = fullRow ? cellSize : rowRem / 2;
    console.log(`nC: ${numCols}, cS: ${cellSize}, nR: ${numRows}, rN: ${rowNum}, cN: ${colNum}, fR: ${fullRow}, cH: ${cellHeight}, rOff: ${rowOffset}`);
    rect = draw.rect(cellSize, cellHeight).move((colNum - 1) * cellSize, rowOffset).attr({ fill: '#747474', stroke: '#222222' });

    rowNum = colNum === numCols ? rowNum + 1 : rowNum;
    fullRow = rowRem === 0 || rowRem > 0 && rowNum > 1 && rowNum < numRows + 2 ? true : false;
    rowOffset = colNum === numCols ? rowOffset + cellHeight : rowOffset;
    colNum = colNum === numCols ? 1 : colNum + 1;
  }

  return React.createElement(
    'div',
    { className: 'svg-grid container-fluid p-0' },
    React.createElement(Configurator, { onColsChange: handleColsChange, numCols: numCols, numRows: numRows, selX: selX, selY: selY }),
    React.createElement(
      'div',
      { className: 'svg-js' },
      React.createElement('svg', { id: 'svg-js' })
    )
  );
}

function Configurator(props) {

  function handleColsChange(e) {
    // console.log(`Columns changed! patternCols:${e.target.value}`);
    props.onColsChange(e.target.value);
  }

  return React.createElement(
    'div',
    { className: 'settings row justify-content-center mb-5' },
    React.createElement(
      'div',
      { className: 'col col-2' },
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'label',
          { htmlFor: 'patternCols' },
          'Columns'
        ),
        React.createElement('input', { onChange: e => handleColsChange(e), type: 'number', className: 'form-control', id: 'patternCols', 'aria-describedby': 'patternColsNote', placeholder: '2-25', min: '2', max: '25', value: props.numCols }),
        React.createElement(
          'small',
          { id: 'patternColsNote', className: 'form-text text-muted' },
          'Enter ',
          React.createElement(
            'strong',
            null,
            '2-25'
          ),
          ' columns'
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'col col-2' },
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'label',
          { htmlFor: 'patternRows' },
          'Rows'
        ),
        React.createElement('input', { type: 'number', className: 'form-control', id: 'patternRows', 'aria-describedby': 'patternRowsNote', placeholder: '1-20', min: '1', max: '20', value: props.numRows, readOnly: true }),
        React.createElement(
          'small',
          { id: 'patternRowsNote', className: 'form-text text-muted' },
          'Calculated rows'
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'col col-2' },
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'label',
          { htmlFor: 'selectedX' },
          'Selected X'
        ),
        React.createElement('input', { type: 'number', className: 'form-control', id: 'selectedX', 'aria-describedby': 'selectedXNote', placeholder: '5-20', min: '5', max: '20', value: props.selX, readOnly: true }),
        React.createElement(
          'small',
          { id: 'selectedXNote', className: 'form-text text-muted' },
          'Selected ',
          React.createElement(
            'strong',
            null,
            'x'
          ),
          ' column'
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'col col-2' },
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'label',
          { htmlFor: 'selectedY' },
          'Selected Y'
        ),
        React.createElement('input', { type: 'number', className: 'form-control', id: 'selectedY', 'aria-describedby': 'selectedYNote', placeholder: '1-10', min: '1', max: '10', value: props.selY, readOnly: true }),
        React.createElement(
          'small',
          { id: 'selectedYNote', className: 'form-text text-muted' },
          'Select ',
          React.createElement(
            'strong',
            null,
            'y'
          ),
          ' row'
        )
      )
    )
  );
}