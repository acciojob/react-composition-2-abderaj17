
import React from "react";
import './../styles/App.css';
import Model from "./Model";

const App = () => {
  const [displayModel, setDisplayModel] = React.useState(false);
  const handleModel = () => {
    setDisplayModel(!displayModel);
  }
  return (
    <div>
     <button style={{padding: '10px', margin: '10px', backgroundColor:"red", borderRadius: '5px'}} className="model-open" onClick={handleModel} >Show Model</button>
    </div>
  )
}

export default App
