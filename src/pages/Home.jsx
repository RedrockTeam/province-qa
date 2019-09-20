import React from 'react'
import styled from 'styled-components'
import bg from '../assets/images/bg.jpg'
import Button from '../components/base/Button.jsx'

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bg}) no-repeat center center/100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Leaderboard = styled(Button)`
  color: #ede4e3;
  width: 41vw;
  font-family: 'coolfont';
`

const Start = styled(Button)`
  color: #ffc071;
  width: 41vw;
  font-family: 'coolfont';
`

const Span = styled.span`
  display: inline-block;
  width: 18vw;
  height: 18vw;
  line-height: 18vw;
  text-align: center;
  font-family: coolfont;
  color: #ad3d2e;
  font-size: 13vw;
  border-radius: 50%;
  border: .7vw solid #a93828;
  margin-bottom: 5px;
`

const TitleContent = ({ children, className }) => (
  <div className={className}>
    {children.split('').map((child, index) => (
      <Span key={index}>{child}</Span>
    ))}
  </div>
)

const Title = styled(TitleContent)`
  width: 80vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 4.5vh;
  margin: 0 auto;
`

const LinksWrapper = styled.div`
  padding-bottom: 7vh;
  width: 86vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const Home = () => {
  return (
    <HomeWrapper>
      <Title>中国省份问问答</Title>
      <LinksWrapper>
        <Leaderboard to="/leaderboard" type="primary">排行榜</Leaderboard>
        <Start to="/map" type="primary">开始答题</Start>
      </LinksWrapper>
    </HomeWrapper>
  )
}

export default Home
