import React from 'react'
import styled from 'styled-components'

const RankUserWrapper = styled.div`
  display: flex;
  height: 8.3vh;
  justify-content: space-between;
  align-items: center;
  font-size: 4.6vw;
`

const Number = styled.div`
  width: 7vw;
  height: 7vw;
  color: #ac483b;
  font-family: coolfont;
  font-size: 6vw;
  line-height: 7.5vw;
  text-align: center;
  margin-left: .5vw;
  margin-right: 9vw;
  border-radius: 50%;
  border: .5vw solid #ac483b;
  background-color: ${({ isTopThree }) => isTopThree ? '#e9994c' : 'initial'};
`

const Username = styled.div`
  width: 45.3vw;
  display: flex;
  align-items: center;
`

const Avatar = styled.div`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  border: .5vw solid #ac483b;
  background-image: url(${({ url }) => url});
  background-size: 100% 100%;
  margin-right: 2.4vw;
`

const Name = styled.div`
  width: 32.6vw;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
`

const Correct = styled.div`
  width: 13.5vw;
  text-align: center;
`

const RankUser = ({ rank, avatarUrl, name, correct }) => {
  return (
    <RankUserWrapper>
      <Number isTopThree={rank <= 3}>{rank}</Number>
      <Username>
        <Avatar url={avatarUrl} />
        <Name>{name}</Name>
      </Username>
      <Correct>{correct}</Correct>
    </RankUserWrapper>
  )
}

export default RankUser
