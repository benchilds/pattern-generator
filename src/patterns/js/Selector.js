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
      { className: "row justify-content-center" },
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
              null,
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
      )
    )
  );
}