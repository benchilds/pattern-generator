import React from "react";

export function Selector(props) {

  console.log(`Configurator`);

  function handleSelectedChange(e) {
    // e.preventDefault();
    console.log(`Pattern changed! pattern:${e.target.value}`);
    props.onSelectedChange(e.target.value);
  }

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
            { onChange: e => handleSelectedChange(e), className: "form-control", id: "patternType", "aria-describedby": "patternTypeNote" },
            React.createElement(
              "option",
              { value: "cssGrid" },
              "Grid pattern (CSS)"
            ),
            React.createElement(
              "option",
              { value: "cssColumns" },
              "Columns pattern (CSS)"
            ),
            React.createElement(
              "option",
              { value: "cssRows", disabled: true },
              "Rows pattern (CSS)"
            ),
            React.createElement(
              "option",
              { value: "d3Lines", disabled: true },
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