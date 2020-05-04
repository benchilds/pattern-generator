import React from "react";

export function Pattern() {

  console.log(`Pattern`);

  const colNum = 20;
  const rowNum = 8;
  const items = []
  let x = 0;
  
  for (let i = 1; i <= colNum * rowNum; i++) {
    
    x = (i - 1) % colNum === 0 ? x + 1 : x;
    let y = i % colNum === 0 ? colNum : i % colNum;

    let item = <div key={i} className={'cell ' + i + ' x-' + x + ' y-' + y}>
      X
    </div>;

    items.push(item);
  
  }

  return (
    <div className={'grid cols-' + colNum + ' rows-' + rowNum}>
      {items}
    </div>
  );

}