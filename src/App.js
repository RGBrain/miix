import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="Miix-header">
        <h1>Miix</h1>
        <FontAwesomeIcon icon={faSpotify} />
      </header>
    </div>
  );
}

export default App;
