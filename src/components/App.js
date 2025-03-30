
import React from "react";
import './../styles/App.css';
import Model from "./Model";

const App = () => {
  return (
    <div>
     <button className="model-open" onClick={<Model />} >Show Model</button>
    </div>
  )
}

export default App
