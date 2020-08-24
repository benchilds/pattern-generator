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
              { value: "slashesGrid" },
              "Slashes grid"
            ),
            React.createElement(
              "option",
              { value: "zigzagPattern" },
              "Zig-zag pattern"
            ),
            React.createElement(
              "option",
              { value: "diagonalBarsPattern" },
              "Diagonal bars pattern"
            ),
            React.createElement(
              "option",
              { value: "slashesPattern" },
              "Slashes pattern"
            ),
            React.createElement(
              "option",
              { value: "pyramidPattern" },
              "Pyramid pattern"
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