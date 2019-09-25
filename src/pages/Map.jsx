import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Border from '../components/base/Border.jsx'
import Back from '../components/base/Back.js'
import ChinaMap from '../components/ChinaMap.jsx'
import LimitDialog from '../components/LimitDialog.jsx'
import tipBg from '../assets/images/tip.png'

const MapWrapper = styled.div`
  height: 100%;
  position: relative;
`

const Tip = styled.div`
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  bottom: 16%;
  width: 66.7vw;
  line-height: 17.1vw;
  font-size: 6vw;
  text-align: center;
  font-family: coolfont;
  color: #f1ebe0;
  background: url(${tipBg}) no-repeat center center/100% 100%;
`

const Map = ({ history }) => {
  const [showDialog, setShowDialog] = useState(false)
  return (
    <Border>
      <Back onClick={() => history.replace('/')} />
      {showDialog && <LimitDialog onClick={() => setShowDialog(false)} />}
      <MapWrapper>
        <ChinaMap onCanNotAnswer={() => setShowDialog(true)} />
        <Tip>点击选择地理区域</Tip>
      </MapWrapper>
    </Border>
  )
}

export default withRouter(Map)
