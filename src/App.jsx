import React from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Leaderboard from './pages/Leaderboard.jsx'

function App() {
  return (
    <Router>
      <Switch>
        <Home path="/" exact />
        <Leaderboard path="/leaderboard" />
      </Switch>
    </Router>
  );
}

export default App
