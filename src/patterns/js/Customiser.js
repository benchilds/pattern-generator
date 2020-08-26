import React, { useState } from "react";

export function Customiser(props) {

  const [patternSel, setPattern] = useState(props.patternSel);
  const [bgColourSel, setBgColour] = useState(props.bgColourSel);
  const [shapeColourSel, setShapeColour] = useState(props.shapeColourSel);

  function handlePatternChange(e) {
    console.log(`Pattern changed! pattern:${e.target.value}`);
    props.onSelectedChange(e.target.value);
    setPattern(e.target.value);
  }

  function handleBgColourChange(e) {
    console.log(`BG colour changed! color:${e.target.value}`);
    // props.onSelectedChange(e.target.value);
    setBgColour(e.target.value);
  }

  function handleShapeColourChange(e) {
    console.log(`Shape colour changed! color:${e.target.value}`);
    // props.onSelectedChange(e.target.value);
    setShapeColour(e.target.value);
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
      { className: "row customiser justify-content-center" },
      React.createElement(
        "div",
        { className: "col col-3" },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "h4",
            null,
            "Pattern"
          ),
          React.createElement(
            "select",
            { onChange: e => handlePatternChange(e), className: "form-control", id: "pattern", "aria-describedby": "patternLabel", value: patternSel },
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
            "label",
            { id: "patternLabel", htmlFor: "patternType", className: "form-text text-muted" },
            "Type of pattern to generate"
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
            "h4",
            null,
            "Colours"
          ),
          React.createElement(
            "select",
            { onChange: e => handleBgColourChange(e), className: "form-control", id: "bgColour", "aria-describedby": "bgColourTip", value: bgColourSel },
            React.createElement(
              "option",
              { value: "orange" },
              "Orange"
            ),
            React.createElement(
              "option",
              { value: "black" },
              "Black"
            ),
            React.createElement(
              "option",
              { value: "grey" },
              "Grey"
            )
          ),
          React.createElement(
            "label",
            { id: "bgColourLabel", htmlFor: "bgColour", className: "form-text text-muted" },
            "Background colour"
          )
        ),
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "select",
            { onChange: e => handleShapeColourChange(e), className: "form-control", id: "shapeColour", "aria-describedby": "shapeColourTip", value: shapeColourSel },
            React.createElement(
              "option",
              { value: "orange" },
              "Orange"
            ),
            React.createElement(
              "option",
              { value: "black" },
              "Black"
            ),
            React.createElement(
              "option",
              { value: "grey" },
              "Grey"
            )
          ),
          React.createElement(
            "label",
            { id: "shapeColourTip", htmlFor: "bgColour", className: "form-text text-muted" },
            "Shape Colour"
          )
        )
      )
    )
  );
}