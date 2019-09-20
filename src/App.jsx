import React from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import Map from './pages/Map.jsx'

function App() {
  return (
    <Router>
      <Switch>
        <Home path="/" exact />
        <Leaderboard path="/leaderboard" />
        <Map path="/map" />
      </Switch>
    </Router>
  );
}

export default App
