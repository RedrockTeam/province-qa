import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Border from '../components/base/Border.jsx'
import Button from '../components/base/Button.jsx'
import UserInfo from '../components/UserInfo.jsx'
import Board from '../components/Board.jsx'
import Back from '../components/base/Back.js'
import { API } from '../config.js'

const BackLink = styled(Button)`
  font-family: coolfont;
  color: #ffc071;
`

const LeaderboardWrapper = styled.div`
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
  const [rankUsers, setRankUsers] = useState([])
  const [myself, setMyself] = useState({})
  const TOKEN = localStorage.getItem('token-province-qa')

  useEffect(() => {
    const fetchRank = () => {
      fetch(`${API}/list/all?token=${TOKEN}`)
        .then(res => res.json())
        .then(({ message, myself, status }) => {
          if (status !== 1001) {
            throw new Error('error')
          }

          setRankUsers(message)
          setMyself(myself)
        })
        .catch(e => alert(e))
    }

    fetchRank()
  }, [TOKEN])

  return (
    <Border>
      <Back onClick={() => history.replace('/')} />
      <LeaderboardWrapper>
        <UserInfo
          rank={myself.rank}
          name={myself.username}
          correct={myself.right_num}
          avatarUrl={myself.image}
        />
        <Board rankUsers={rankUsers} />
        <BackLink to="/map" type="primary">返回地图</BackLink>
      </LeaderboardWrapper>
    </Border>
  )
}

export default withRouter(Leaderboard)
