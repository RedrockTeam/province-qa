import React from 'react'
import styled from 'styled-components'
import dialogBorder from '../../assets/images/dialog-border.jpg'

const DialogWrapper = styled.div`
  width: 90vw;
  min-height: 10vh;
  background: url(${dialogBorder}) no-repeat center center/100% 100%;
`

const Dialog = ({ children }) => {
  return (
    <DialogWrapper>
      {children}
    </DialogWrapper>
  )
}

export default Dialog
