import React from 'react';
import './App.css';
import LandingPage from './components/Landingpage'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Spil from "./components/game/Spil";

import BadResult from "./components/game/BadResult";

import GoodResult from "./components/game/GoodResult";
import BeforeYouStart from "./components/BeforeYouStart";
import Players from "./components/Players";
import ChooseGame from "./components/ChooseGame";


function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/BeforeYouStart" component={BeforeYouStart}/>
              <Route exact path="/Players" component={Players}/>
              <Route exact path="/ChooseGame" component={ChooseGame}/>

              <Route exact path="/spil" component={Spil}/>

              <Route exact path="/badresult" component={BadResult}/>

              <Route exact path="/goodresult" component={GoodResult}/>


          </Switch>
      </Router>
  );
}

export default App;
