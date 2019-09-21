import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Border from '../components/base/Border.jsx'
import Back from '../components/base/Back.js'
import ChinaMap from '../components/ChinaMap.jsx'
import tipBg from '../assets/images/tip.png'

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Tip = styled.div`
  width: 66.7vw;
  line-height: 17.1vw;
  font-size: 6vw;
  text-align: center;
  font-family: coolfont;
  color: #f1ebe0;
  background: url(${tipBg}) no-repeat center center/100% 100%;
`

const Map = ({ history }) => {
  return (
    <Border>
      <Back onClick={() => history.goBack()} />
      <MapWrapper>
        <ChinaMap />
        <Tip>点击选择地理区域</Tip>
      </MapWrapper>
    </Border>
  )
}

export default withRouter(Map)
