import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Border from '../components/base/Border.jsx'
import Back from '../components/base/Back.js'
import ChinaMap from '../components/ChinaMap.jsx'
import LimitDialog from '../components/LimitDialog.jsx'
import tipBg from '../assets/images/tip.png'
import addBg from '../assets/images/add.png'
import cutBg from '../assets/images/cut.png'

const MapWrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const ZoomButton = styled.button`
  width: 8.9vw;
  height: 4.57vh;
  position: absolute;
  top: 2.4vw;
  right: 1.1vw;
  border: none;
  padding: 0;
  outline: none;
`

const Add = styled(ZoomButton)`
  right: 1.1vw;
  background: url(${addBg}) center center/100% 100%;
`

const Cut = styled(ZoomButton)`
  right: 15.1vw;
  background: url(${cutBg}) center center/100% 100%;
`

const Map = ({ history }) => {
  const [showDialog, setShowDialog] = useState(false)
  const [zoom, setZoom] = useState(1.2)

  const addZoom = () => {
    if (zoom < 60) {
      setZoom(parseFloat(zoom.toFixed(1)) + 5)
    }
  }

  const cutZoom = () => {
    if (zoom > 2) {
      setZoom(parseFloat(zoom.toFixed(1)) - 5)
    }
  }

  return (
    <Border>
      <Back onClick={() => history.replace('/')} />
      {showDialog && <LimitDialog onClick={() => setShowDialog(false)} />}
      <MapWrapper>
        <ChinaMap onCanNotAnswer={() => setShowDialog(true)} zoom={zoom} />
        <Tip>点击选择地理区域</Tip>
        <Add onClick={addZoom} />
        <Cut onClick={cutZoom} />
      </MapWrapper>
    </Border>
  )
}

export default withRouter(Map)
