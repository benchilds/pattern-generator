import React from "react";

export function Configurator() {

  console.log(`Configurator`);

  return React.createElement(
    "div",
    null,
    "Configurator",
    React.createElement(
      "div",
      { "class": "alert alert-primary", role: "alert" },
      "A simple primary alert\u2014check it out!"
    )
  );
}

// ReactDOM.render(
//   <Configurator/>,
//   document.getElementById('conf')
// )