import React from 'react'
import styled from 'styled-components'
import RankUser from './RankUser.jsx'

const BoardWrapper = styled.div`
  width: 100%;
  height: 37.4vh;
`

const BoardHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 4.6vw;
  line-height: 4.6vw;
  font-family: coolfont;
`

const RankList = styled.div`
  overflow-y: auto;
  height: 32.5vh;
  padding: 1vh 0;
`

const Board = ({ rankUsers }) => {
  console.log(rankUsers)
  return (
    <BoardWrapper>
      <BoardHead>
        <span>排名</span>
        <span>昵称</span>
        <span>正确数</span>
      </BoardHead>
      <RankList>
        {rankUsers.map(u => (
          <RankUser
            key={u.rank}
            rank={u.rank}
            avatarUrl={u.image}
            name={u.username}
            correct={u.right_num}
          />
        ))}
      </RankList>
    </BoardWrapper>
  )
}

export default Board
