import React from 'react'
import styled from 'styled-components'
import dialogBorder from '../../assets/images/dialog-border.jpg'

const DialogShadow = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${({ isShow }) => isShow ? 'flex' : 'none' };
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background: #0004;
`

const DialogBorder = styled.div`
  width: 82vw;
  min-height: 10vh;
  padding: 7.3vw;
  box-sizing: border-box;
  background: url(${dialogBorder}) no-repeat center center/100% 100%;
`

const Dialog = ({ isShow, children }) => {
  return (
    <DialogShadow isShow={isShow}>
      <DialogBorder>
        {children}
      </DialogBorder>
    </DialogShadow>
  )
}

export default Dialog
