import React, { useEffect } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import Map from './pages/Map.jsx'
import AnswerQ from './pages/AnswerQ.jsx'
import { API } from './config.js'

// token 检测
function checkToken() {
  let jwt = localStorage.getItem('token')
  if (jwt) {
    if (window.location.href.split('?').length > 1) {
      const params = window.location.href.split('?')[1].split('&')
      for (let i = 0; i < params.length; i += 1) {
        if (params[i].indexOf('token') > -1) {
          jwt = params[i].replace('token=', '')
          localStorage.setItem('token', jwt)
          const realUrl = window.location.href.split('?')[0]
          window.location.href = realUrl
          return
        }
      }
    }
    return
  } else {
    if (window.location.href.split('?').length > 1) {
      const params = window.location.href.split('?')[1].split('&')
      for (let i = 0; i < params.length; i += 1) {
        if (params[i].indexOf('token') > -1) {
          jwt = params[i].replace('token=', '')
          localStorage.setItem('token', jwt)
          const realUrl = window.location.href.split('?')[0]
          window.location.href = realUrl
          return
        }
      }
    }
  }
  const rushbUrl = encodeURI(`${API}/user/token`)
  window.location.href = 'https://wx.redrock.team/magicloop/rushb?b=' + rushbUrl + '&scope=student'
}

const App = () => {
  useEffect(() => {
    checkToken()
  }, [])

  return (
    <Router>
      <Switch>
        <Home path="/" exact />
        <Leaderboard path="/leaderboard" />
        <Map path="/map" exact />
        <Route path="/map/:area" component={AnswerQ} />
      </Switch>
    </Router>
  )
}

export default App
