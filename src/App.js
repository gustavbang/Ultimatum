import React from 'react';
import './App.css';
import LandingPage from './components/Landingpage'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Spil from "./components/game/Spil";

import BeforeYouStart from "./components/BeforeYouStart";
import Players from "./components/Players";
import ChooseGame from "./components/ChooseGame";


function App() {
  return (
      <div style={{backgroundColor: '#FECA35'}}>
      <Router>
          <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/BeforeYouStart" component={BeforeYouStart}/>
              <Route exact path="/Players" component={Players}/>
              <Route exact path="/ChooseGame" component={ChooseGame}/>

              <Route exact path="/spil" component={Spil}/>

          </Switch>
      </Router>
      </div>
  );
}

export default App;
