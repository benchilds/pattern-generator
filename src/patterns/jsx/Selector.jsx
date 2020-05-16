import React from "react";

export function Selector(props) {

  function handleSelectedChange(e) {
    // console.log(`Pattern changed! pattern:${e.target.value}`);
    props.onSelectedChange(e.target.value);
  }

  return (
    <div>
      <div className="row">
        <div className="col">
          <h2>Pattern configurator</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col col-4">
          <div className="form-group">
            <label htmlFor="patternType">Pattern</label>
            <select onChange={(e) => handleSelectedChange(e)} className="form-control" id="patternType" aria-describedby="patternTypeNote">
              <option value="cssGrid">Grid pattern (CSS)</option>
              <option value="cssColumns">Columns pattern (CSS)</option>
              <option value="cssGrid">Grid pattern (SVG)</option>
              <option value="cssRows" disabled>Rows pattern (CSS)</option>
              <option value="d3Lines" disabled>Lines (D3.js)</option>
            </select>
            <small id="patternTypeNote" className="form-text text-muted">Type of pattern to generate</small>
          </div>
        </div>
      </div>
    </div>
  );

}