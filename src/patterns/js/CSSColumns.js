import React, { useState } from "react";

export function CSSColumns() {

  function handleSelectedChange(x) {
    setX(x);
  }

  const numCols = 20;

  const [selX, setX] = useState(12);

  const items = [];

  for (let i = 1; i <= numCols; i++) {

    let x = i % numCols === 0 ? numCols : i % numCols;

    items.push(React.createElement(Cell, { onSelectedChange: handleSelectedChange, key: 'c-' + i, i: i, x: x, selX: selX }));
  }

  return React.createElement(
    "div",
    null,
    React.createElement(Configurator, { numCols: numCols, selX: selX }),
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col" },
        React.createElement(
          "div",
          { className: 'grid cols-' + numCols },
          items
        )
      )
    )
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
  cellClass += props.x === props.selX - 1 || props.x === props.selX + 1 ? ' sel-1' : '';
  cellClass += props.x === props.selX - 2 || props.x === props.selX + 2 ? ' sel-2' : '';

  return React.createElement(
    "div",
    { className: cellClass, onClick: e => handleCellClick(props.i, props.x, e) },
    React.createElement(
      "p",
      null,
      props.i
    )
  );
}

function Configurator(props) {

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
        React.createElement("input", { type: "number", className: "form-control", id: "patternCols", "aria-describedby": "patternColsNote", placeholder: props.numCols, min: "5", max: "30" }),
        React.createElement(
          "small",
          { id: "patternColsNote", className: "form-text text-muted" },
          "Number of ",
          React.createElement(
            "strong",
            null,
            "x"
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
          { htmlFor: "selectedX" },
          "Selected X"
        ),
        React.createElement("input", { type: "number", className: "form-control", id: "selectedX", "aria-describedby": "selectedXNote", placeholder: "5-20", min: "5", max: "20", value: props.selX, readOnly: true }),
        React.createElement(
          "small",
          { id: "selectedXNote", className: "form-text text-muted" },
          "Initial ",
          React.createElement(
            "strong",
            null,
            "x"
          )
        )
      )
    )
  );
}