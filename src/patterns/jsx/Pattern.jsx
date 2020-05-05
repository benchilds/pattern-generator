import React from "react";

export function Pattern() {

  console.log(`Pattern`);

  const colNum = 20;
  const rowNum = 8;
  const selected = 37; // Probably change to x/y target
  
  const items = []
  let x = 0;
  
  for (let i = 1; i <= colNum * rowNum; i++) {
    
    x = (i - 1) % colNum === 0 ? x + 1 : x;
    let y = i % colNum === 0 ? colNum : i % colNum;

    let cellClass = 'cell ' + i + ' x-' + x + ' y-' + y;
    cellClass += i === selected ? ' selected' : '';

    let item = <div key={i} className={cellClass}>
      {i}
    </div>;

    items.push(item);
  
  }

  return (
    <div className={'grid cols-' + colNum + ' rows-' + rowNum}>
      {items}
    </div>
  );

}