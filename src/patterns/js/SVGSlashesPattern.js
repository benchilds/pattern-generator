import React from "react";
import { ReactComponent as SVG } from '../svg/pattern_slashes.svg';

export function SVGSlashesPattern() {

  return React.createElement(
    "div",
    { className: "svg-holder" },
    React.createElement(SVG, null)
  );
}