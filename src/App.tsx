import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">Hacker News feed</header>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
