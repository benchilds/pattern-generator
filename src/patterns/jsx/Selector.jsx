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
      <div className="row mb-5">
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
        <div className="col">
          <div className="form-group">
            <label htmlFor="patternCols">Columns</label>
            <input type="number" className="form-control" id="patternCols" aria-describedby="patternColsNote" placeholder="5-20" min="5" max="20"/>
            <small id="patternColsNote" className="form-text text-muted">Number of <strong>x</strong> columns</small>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="patternRows">Rows</label>
            <input type="number" className="form-control" id="patternRows" aria-describedby="patternRowsNote" placeholder="1-10" min="1" max="10"/>
            <small id="patternRowsNote" className="form-text text-muted">Number of <strong>y</strong> rows</small>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="selectedX">Selected X</label>
            <input type="number" className="form-control" id="selectedX" aria-describedby="selectedXNote" placeholder="5-20" min="5" max="20"/>
            <small id="selectedXNote" className="form-text text-muted">Initial <strong>x</strong></small>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="selectedY">Selected Y</label>
            <input type="number" className="form-control" id="selectedY" aria-describedby="selectedYNote" placeholder="1-10" min="1" max="10"/>
            <small id="selectedYNote" className="form-text text-muted">Initially <strong>y</strong></small>
          </div>
        </div>
      </div>
    </div>
  );

}