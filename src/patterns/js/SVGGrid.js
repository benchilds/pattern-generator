import React, { useState } from "react";

export function SVGGrid() {

  const handleColsChange = numCols => setNumCols(numCols);
  const handleRowsChange = numRows => setNumRows(numRows);
  const handleSelectedChange = (x, y) => {
    setX(x);setY(y);
  };

  const [numCols, setNumCols] = useState(20);
  const [numRows, setNumRows] = useState(10);
  const [selX, setX] = useState(2);
  const [selY, setY] = useState(3);
  const items = [];
  let y = 0;

  for (let i = 1; i <= numCols * numRows; i++) {

    let x = i % numCols === 0 ? numCols : i % numCols;
    y = (i - 1) % numCols === 0 ? y + 1 : y;

    items.push(React.createElement(Cell, { onSelectedChange: handleSelectedChange, key: 'c-' + i, i: i, x: x, y: y, selX: selX, selY: selY }));
  }

  return React.createElement(
    "div",
    null,
    React.createElement(Configurator, { onColsChange: handleColsChange, onRowsChange: handleRowsChange, numCols: numCols, numRows: numRows, selX: selX, selY: selY }),
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col" },
        React.createElement(
          "div",
          { className: 'grid cols-' + numCols + ' rows-' + numRows },
          items
        )
      )
    )
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
  cellClass += props.y === props.selY && (props.x === props.selX - 1 || props.x === props.selX + 1) ? ' sel-1' : '';
  cellClass += props.x === props.selX && (props.y === props.selY - 1 || props.y === props.selY + 1) ? ' sel-1' : '';
  cellClass += props.x === props.selX && (props.y === props.selY - 2 || props.y === props.selY + 2) ? ' sel-2' : '';
  cellClass += props.y === props.selY && (props.x === props.selX - 2 || props.x === props.selX + 2) ? ' sel-2' : '';
  cellClass += props.x === props.selX - 1 && props.y === props.selY - 1 ? ' sel-2' : '';
  cellClass += props.x === props.selX - 1 && props.y === props.selY + 1 ? ' sel-2' : '';
  cellClass += props.x === props.selX + 1 && props.y === props.selY - 1 ? ' sel-2' : '';
  cellClass += props.x === props.selX + 1 && props.y === props.selY + 1 ? ' sel-2' : '';

  return React.createElement(
    "div",
    { className: cellClass, onClick: e => handleCellClick(props.i, props.x, props.y, e) },
    React.createElement(
      "p",
      null,
      props.i
    )
  );
}

function Configurator(props) {

  function handleColsChange(e) {
    // console.log(`Columns changed! patternCols:${e.target.value}`);
    props.onColsChange(e.target.value);
  }

  function handleRowsChange(e) {
    // console.log(`Rows changed! patternRows:${e.target.value}`);
    props.onRowsChange(e.target.value);
  }

  return React.createElement(
    "div",
    { className: "settings row justify-content-center mb-5" },
    React.createElement(
      "div",
      { className: "col col-2" },
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { htmlFor: "patternCols" },
          "Columns"
        ),
        React.createElement("input", { onChange: e => handleColsChange(e), type: "number", className: "form-control", id: "patternCols", "aria-describedby": "patternColsNote", placeholder: "2-25", min: "2", max: "25", value: props.numCols }),
        React.createElement(
          "small",
          { id: "patternColsNote", className: "form-text text-muted" },
          "Enter ",
          React.createElement(
            "strong",
            null,
            "2-25"
          ),
          " columns"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "col col-2" },
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { htmlFor: "patternRows" },
          "Rows"
        ),
        React.createElement("input", { onChange: e => handleRowsChange(e), type: "number", className: "form-control", id: "patternRows", "aria-describedby": "patternRowsNote", placeholder: "1-20", min: "1", max: "20", value: props.numRows }),
        React.createElement(
          "small",
          { id: "patternRowsNote", className: "form-text text-muted" },
          "Enter ",
          React.createElement(
            "strong",
            null,
            "1-20"
          ),
          " rows"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "col col-2" },
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { htmlFor: "selectedX" },
          "Selected X"
        ),
        React.createElement("input", { type: "number", className: "form-control", id: "selectedX", "aria-describedby": "selectedXNote", placeholder: "5-20", min: "5", max: "20", value: props.selX, readOnly: true }),
        React.createElement(
          "small",
          { id: "selectedXNote", className: "form-text text-muted" },
          "Selected ",
          React.createElement(
            "strong",
            null,
            "x"
          ),
          " column"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "col col-2" },
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { htmlFor: "selectedY" },
          "Selected Y"
        ),
        React.createElement("input", { type: "number", className: "form-control", id: "selectedY", "aria-describedby": "selectedYNote", placeholder: "1-10", min: "1", max: "10", value: props.selY, readOnly: true }),
        React.createElement(
          "small",
          { id: "selectedYNote", className: "form-text text-muted" },
          "Select ",
          React.createElement(
            "strong",
            null,
            "y"
          ),
          " row"
        )
      )
    )
  );
}