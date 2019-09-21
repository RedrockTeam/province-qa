import React from 'react'
import styled from 'styled-components'
import Dialog from './base/Dialog.jsx'
import Button from './base/Button.jsx'
import tipBg from '../assets/images/tip.png'

const GradeDialogWrapper = styled.div`
  width: 100%;
  height: 45.7vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  width: 100%;
  line-height: 10.4vh;
  text-align: center;
  color: #f0eadf;
  font-family: coolfont;
  font-size: 8.5vw;
  background: url(${tipBg}) center center/100% 100%;
`

const P = styled.p`
  text-align: center;
  font-family: coolfont;
  font-size: 4vw;
  line-height: 8vw;
`

const ButtonWrapper = styled.div`
  width: 100%;
  padding-bottom: 2.5vh;
  display: flex;
  justify-content: space-between;
`

const LeaderboardButton = styled(Button)`
  font-family: coolfont;
  width: 31.2vw;
  line-height: 6.2vh;
`

const BackButton = styled(Button)`
  font-family: coolfont;
  width: 31.2vw;
  line-height: 6.2vh;
  color: #ffc288;
`

const GradeDialog = () => {
  return (
    <Dialog>
      <GradeDialogWrapper>
        <Title>成绩公布</Title>
        <P>恭喜你完成该地区所有题目<br />您共答对3道题目！<br />请继续加油哦～</P>
        <ButtonWrapper>
          <LeaderboardButton type="dialog" to="/leaderboard">排行榜</LeaderboardButton>
          <BackButton type="dialog" to="/map">返回地图</BackButton>
        </ButtonWrapper>
      </GradeDialogWrapper>
    </Dialog>
  )
}

export default GradeDialog
