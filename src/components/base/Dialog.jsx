import React from 'react'
import styled from 'styled-components'
import dialogBorder from '../../assets/images/dialog-border.jpg'

const DialogShadow = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  background: #0004;
  z-index: 10000;
`

const DialogBorder = styled.div`
  width: 82vw;
  min-height: 10vh;
  padding: 7.3vw;
  box-sizing: border-box;
  background: url(${dialogBorder}) no-repeat center center/100% 100%;
`

const Dialog = ({ children }) => {
  return (
    <DialogShadow>
      <DialogBorder>
        {children}
      </DialogBorder>
    </DialogShadow>
  )
}

export default Dialog
