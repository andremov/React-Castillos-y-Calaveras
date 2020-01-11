import React from 'react';
import './app.scss';
import MainComponent from "./Components/MainComponent";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router
          forceRefresh={true}>
        <MainComponent />
      </Router>
  );
}

export default App;
