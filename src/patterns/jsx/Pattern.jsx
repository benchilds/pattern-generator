import React from "react";

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

    let cellClass = 'cell ' + i + ' x-' + x + ' y-' + y;
    cellClass += x === selectedX && y === selectedY ? ' selected' : ''; // selected
    
    cellClass += ((x === selectedX - 1 || x === selectedX + 1) && y === selectedY) || ((y === selectedY - 1 || y === selectedY + 1) && x === selectedX) ? ' sel-1' : '';
    cellClass += (x === selectedX && (y === selectedY - 2 || y === selectedY + 2)) ? ' sel-2' : '';
    cellClass += (y === selectedY && (x === selectedX - 2 || x === selectedX + 2)) ? ' sel-2' : '';
    cellClass += (x === selectedX - 1 && y === selectedY - 1 || x === selectedX - 1 && y === selectedY + 1 || x === selectedX + 1 && y === selectedY - 1 || x === selectedX + 1 && y === selectedY + 1) ? ' sel-2' : '';

    let item = <div key={i} className={cellClass}>
      <p>{i}</p>
    </div>;

    items.push(item);
  
  }

  return (
    <div className={'grid cols-' + colNum + ' rows-' + rowNum}>
      {items}
    </div>
  );

}