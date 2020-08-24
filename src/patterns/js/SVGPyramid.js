import React from "react";

export function SVGPyramid() {

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
          { id: "pattern", transform: "translate(483.000000, -17.000000)", fill: "#FFFFFF", "fill-rule": "nonzero" },
          React.createElement(
            "g",
            { id: "pyramid", transform: "translate(495.000000, 696.500000) scale(1, -1) translate(-495.000000, -696.500000) translate(0.000000, 204.000000)" },
            React.createElement(
              "g",
              { id: "r6" },
              React.createElement("polygon", { id: "r6s2", points: "633 601 990 277.169948 990 270 633 593.824227" }),
              React.createElement("polygon", { id: "r6s1", points: "0 33.3025876 632 601 632 567.691594 0 0" })
            ),
            React.createElement(
              "g",
              { id: "r5", transform: "translate(0.000000, 76.600000)" },
              React.createElement("polygon", { id: "r5s2", points: "633 593.830052 633 601 990 277.169948 990 270" }),
              React.createElement("polygon", { id: "r5s1", points: "0 0 0 33.3084057 632 601 632 567.697412" })
            ),
            React.createElement(
              "g",
              { id: "r4", transform: "translate(0.000000, 153.200000)" },
              React.createElement("polygon", { id: "r4s2", points: "633 593.824353 633 601 990 277.175647 990 270" }),
              React.createElement("polygon", { id: "r4s1", points: "0 0 0 33.3025876 632 601 632 567.691594" })
            ),
            React.createElement(
              "g",
              { id: "r3", transform: "translate(0.000000, 229.800000)" },
              React.createElement("polygon", { id: "r3s2", points: "633 593.830052 633 601 990 277.169948 990 270" }),
              React.createElement("polygon", { id: "r3s1", points: "0 0 0 33.3084057 632 601 632 567.697412" })
            ),
            React.createElement(
              "g",
              { id: "r2", transform: "translate(0.000000, 306.400000)" },
              React.createElement("polygon", { id: "r2s2", points: "633 594.824353 633 602 990 278.175647 990 271" }),
              React.createElement("polygon", { id: "r2s1", points: "0 0 0 33.3025876 632 601 632 567.691594" })
            ),
            React.createElement(
              "g",
              { id: "r1", transform: "translate(0.000000, 384.000000)" },
              React.createElement("polygon", { id: "r1s2", points: "633 593.824227 633 601 990 277.169948 990 270" }),
              React.createElement("polygon", { id: "r1s1", points: "0 0 0 33.3025876 632 601 632 567.697412" })
            )
          )
        )
      )
    )
  );
}