import React from "react";

export function SVGDiagonalBars() {

  return React.createElement(
    "div",
    { className: "svg-holder" },
    React.createElement(
      "svg",
      { width: "1280px", height: "720px", viewBox: "0 0 1280 720", version: "1.1" },
      React.createElement(
        "g",
        { id: "patternHolder", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        React.createElement("rect", { id: "bg", fill: "#222222", x: "0", y: "0", width: "1280", height: "720" }),
        React.createElement(
          "g",
          { id: "pattern", transform: "translate(748.000000, 67.000000)", fill: "#FFFFFF", "fill-rule": "nonzero" },
          React.createElement(
            "g",
            { id: "diagonalBars" },
            React.createElement("polygon", { id: "s07", points: "0 495.704136 532 972 532 923.305449 0 447" }),
            React.createElement("polygon", { id: "s06", points: "0 385.870803 532 862.166667 532 813.472116 0 337.166667" }),
            React.createElement("polygon", { id: "s05", points: "0 276.037469 532 752.333333 532 703.638782 0 227.333333" }),
            React.createElement("polygon", { id: "s04", points: "0 166.204136 532 642.5 532 593.805449 0 117.5" }),
            React.createElement("polygon", { id: "s03", points: "0 56.3708027 532 532.666667 532 483.972116 0 7.66666667" }),
            React.createElement("polygon", { id: "s02", points: "114.382812 48.7041361 532 422.833333 532 374.138782 114.382812 0" }),
            React.createElement("polygon", { id: "s01", points: "237.083984 48.7041361 532 313 532 264.305449 237.083984 0" })
          )
        )
      )
    )
  );
}