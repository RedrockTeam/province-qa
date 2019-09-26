import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import Map from './pages/Map.jsx'
import AnswerQ from './pages/AnswerQ.jsx'

const App = () => (
  <Router>
    <Switch>
      <Home path="/" exact />
      <Leaderboard path="/leaderboard" />
      <Map path="/map" exact />
      <Route path="/map/:area" component={AnswerQ} />
    </Switch>
  </Router>
)

export default App
