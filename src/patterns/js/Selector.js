import React from "react";

export function Selector() {

  console.log(`Configurator`);

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col" },
        React.createElement(
          "h2",
          null,
          "Pattern configurator"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "row mb-5" },
      React.createElement(
        "div",
        { className: "col col-4" },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            { htmlFor: "patternType" },
            "Pattern"
          ),
          React.createElement(
            "select",
            { "class": "form-control", id: "patternType", "aria-describedby": "patternTypeNote" },
            React.createElement(
              "option",
              null,
              "Grid pattern (CSS)"
            ),
            React.createElement(
              "option",
              { disabled: true },
              "Columns pattern (CSS)"
            ),
            React.createElement(
              "option",
              { disabled: true },
              "Rows pattern (CSS)"
            ),
            React.createElement(
              "option",
              { disabled: true },
              "Lines (D3.js)"
            )
          ),
          React.createElement(
            "small",
            { id: "patternTypeNote", className: "form-text text-muted" },
            "Type of pattern to generate"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "col" },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            { htmlFor: "patternCols" },
            "Columns"
          ),
          React.createElement("input", { type: "number", className: "form-control", id: "patternCols", "aria-describedby": "patternColsNote", placeholder: "5-20", min: "5", max: "20" }),
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
        { className: "col" },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            { htmlFor: "patternRows" },
            "Rows"
          ),
          React.createElement("input", { type: "number", className: "form-control", id: "patternRows", "aria-describedby": "patternRowsNote", placeholder: "1-10", min: "1", max: "10" }),
          React.createElement(
            "small",
            { id: "patternRowsNote", className: "form-text text-muted" },
            "Number of ",
            React.createElement(
              "strong",
              null,
              "y"
            ),
            " rows"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "col" },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            { htmlFor: "selectedX" },
            "Selected X"
          ),
          React.createElement("input", { type: "number", className: "form-control", id: "selectedX", "aria-describedby": "selectedXNote", placeholder: "5-20", min: "5", max: "20" }),
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
      ),
      React.createElement(
        "div",
        { className: "col" },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            { htmlFor: "selectedY" },
            "Selected Y"
          ),
          React.createElement("input", { type: "number", className: "form-control", id: "selectedY", "aria-describedby": "selectedYNote", placeholder: "1-10", min: "1", max: "10" }),
          React.createElement(
            "small",
            { id: "selectedYNote", className: "form-text text-muted" },
            "Initially ",
            React.createElement(
              "strong",
              null,
              "y"
            )
          )
        )
      )
    )
  );
}