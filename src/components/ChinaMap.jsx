import React from 'react'
import echarts from 'echarts'
import 'echarts/map/js/china'
import geoJson from 'echarts/map/json/china.json'

class ChinaMap extends React.Component {
  constructor() {
    super()
    this.state = { map: null }
  }
  componentDidMount() {
    this.map = React.createRef()
    this.setState({ map: this.map })
  }
  componentDidUpdate() {
    this.initalECharts();
  }
  initalECharts() {
    const myChart = echarts.init(this.map.current)
    echarts.registerMap('zhongguo', geoJson)
    myChart.setOption({
      series: [{
        type: 'map',
        map: 'china',
        roam: true,
        itemStyle: {
          normal: {
            label: {
              show: false,
              color: '#333',
              fontSize: 18,
            },
            borderWidth: 3,
            borderColor: '#ab4033',
            areaColor: 'transparent',
          },
          emphasis: {
            areaColor: '#f3af59',
          }
        },
        scaleLimit: {
          min: 1.2,
          max: 60,
        },
        data: [
          { name: '西藏', value: 605.83 },
          { name: '青海', value: 1670.44 },
          { name: '宁夏', value: 2102.21 },
          { name: '海南', value: 2522.66 },
          { name: '甘肃', value: 5020.37 },
          { name: '贵州', value: 5701.84 },
          { name: '新疆', value: 6610.05 },
          { name: '云南', value: 8893.12 },
          { name: '重庆', value: 10011.37 },
          { name: '吉林', value: 10568.83 },
          { name: '山西', value: 11237.55 },
          { name: '天津', value: 11307.28 },
          { name: '江西', value: 11702.82 },
          { name: '广西', value: 11720.87 },
          { name: '陕西', value: 12512.3 },
          { name: '黑龙江', value: 12582 },
          { name: '内蒙古', value: 14359.88 },
          { name: '安徽', value: 15300.65 },
          { name: '北京', value: 16251.93, selected: true },
          { name: '福建', value: 17560.18 },
          { name: '上海', value: 19195.69, selected: true },
          { name: '湖北', value: 19632.26 },
          { name: '湖南', value: 19669.56 },
          { name: '四川', value: 21026.68 },
          { name: '辽宁', value: 22226.7 },
          { name: '河北', value: 24515.76 },
          { name: '河南', value: 26931.03 },
          { name: '浙江', value: 32318.85 },
          { name: '山东', value: 45361.85 },
          { name: '江苏', value: 49110.27 },
          { name: '广东', value: 53210.28 },
          { name: '澳门', value: 53210.28, selected: true },
        ],
      }]
    })
    myChart.on('click', (params) => {
      console.log(params)
    })
  }
  render() {
    return (
      <div ref={this.map} style={{ width: '94vw', height: '90vw' }}></div>
    )
  }
}

export default ChinaMap