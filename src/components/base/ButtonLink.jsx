import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import optionBg from '../../assets/images/option-button.png'
import dialogBg from '../../assets/images/dialog-button.png'
import primaryBg from '../../assets/images/primary-button.png'

const ButtonLink = styled(Link)`
  display: block;
  width: 41vw;
  line-height: 8.15vh;
  text-align: center;
  font-size: 4.6vw;
  color: #fff;
  background-image: url(${({ bg }) => bg});
  background-size: 100% 100%;
  text-decoration: none;
  letter-spacing: 5px;
  box-shadow: 2px 2px 4px #888;
  &:hover {
    filter: brightness(0.9) contrast(110%);
  }
`

const bgMap = {
  option: optionBg,
  dialog: dialogBg,
  primary: primaryBg,
}

const Button = ({ type, to, children, className }) => {
  return (
    <ButtonLink bg={bgMap[type]} to={to} className={className}>
      {children}
    </ButtonLink>
  )
}

export default Button
