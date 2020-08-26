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
            <select onChange={(e) => handlePatternChange(e)} className="form-control" id="pattern" aria-describedby="patternLabel" value={patternSel}>
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
            <select onChange={(e) => handleBgColourChange(e)} className="form-control" id="bgColour" aria-describedby="bgColourTip" value={bgColourSel}>
              <option value="orange">Orange</option>
              <option value="black">Black</option>
              <option value="grey">Grey</option>
            </select>
            <label id="bgColourLabel" htmlFor="bgColour" className="form-text text-muted">Background colour</label>
          </div>
          <div className="form-group">
            <select onChange={(e) => handleShapeColourChange(e)} className="form-control" id="shapeColour" aria-describedby="shapeColourTip" value={shapeColourSel}>
              <option value="orange">Orange</option>
              <option value="black">Black</option>
              <option value="grey">Grey</option>
            </select>
            <label id="shapeColourTip" htmlFor="bgColour" className="form-text text-muted">Shape Colour</label>
          </div>
        </div>

      </div>

    </div>
  );

}