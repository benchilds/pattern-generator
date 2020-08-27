import React, { useState } from "react";
// import { SVG } from '@svgdotjs/svg.js';
import * as d3 from 'd3';

export function Customiser(props) {

  const [pattern, setPattern] = useState(props.patternSel);
  const [bgColour, setBgColour] = useState(props.bgColourSel);
  const [shapeColour, setShapeColour] = useState(props.shapeColourSel);

  function handlePatternChange(e) {
    console.log(`Pattern changed! pattern:${e.target.value}`);
    props.onSelectedChange(e.target.value);
    setPattern(e.target.value);
  }

  function handleBgColourChange(e) {
    console.log(`BG colour changed! color:${e.target.value}`);
    setBgColour(e.target.value);

    d3.selectAll("g#patternHolder rect#bg").attr('fill', e.target.value);
  }
  
  function handleShapeColourChange(e) {
    console.log(`Shape colour changed! color:${e.target.value}`);
    setShapeColour(e.target.value);

    d3.selectAll("g#patternHolder g#pattern g#shapes polygon").attr('fill', e.target.value);

  }

  return (
    <div>

      <div className="row">
        <div className="col">
          <h2>Pattern customiser</h2>
        </div>
      </div>

      <div className="row customiser justify-content-center">

        <div className="col col-3">
          <div className="form-group">
            <h4>Pattern</h4>
            <select onChange={(e) => handlePatternChange(e)} className="form-control" id="pattern" aria-describedby="patternLabel" value={pattern}>
              <option value="slashesGrid">Slashes grid</option>
              <option value="zigzagPattern">Zig-zag pattern</option>
              <option value="diagonalBarsPattern">Diagonal bars pattern</option>
              <option value="slashesPattern">Slashes pattern</option>
              <option value="pyramidPattern">Pyramid pattern</option>
            </select>
            <label id="patternLabel" htmlFor="patternType" className="form-text text-muted">Type of pattern to generate</label>
          </div>
        </div>

        <div className="col col-2">
          <div className="form-group">
            <h4>Colours</h4>
            <select onChange={(e) => handleBgColourChange(e)} className="form-control" id="bgColour" aria-describedby="bgColourTip" value={bgColour}>
              <option value="#ff6100">Orange</option>
              <option value="#222222">Black</option>
              <option value="#747474">D Grey</option>
              <option value="#d4d4d4">L Grey</option>
              <option value="#ffffff">White</option>
            </select>
            <label id="bgColourLabel" htmlFor="bgColour" className="form-text text-muted">Background colour</label>
          </div>
          <div className="form-group">
            <select onChange={(e) => handleShapeColourChange(e)} className="form-control" id="shapeColour" aria-describedby="shapeColourTip" value={shapeColour}>
              <option value="#ff6100">Orange</option>
              <option value="#222222">Black</option>
              <option value="#747474">D Grey</option>
              <option value="#d4d4d4">L Grey</option>
              <option value="#ffffff">White</option>
            </select>
            <label id="shapeColourTip" htmlFor="bgColour" className="form-text text-muted">Shape Colour</label>
          </div>
        </div>

      </div>

    </div>
  );

}