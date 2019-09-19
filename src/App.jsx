import React from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/Home.jsx'

function App() {
  return (
    <Router>
      <Switch>
        <Home path="/" exact />
      </Switch>
    </Router>
  );
}

export default App
