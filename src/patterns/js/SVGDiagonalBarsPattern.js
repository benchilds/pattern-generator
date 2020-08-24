import React from "react";
import { ReactComponent as SVG } from '../svg/pattern_diagonalBars.svg';

export function SVGDiagonalBarsPattern() {

  return React.createElement(
    "div",
    { className: "svg-holder" },
    React.createElement(SVG, null)
  );
}