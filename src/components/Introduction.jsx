import React from 'react'
import styled from 'styled-components'
import Button from '../components/base/Button.jsx'
import introductionBg from '../assets/images/introduction-bg.jpg'
import 重庆 from '../assets/images/重庆.png'
import 河南 from '../assets/images/河南.png'
import 湖北 from '../assets/images/湖北.png'
import 安徽 from '../assets/images/安徽.png'
import 海南 from '../assets/images/海南.png'
import 江苏 from '../assets/images/江苏.png'
import 江西 from '../assets/images/江西.png'
import 湖南 from '../assets/images/湖南.png'
import 贵州 from '../assets/images/贵州.png'
import 广西 from '../assets/images/广西.png'
import 广东 from '../assets/images/广东.png'
import 福建 from '../assets/images/福建.png'
import 台湾 from '../assets/images/台湾.png'
import 浙江 from '../assets/images/浙江.png'
import 宁夏 from '../assets/images/宁夏.png'
import 上海 from '../assets/images/上海.png'
import 北京 from '../assets/images/北京.png'
import 天津 from '../assets/images/天津.png'
import 澳门 from '../assets/images/澳门.png'
import 陕西 from '../assets/images/陕西.png'
import 山西 from '../assets/images/山西.png'
import 山东 from '../assets/images/山东.png'
import 河北 from '../assets/images/河北.png'
import 辽宁 from '../assets/images/辽宁.png'
import 吉林 from '../assets/images/吉林.png'
import 黑龙江 from '../assets/images/黑龙江.png'
import 内蒙古 from '../assets/images/内蒙古.png'
import 云南 from '../assets/images/云南.png'
import 四川 from '../assets/images/四川.png'
import 青海 from '../assets/images/青海.png'
import 甘肃 from '../assets/images/甘肃.png'
import 新疆 from '../assets/images/新疆.png'
import 西藏 from '../assets/images/西藏.png'
import 香港 from '../assets/images/香港.png'

const areaMap = {
  重庆,
  河南,
  湖北,
  安徽,
  海南,
  江苏,
  江西,
  湖南,
  贵州,
  广西,
  广东,
  福建,
  台湾,
  浙江,
  宁夏,
  上海,
  北京,
  天津,
  澳门,
  陕西,
  山西,
  山东,
  河北,
  辽宁,
  吉林,
  黑龙江,
  内蒙古,
  云南,
  四川,
  青海,
  甘肃,
  新疆,
  西藏,
  香港,
}

const IntroWrapper = styled.div`
  display: flex;
  height: calc(100vh - 7vw);
  padding: 7vh 0 5vh;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const Area = styled.div`
  width: 90vw;
  height: 30vh;
  background: url(${({ area }) => areaMap[area]}) no-repeat center center/auto 100%;
`

const ContinueButton = styled(Button)`
  font-family: coolfont;
  color: #ffd375;
`

const Intro = styled.div`
  width: 84vw;
  box-sizing: border-box;
  padding: 4vh 5.6vw;
  background: url(${introductionBg}) no-repeat center center/100% 100%;
`

const Title = styled.div`
  color: #aa4538;
  font-family: coolfont;
  font-size: 5vw;
`

const IntroTitle = styled.div`
  text-align: center;
  color: #f3af59;
  font-family: coolfont;
  font-size: 5vw;
  margin-bottom: 2.4vh;
`

const Content = styled.div`
  color: #fff;
  font-size: 3.5vw;
  line-height: 6vw;
`

const Introduction = ({ area }) => {
  return (
    <IntroWrapper>
      <Title>{area}</Title>
      <Area area={area} />
      <Intro>
        <IntroTitle>{area}</IntroTitle>
        <Content>{`湖南省位于我国中部、长江中游，省会长沙。湖南自古盛植木芙蓉，五代时就有“秋风万里芙蓉国”之说，因此又有“芙蓉国”之称。`}</Content>
      </Intro>
      <ContinueButton type="primary">点击继续</ContinueButton>
    </IntroWrapper>
  )
}

export default Introduction
