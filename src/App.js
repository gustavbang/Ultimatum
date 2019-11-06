import React from 'react';
import './App.css';
import LandingPage from './components/Landingpage'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Spil1 from "./components/game1/Spil";
import Spil2 from "./components/game2/Spil";
import Spil3 from "./components/game3/Spil";

import BadResult1 from "./components/game1/BadResult";
import BadResult2 from "./components/game2/BadResult";
import BadResult3 from "./components/game3/BadResult";

import GoodResult1 from "./components/game1/GoodResult";
import GoodResult2 from "./components/game2/GoodResult";
import GoodResult3 from "./components/game3/GoodResult";


function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/spil1" component={Spil1}/>
              <Route exact path="/spil2" component={Spil2}/>
              <Route exact path="/spil3" component={Spil3}/>

              <Route exact path="/badresult1" component={BadResult1}/>
              <Route exact path="/badresult2" component={BadResult2}/>
              <Route exact path="/badresult3" component={BadResult3}/>

              <Route exact path="/goodresult1" component={GoodResult1}/>
              <Route exact path="/goodresult2" component={GoodResult2}/>
              <Route exact path="/goodresult3" component={GoodResult3}/>


          </Switch>
      </Router>
  );
}

export default App;
