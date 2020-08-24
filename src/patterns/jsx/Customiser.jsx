import React, { useState } from "react";

export function Customiser(props) {

  const [patternSel, setPattern] = useState(props.patternSel);

  function handleSelectedChange(e) {
    // console.log(`Pattern changed! pattern:${e.target.value}`);
    props.onSelectedChange(e.target.value);
    setPattern(e.target.value);
  }

  return (
    <div>
      <div className="row">
        <div className="col">
          <h2>Pattern customiser</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col col-3">
          <div className="form-group">
            <label htmlFor="patternType">Pattern</label>
            <select onChange={(e) => handleSelectedChange(e)} className="form-control" id="pattern" aria-describedby="patternTip" value={patternSel}>
              <option value="slashesGrid">Slashes grid</option>
              <option value="zigzagPattern">Zig-zag pattern</option>
              <option value="diagonalBarsPattern">Diagonal bars pattern</option>
              <option value="slashesPattern">Slashes pattern</option>
              <option value="pyramidPattern">Pyramid pattern</option>
            </select>
            <small id="patternTip" className="form-text text-muted">Type of pattern to generate</small>
          </div>
        </div>
      </div>
    </div>
  );

}