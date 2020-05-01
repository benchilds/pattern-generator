import React from "react";

export function Pattern() {

  console.log(`Pattern`);

  const colNum = 10;
  const cols = [];

  const rowNum = 5;
  const rows = [];

  const items = [];

  for (let c = 1; c <= colNum; c++) {
    cols.push(React.createElement(
      'p',
      { key: 'col-' + c },
      c
    ));
  }

  for (let r = 1; r <= rowNum; r++) {
    rows.push(React.createElement(
      'p',
      { key: 'row-' + r },
      r
    ));
  }

  for (let i = 1; i <= colNum * rowNum; i++) {

    let currentRow = i % rowNum === 0 ? i : i % rowNum;
    let currentCol = i % colNum === 0 && i >= colNum ? i : i % colNum;

    let x = i <= colNum ? i : 10;
    let y = i <= rowNum ? i : 10;
    items.push(React.createElement(
      'div',
      { key: i },
      i + ' x-' + x + ' y-' + y + ' row-' + currentRow + ' col-' + currentCol
    ));
    x++;
  }

  return React.createElement(
    'div',
    null,
    'Pattern',
    React.createElement('br', null),
    items,
    cols,
    rows
  );
}