import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import optionBg from '../../assets/images/option-button.png'
import dialogBg from '../../assets/images/dialog-button.png'
import primaryBg from '../../assets/images/primary-button.png'

const bgMap = {
  option: optionBg,
  dialog: dialogBg,
  primary: primaryBg,
}

const RouteButton = styled(Link)`
  display: block;
  width: 41vw;
  line-height: 8.15vh;
  text-align: center;
  font-size: 4.6vw;
  color: #eee7e6;
  background-image: url(${({ bg }) => bg});
  background-size: 100% 100%;
  text-decoration: none;
  letter-spacing: 5px;
  box-shadow: 2px 2px 4px #888;
  outline: none;
`

const NormalButton = styled.button`
  border: none;
  display: block;
  width: 41vw;
  line-height: 8.15vh;
  text-align: center;
  font-size: 4.6vw;
  color: #eee7e6;
  background-image: url(${({ bg }) => bg});
  background-size: 100% 100%;
  text-decoration: none;
  letter-spacing: 5px;
  box-shadow: 2px 2px 4px #888;
  outline: none;
`

const Button = ({ type, to, children, onClick, className, disabled }) => {
  const BaseButton = to ? RouteButton : NormalButton

  return (
    <BaseButton
      bg={bgMap[type]}
      to={to}
      onClick={onClick}
      className={className}
      disabled={disabled}
      replace
    >
      {children}
    </BaseButton>
  )
}

export default Button
