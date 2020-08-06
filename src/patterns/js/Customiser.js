import React, { useState } from "react";

export function Customiser(props) {

  const [patternSel, setPattern] = useState(props.patternSel);

  function handleSelectedChange(e) {
    // console.log(`Pattern changed! pattern:${e.target.value}`);
    props.onSelectedChange(e.target.value);
    setPattern(e.target.value);
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
          "Pattern customiser"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "row justify-content-center" },
      React.createElement(
        "div",
        { className: "col col-3" },
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
            { onChange: e => handleSelectedChange(e), className: "form-control", id: "pattern", "aria-describedby": "patternTip", value: patternSel },
            React.createElement(
              "option",
              { value: "zigzagGrid" },
              "Zig-zag grid"
            ),
            React.createElement(
              "option",
              { value: "diagonalBars" },
              "Diagonal bars"
            ),
            React.createElement(
              "option",
              { value: "slashesGrid" },
              "Slashes grid"
            ),
            React.createElement(
              "option",
              { value: "pyramid" },
              "Pyramid"
            )
          ),
          React.createElement(
            "small",
            { id: "patternTip", className: "form-text text-muted" },
            "Type of pattern to generate"
          )
        )
      )
    )
  );
}