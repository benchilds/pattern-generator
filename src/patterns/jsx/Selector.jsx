import React from "react";

export function Selector() {

  console.log(`Configurator`);

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
            <select class="form-control" id="patternType" aria-describedby="patternTypeNote">
              <option>Grid pattern (CSS)</option>
              <option disabled>Columns pattern (CSS)</option>
              <option disabled>Rows pattern (CSS)</option>
              <option disabled>Lines (D3.js)</option>
            </select>
            <small id="patternTypeNote" className="form-text text-muted">Type of pattern to generate</small>
          </div>
        </div>
      </div>
    </div>
  );

}