import React from "react";

export function SVGHolder() {

  return React.createElement(
    "div",
    { className: "css-columns container-fluid p-0" },
    React.createElement(
      "div",
      { className: "svg-js" },
      React.createElement("svg", { id: "svg-js" })
    )
  );
}