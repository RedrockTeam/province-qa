import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Border from '../components/base/Border.jsx'
import Back from '../components/base/Back.js'
import Introduction from '../components/Introduction.jsx'

const AnswerQ = ({ match, history }) => {
  const area = match.params.area
  return (
    <Border>
      <Back onClick={() => history.goBack()} />
      <Introduction area={area} />
    </Border>
  )
}

export default withRouter(AnswerQ)
