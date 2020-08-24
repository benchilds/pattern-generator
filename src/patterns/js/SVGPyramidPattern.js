import React from "react";
import { ReactComponent as SVG } from '../svg/pattern_pyramid.svg';

export function SVGPyramidPattern() {

  return React.createElement(
    "div",
    { className: "svg-holder" },
    React.createElement(SVG, null)
  );
}