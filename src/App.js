import React from 'react';
import { Configurator } from './Configurator';
import { Pattern } from './Pattern';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div id="conf"></div>
      <div className="config">
        <Configurator />
      </div>
      <div className="pattern">
        <Pattern />
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
