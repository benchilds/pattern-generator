import React, { useState } from "react";
import { SVG } from '@svgdotjs/svg.js';

export function SVGGrid() {

  const handleColsChange = (numCols) => setNumCols(numCols);
  const handleRowsChange = (numRows) => setNumRows(numRows);
  const handleSelectedChange = (x, y) => {setX(x); setY(y); }
  
  const svgW = 1280;
  const svgH = 720;
  const [numCols, setNumCols] = useState(20);
  console.log(`numCols: ${numCols}`);
  const cellSize = svgW / numCols;
  console.log(`cellSize: ${cellSize}`);
  const [numRows, setNumRows] = useState(Math.floor(svgH/cellSize));
  console.log(`numRows: ${numRows}`);
  const rowRem = svgH % cellSize;
  console.log(`rowRem: ${rowRem}`);
  const [selX, setX] = useState(2);
  console.log(`selX: ${selX}`);
  const [selY, setY] = useState(3);
  console.log(`selY: ${selY}`);
  // const items = []
  let rowNum = 1;
  let colNum = 1;
  let fullRow = rowRem > 0 ? false : true;
  let rowOffset = 0;
  let cellHeight = cellSize;
  console.log(`fullRow: ${fullRow}`);
  let rect;
  
  // Calculate (and draw?) the SVG

  let draw = SVG('#svg-js').size(svgW, svgH);
  
  for (let i = 1; i <= numCols * (numRows + 2); i++) {

    cellHeight = fullRow ? cellSize : rowRem / 2;
    console.log(`rowNum: ${rowNum}, colNum: ${colNum}, fullRow: ${fullRow}, cellHeight: ${cellHeight}, rowOffset: ${rowOffset}`);
    rect = draw.rect(cellSize, cellHeight).move((colNum - 1) * cellSize, rowOffset).attr({ fill: '#747474', stroke: '#222222' });
    
    rowNum = colNum === numCols ? rowNum + 1 : rowNum;
    fullRow = (rowRem === 0 || (rowRem > 0 && rowNum > 1 && rowNum < numRows + 2)) ? true : false;
    rowOffset = colNum === numCols ? rowOffset + cellHeight : rowOffset;
    colNum = colNum === numCols ? 1 : colNum + 1;
  
  }

  return (
    <div>
      <Configurator onColsChange={handleColsChange} onRowsChange={handleRowsChange} numCols={numCols} numRows={numRows} selX={selX} selY={selY}/>
    </div>
  );

}

function Cell(props) {

  function handleCellClick(i, x, y, e) {
    e.preventDefault();
    // console.log(`Clicked! i:${i} x:${x} y:${y}`);
    props.onSelectedChange(x, y);
  }
  
  let cellClass = 'cell ' + props.i + ' x-' + props.x + ' y-' + props.y;
  
  // Selected cell
  cellClass += props.x === props.selX && props.y === props.selY ? ' sel' : '';
  
  // Surrounding cells
  // cellClass += (props.y === props.selY && (props.x === props.selX - 1 || props.x === props.selX + 1)) ? ' sel-1' : '';
  // cellClass += (props.x === props.selX && (props.y === props.selY - 1 || props.y === props.selY + 1)) ? ' sel-1' : '';
  // cellClass += (props.x === props.selX && (props.y === props.selY - 2 || props.y === props.selY + 2)) ? ' sel-2' : '';
  // cellClass += (props.y === props.selY && (props.x === props.selX - 2 || props.x === props.selX + 2)) ? ' sel-2' : '';
  // cellClass += (props.x === props.selX - 1 && props.y === props.selY - 1) ? ' sel-2' : '';
  // cellClass += (props.x === props.selX - 1 && props.y === props.selY + 1) ? ' sel-2' : '';
  // cellClass += (props.x === props.selX + 1 && props.y === props.selY - 1) ? ' sel-2' : '';
  // cellClass += (props.x === props.selX + 1 && props.y === props.selY + 1) ? ' sel-2' : '';
  
  return (
    <div className={cellClass} onClick={(e) => handleCellClick(props.i, props.x, props.y, e)}>
      <p>{props.i}</p>
    </div>
  );

}

function Configurator(props) {

  function handleColsChange(e) {
    // console.log(`Columns changed! patternCols:${e.target.value}`);
    props.onColsChange(e.target.value);
  }

  return (
    <div className="settings row justify-content-center mb-5">
      <div className="col col-2">
        <div className="form-group">
          <label htmlFor="patternCols">Columns</label>
          <input onChange={(e) => handleColsChange(e)} type="number" className="form-control" id="patternCols" aria-describedby="patternColsNote" placeholder="2-25" min="2" max="25" value={props.numCols} />
          <small id="patternColsNote" className="form-text text-muted">Enter <strong>2-25</strong> columns</small>
        </div>
      </div>
      <div className="col col-2">
        <div className="form-group">
          <label htmlFor="patternRows">Rows</label>
          <input type="number" className="form-control" id="patternRows" aria-describedby="patternRowsNote" placeholder="1-20" min="1" max="20" value={props.numRows} readOnly />
          <small id="patternRowsNote" className="form-text text-muted">Calculated rows</small>
        </div>
      </div>
      <div className="col col-2">
        <div className="form-group">
          <label htmlFor="selectedX">Selected X</label>
          <input type="number" className="form-control" id="selectedX" aria-describedby="selectedXNote" placeholder="5-20" min="5" max="20" value={props.selX} readOnly/>
          <small id="selectedXNote" className="form-text text-muted">Selected <strong>x</strong> column</small>
        </div>
      </div>
      <div className="col col-2">
        <div className="form-group">
          <label htmlFor="selectedY">Selected Y</label>
          <input type="number" className="form-control" id="selectedY" aria-describedby="selectedYNote" placeholder="1-10" min="1" max="10" value={props.selY} readOnly/>
          <small id="selectedYNote" className="form-text text-muted">Select <strong>y</strong> row</small>
        </div>
      </div>
    </div>
  );

}