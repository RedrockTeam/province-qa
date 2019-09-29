import React from 'react'
import styled from 'styled-components'
import Dialog from './base/Dialog.jsx'
import Button from './base/Button.jsx'

const LimitDialogWrapper = styled.div`
  width: 100%;
  height: 27vh;
  padding: 5vh 0 2vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  font-family: coolfont;
  font-size: 4vw;
`

const P = styled.div`
  color: #ac483b;
  font-size: 3.5vw;
  margin-bottom: 5vw;
`

const YesButton = styled(Button)`
  width: 40.5vw;
  line-height: 6.7vh;
  color: #ffc071;
  font-family: coolfont;
`

const LimitDialog = ({ onClick }) => (
  <Dialog>
    <LimitDialogWrapper>
      <Title>您的答题次数已到上限了</Title>
      <P>每天只能回答 20 道题目，不能贪心喔</P>
      <YesButton type="dialog" onClick={onClick}>我知道啦</YesButton>
    </LimitDialogWrapper>
  </Dialog>
)

export default LimitDialog
