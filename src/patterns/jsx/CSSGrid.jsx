import React, { useState } from "react";

export function CSSGrid() {

  function handleSelectedChange(x, y) {
    setX(x);
    setY(y);
  }

  const numCols = 20;
  const numRows = 10;

  const [selX, setX] = useState(2);
  const [selY, setY] = useState(3);
  
  const items = []
  let y = 0;
  
  for (let i = 1; i <= numCols * numRows; i++) {
    
    let x = i % numCols === 0 ? numCols : i % numCols;
    y = (i - 1) % numCols === 0 ? y + 1 : y;

    items.push(<Cell onSelectedChange={handleSelectedChange} key={'c-'+i} i={i} x={x} y={y} selX={selX} selY={selY} />);
  
  }

  return (
    <div>
      <Configurator numCols={numCols} numRows={numRows} selX={selX} selY={selY}/>
      <div className="row">
        <div className="col">
          <div className={'grid cols-' + numCols + ' rows-' + numRows}>
            {items}
          </div>
        </div>
      </div>
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
  cellClass += (props.y === props.selY && (props.x === props.selX - 1 || props.x === props.selX + 1)) ? ' sel-1' : '';
  cellClass += (props.x === props.selX && (props.y === props.selY - 1 || props.y === props.selY + 1)) ? ' sel-1' : '';
  cellClass += (props.x === props.selX && (props.y === props.selY - 2 || props.y === props.selY + 2)) ? ' sel-2' : '';
  cellClass += (props.y === props.selY && (props.x === props.selX - 2 || props.x === props.selX + 2)) ? ' sel-2' : '';
  cellClass += (props.x === props.selX - 1 && props.y === props.selY - 1) ? ' sel-2' : '';
  cellClass += (props.x === props.selX - 1 && props.y === props.selY + 1) ? ' sel-2' : '';
  cellClass += (props.x === props.selX + 1 && props.y === props.selY - 1) ? ' sel-2' : '';
  cellClass += (props.x === props.selX + 1 && props.y === props.selY + 1) ? ' sel-2' : '';
  
  return (
    <div className={cellClass} onClick={(e) => handleCellClick(props.i, props.x, props.y, e)}>
      <p>{props.i}</p>
    </div>
  );

}

function Configurator(props) {

  return (
    <div className="settings row justify-content-center mb-5">
      <div className="col col-2">
        <div className="form-group">
          <label htmlFor="patternCols">Columns</label>
          <input type="number" className="form-control" id="patternCols" aria-describedby="patternColsNote" placeholder={props.numCols} min="5" max="20" />
          <small id="patternColsNote" className="form-text text-muted">Number of <strong>x</strong> columns</small>
        </div>
      </div>
      <div className="col col-2">
        <div className="form-group">
          <label htmlFor="patternRows">Rows</label>
          <input type="number" className="form-control" id="patternRows" aria-describedby="patternRowsNote" placeholder={props.numRows} min="1" max="10" />
          <small id="patternRowsNote" className="form-text text-muted">Number of <strong>y</strong> rows</small>
        </div>
      </div>
      <div className="col col-2">
        <div className="form-group">
          <label htmlFor="selectedX">Selected X</label>
          <input type="number" className="form-control" id="selectedX" aria-describedby="selectedXNote" placeholder="5-20" min="5" max="20" value={props.selX} readOnly/>
          <small id="selectedXNote" className="form-text text-muted">Initial <strong>x</strong></small>
        </div>
      </div>
      <div className="col col-2">
        <div className="form-group">
          <label htmlFor="selectedY">Selected Y</label>
          <input type="number" className="form-control" id="selectedY" aria-describedby="selectedYNote" placeholder="1-10" min="1" max="10" value={props.selY} readOnly/>
          <small id="selectedYNote" className="form-text text-muted">Initial <strong>y</strong></small>
        </div>
      </div>
    </div>
  );

}