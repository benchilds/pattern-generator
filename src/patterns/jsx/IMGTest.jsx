import React, { useState } from "react";
import { SVG } from '@svgdotjs/svg.js';
import html2canvas from 'html2canvas';

export function IMGTest() {

  const handleColsChange = (numCols) => {
    setNumCols(numCols);
    setCellSize(svgW/numCols);
    setNumRows(Math.floor(svgH/cellSize));
  }
  
  const svgW = 1280;
  const svgH = 720;
  const [numCols, setNumCols] = useState(16);
  console.log(`numCols: ${numCols}`);
  const [cellSize, setCellSize] = useState(svgW/numCols);
  console.log(`cellSize: ${cellSize}`);
  const [numRows, setNumRows] = useState(Math.floor(svgH/cellSize));
  console.log(`numRows: ${numRows}`);
  const rowRem = svgH % cellSize;
  console.log(`rowRem: ${rowRem}`);
  const [selX, setX] = useState(2);
  const [selY, setY] = useState(3);

  let rowNum = 1;
  let colNum = 1;
  let fullRow = rowRem > 0 ? false : true;
  let rowOffset = 0;
  let cellHeight = cellSize;
  console.log(`fullRow: ${fullRow}`);
  let rect;
  
  // Calculate and draw the SVG
  // Unfortunately, using svg.js this is detached from React and hence the whole SVG is re-rendered for every change
  // @todo: Consider just drawing an SVG natively using React Components

  let draw = SVG('#svg-js').size(svgW, svgH);
  
  for (let i = 1; i <= numCols * (numRows + 2); i++) {

    cellHeight = fullRow ? cellSize : rowRem / 2;
    console.log(`nC: ${numCols}, cS: ${cellSize}, nR: ${numRows}, rN: ${rowNum}, cN: ${colNum}, fR: ${fullRow}, cH: ${cellHeight}, rOff: ${rowOffset}`);
    rect = draw.rect(cellSize, cellHeight).move((colNum - 1) * cellSize, rowOffset).attr({ fill: '#747474', stroke: '#222222' });
    
    rowNum = colNum === numCols ? rowNum + 1 : rowNum;
    fullRow = (rowRem === 0 || (rowRem > 0 && rowNum > 1 && rowNum < numRows + 2)) ? true : false;
    rowOffset = colNum === numCols ? rowOffset + cellHeight : rowOffset;
    colNum = colNum === numCols ? 1 : colNum + 1;
  
  }

  html2canvas(document.getElementById('svg-js')).then(function(canvas) {
    document.body.appendChild(canvas);
  });

  return (
    <div className="css-columns container-fluid p-0">
    </div>
  );

}