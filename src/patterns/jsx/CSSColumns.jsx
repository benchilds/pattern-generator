import React, { useState } from "react";

export function CSSColumns() {

  function handleSelectedChange(x) {
    setX(x);
  }

  const numCols = 20;

  const [selX, setX] = useState(12);
  
  const items = []
  
  for (let i = 1; i <= numCols; i++) {
    
    let x = i % numCols === 0 ? numCols : i % numCols;

    items.push(<Cell onSelectedChange={handleSelectedChange} key={'c-'+i} i={i} x={x} selX={selX} />);
  
  }

  return (
    <div>
      <Configurator numCols={numCols} selX={selX} />
      <div className="row">
        <div className="col">
          <div className={'grid cols-' + numCols}>
            {items}
          </div>
        </div>
      </div>
    </div>
  );

}

function Cell(props) {

  function handleCellClick(i, x, e) {
    e.preventDefault();
    props.onSelectedChange(x);
  }
  
  let cellClass = 'cell ' + props.i + ' x-' + props.x;
  
  // Selected cell
  cellClass += props.x === props.selX ? ' sel' : '';
  
  // Surrounding cells
  cellClass += (props.x === props.selX - 1 || props.x === props.selX + 1) ? ' sel-1' : '';
  cellClass += (props.x === props.selX - 2 || props.x === props.selX + 2) ? ' sel-2' : '';
  
  return (
    <div className={cellClass} onClick={(e) => handleCellClick(props.i, props.x, e)}>
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
          <input type="number" className="form-control" id="patternCols" aria-describedby="patternColsNote" placeholder={props.numCols} min="5" max="30" />
          <small id="patternColsNote" className="form-text text-muted">Number of <strong>x</strong> columns</small>
        </div>
      </div>
      <div className="col col-2">
        <div className="form-group">
          <label htmlFor="selectedX">Selected X</label>
          <input type="number" className="form-control" id="selectedX" aria-describedby="selectedXNote" placeholder="5-20" min="5" max="20" value={props.selX} readOnly/>
          <small id="selectedXNote" className="form-text text-muted">Initial <strong>x</strong></small>
        </div>
      </div>
    </div>
  );

}