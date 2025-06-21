import React from "react";
import ClassCounter from "./components/Classcounter";
import FunctionCounter from "./components/Functioncounter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <h1 className="main-heading">Assignment-2 Counter Application</h1>
        <div className="counter-row">
          <ClassCounter />
          <FunctionCounter />
        </div>
      </div>
    </div>
  );
}

export default App;
