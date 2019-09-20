import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Border from '../components/base/Border.jsx'
import Button from '../components/base/Button.jsx'
import UserInfo from '../components/UserInfo.jsx'
import Board from '../components/Board.jsx'
import Back from '../components/base/Back.js'

const BackButton = styled(Button)`
  font-family: coolfont;
  color: #ffc071;
`

const BorderWrapper = styled.div`
  width: 77.6vw;
  height: 82.6vh;
  display: flex;
  margin: 0 auto;
  padding-top: 8.7vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Leaderboard = ({ history }) => {
  return (
    <Border>
      <Back onClick={() => history.goBack()} />
      <BorderWrapper>
        <UserInfo rank={1} name="白开" correct={20} />
        <Board />
        <BackButton to="/map" type="primary">返回地图</BackButton>
      </BorderWrapper>
    </Border>
  )
}

export default withRouter(Leaderboard)
