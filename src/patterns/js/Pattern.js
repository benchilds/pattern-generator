import React from "react";

export function Pattern() {

  console.log(`Pattern`);

  const colNum = 10;
  const rowNum = 5;
  const items = [];
  let x = 0;

  for (let i = 1; i <= colNum * rowNum; i++) {

    x = (i - 1) % colNum === 0 ? x + 1 : x;
    let y = i % colNum === 0 ? colNum : i % colNum;

    items.push(React.createElement(
      'div',
      { key: i },
      i + ' x-' + x + ' y-' + y
    ));
  }

  return React.createElement(
    'div',
    null,
    'Pattern',
    React.createElement('br', null),
    items
  );
}