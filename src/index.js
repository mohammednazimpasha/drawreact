import React from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

import { useIsMobileOrTablet } from "./utils/isMobileOrTablet";
import "./styles.css";


function App() {
  const isMobOrTab = useIsMobileOrTablet();

  return (
    <div className="App">
      
      <CanvasDraw        
      />
    
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
