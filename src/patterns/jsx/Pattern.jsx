import React, { useState } from "react";

export function Pattern() {

  function handleSelectedChange(x, y) {
    setX(x);
    setY(y);
  }

  const colNum = 20;
  const rowNum = 8;

  const [selectedX, setX] = useState(9);
  const [selectedY, setY] = useState(3);
  
  const items = []
  let y = 0;
  
  for (let i = 1; i <= colNum * rowNum; i++) {
    
    let x = i % colNum === 0 ? colNum : i % colNum;
    y = (i - 1) % colNum === 0 ? y + 1 : y;

    items.push(<Cell onSelectedChange={handleSelectedChange} key={'c-'+i} i={i} x={x} y={y} selectedX={selectedX} selectedY={selectedY} />);
  
  }

  return (
    <div>
      <Configurator/>
      <div className="row">
        <div className="col">
          <div className={'grid cols-' + colNum + ' rows-' + rowNum}>
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
  cellClass += props.x === props.selectedX && props.y === props.selectedY ? ' sel' : '';
  
  // Surrounding cells
  cellClass += (props.y === props.selectedY && (props.x === props.selectedX - 1 || props.x === props.selectedX + 1)) ? ' sel-1' : '';
  cellClass += (props.x === props.selectedX && (props.y === props.selectedY - 1 || props.y === props.selectedY + 1)) ? ' sel-1' : '';
  cellClass += (props.x === props.selectedX && (props.y === props.selectedY - 2 || props.y === props.selectedY + 2)) ? ' sel-2' : '';
  cellClass += (props.y === props.selectedY && (props.x === props.selectedX - 2 || props.x === props.selectedX + 2)) ? ' sel-2' : '';
  cellClass += (props.x === props.selectedX - 1 && props.y === props.selectedY - 1) ? ' sel-2' : '';
  cellClass += (props.x === props.selectedX - 1 && props.y === props.selectedY + 1) ? ' sel-2' : '';
  cellClass += (props.x === props.selectedX + 1 && props.y === props.selectedY - 1) ? ' sel-2' : '';
  cellClass += (props.x === props.selectedX + 1 && props.y === props.selectedY + 1) ? ' sel-2' : '';
  
  return (
    <div className={cellClass} onClick={(e) => handleCellClick(props.i, props.x, props.y, e)}>
      <p>{props.i}</p>
    </div>
  );

}

function Configurator(props) {

  return (
    <div className="row mb-5">
      <div className="col">
        <div className="form-group">
          <label htmlFor="patternCols">Columns</label>
          <input type="number" className="form-control" id="patternCols" aria-describedby="patternColsNote" placeholder="5-20" min="5" max="20"/>
          <small id="patternColsNote" className="form-text text-muted">Number of <strong>x</strong> columns</small>
        </div>
      </div>
      <div className="col">
        <div className="form-group">
          <label htmlFor="patternRows">Rows</label>
          <input type="number" className="form-control" id="patternRows" aria-describedby="patternRowsNote" placeholder="1-10" min="1" max="10"/>
          <small id="patternRowsNote" className="form-text text-muted">Number of <strong>y</strong> rows</small>
        </div>
      </div>
      <div className="col">
        <div className="form-group">
          <label htmlFor="selectedX">Selected X</label>
          <input type="number" className="form-control" id="selectedX" aria-describedby="selectedXNote" placeholder="5-20" min="5" max="20"/>
          <small id="selectedXNote" className="form-text text-muted">Initial <strong>x</strong></small>
        </div>
      </div>
      <div className="col">
        <div className="form-group">
          <label htmlFor="selectedY">Selected Y</label>
          <input type="number" className="form-control" id="selectedY" aria-describedby="selectedYNote" placeholder="1-10" min="1" max="10"/>
          <small id="selectedYNote" className="form-text text-muted">Initially <strong>y</strong></small>
        </div>
      </div>
    </div>
  );

}