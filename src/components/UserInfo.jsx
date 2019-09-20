import React from 'react'
import styled from 'styled-components'

const UserInfoWrapper = styled.div`
  height: 26.6vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Name = styled.div`
  font-size: 4.6vw;
`

const Avatar = styled.div`
  width: 18vw;
  height: 18vw;
  border-radius: 50%;
  border: .5vw solid #ac483b;
  background-image: url(${({ url }) => url});
`

const Your = styled.div`
  font-size: 5vw;
  font-family: coolfont;
  color: #a93828;
`

const UserInfo = ({ rank, avatarUrl, name, correct }) => {
  return (
    <UserInfoWrapper>
      <Avatar url={avatarUrl} />
      <Name>{name}</Name>
      <Your>我的排名：NO.{rank}</Your>
      <Your>累计答题正确数：{correct}题</Your>
    </UserInfoWrapper>
  )
}

export default UserInfo
