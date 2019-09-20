import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Border from '../components/base/Border.jsx'
import Back from '../components/base/Back.js'

const Map = ({ history }) => {
  return (
    <Border>
      <Back onClick={() => history.goBack()} />
    </Border>
  )
}

export default withRouter(Map)
