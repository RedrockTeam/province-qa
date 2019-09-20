import React from 'react'
import styled from 'styled-components'
import bgBorder from '../../assets/images/bg-border.jpg'

const BorderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgBorder}) no-repeat center center/100% 100%;
`

const Border = ({ children }) => (
  <BorderWrapper>
    {children}
  </BorderWrapper>
)

export default Border
