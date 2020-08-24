import React from "react";
import { ReactComponent as SVG } from '../svg/grid_slashes.svg';

export function SVGZigzagGrid() {

  return React.createElement(
    "div",
    { className: "svg-holder" },
    React.createElement(SVG, null)
  );
}