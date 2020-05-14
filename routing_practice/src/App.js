import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from "./components/Home";
import Num from "./components/Num";
import WordBlueRed from "./components/WordBlueRed";

function App() {
  return (
    <div className="App-header">
      <div className="App-logo"></div>
        <div className="App-logo"></div>
          <Router>
            <Home path="/Home"/>
            <Num path= "/:Id"/>
            <WordBlueRed path="/:Id/:Color1/:Color2"/>
          </Router>
          <div> <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <p>For a barrel vault, you can put a number or a word in the url. </p> 
            <p>For a colorful bar, you can put two colors in the URL separated by a backslash.</p>
          </div>
    </div>
  );
}
export default App;
