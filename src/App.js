import React from "react";
import Dashboard from "./views/Dashboard";

import {
  BrowserRouter as Router
} from "react-router-dom"
function App() {
  return (
    <Router>
      <Dashboard/>
    </Router>
 
  )
}

export default App;
