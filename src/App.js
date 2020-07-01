import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {LandingPage} from './components/LandingPage';
import {AsteroidData} from './components/AsteroidData';
import {AsteroidId} from './components/AsteroidID';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} ></Route>
        <Route path="/asteroid" exact component={AsteroidData} ></Route>
        <Route path="/asteroidId" exact component={AsteroidId} ></Route>
      </Switch>
    </Router>
  );
}

export default App;
