import React from "react";

// function handleCellClick(i, x, y) {
//   // this.setState(state => ({
//   //   isToggleOn: !state.isToggleOn
//   // }));
//   console.log(i, x, y);
// }


function Cell(props) {
  
  let cellClass = 'cell ' + props.i + ' x-' + props.x + ' y-' + props.y;
  cellClass += props.x === props.selectedX && props.y === props.selectedY ? ' selected' : ''; // selected
  
  cellClass += (props.y === props.selectedY && (props.x === props.selectedX - 1 || props.x === props.selectedX + 1)) ? ' sel-1' : '';
  cellClass += (props.x === props.selectedX && (props.y === props.selectedY - 1 || props.y === props.selectedY + 1)) ? ' sel-1' : '';
  cellClass += (props.x === props.selectedX && (props.y === props.selectedY - 2 || props.y === props.selectedY + 2)) ? ' sel-2' : '';
  cellClass += (props.y === props.selectedY && (props.x === props.selectedX - 2 || props.x === props.selectedX + 2)) ? ' sel-2' : '';
  cellClass += (props.x === props.selectedX - 1 && props.y === props.selectedY - 1) ? ' sel-2' : '';
  cellClass += (props.x === props.selectedX - 1 && props.y === props.selectedY + 1) ? ' sel-2' : '';
  cellClass += (props.x === props.selectedX + 1 && props.y === props.selectedY - 1) ? ' sel-2' : '';
  cellClass += (props.x === props.selectedX + 1 && props.y === props.selectedY + 1) ? ' sel-2' : '';
  
  // let item = <div onClick={this.handleCellClick.bind(i, x, y)} key={i} className={cellClass}>
  return (
    <div key={'c-'+props.i} className={cellClass}>
      <p>{props.i}</p>
    </div>
  );

}

export function Pattern() {

  console.log(`Pattern`);

  const colNum = 20;
  const rowNum = 8;
  const selectedX = 2; // row
  const selectedY = 9; // col
  
  const items = []
  let x = 0;
  
  for (let i = 1; i <= colNum * rowNum; i++) {
    
    x = (i - 1) % colNum === 0 ? x + 1 : x;
    let y = i % colNum === 0 ? colNum : i % colNum;

    items.push(<Cell i={i} x={x} y={y} selectedX={selectedX} selectedY={selectedY} />);
  
  }

  return (
    <div className={'grid cols-' + colNum + ' rows-' + rowNum}>
      {items}
    </div>
  );

}