import React from "react";
import { ReactComponent as SVG } from '../svg/pattern_zigzag.svg';

export function SVGZigzagPattern() {

  return React.createElement(
    "div",
    { className: "svg-holder" },
    React.createElement(SVG, null)
  );
}