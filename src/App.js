import React from 'react';
import "./css/base.css";

import Bio from "./components/bio";
import Projects from "./components/project";



function App() {
  return (
    <div className="container">
      <Bio />
      <Projects />
    </div>
  );
}

export default App;
