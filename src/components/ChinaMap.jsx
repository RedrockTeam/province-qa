import React from 'react'
import { withRouter } from 'react-router-dom'
import echarts from 'echarts'
import 'echarts/map/js/china'
import geoJson from 'echarts/map/json/china.json'
import { API } from '../config.js'

class ChinaMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = { map: null, data: {} }
    this.TOKEN = localStorage.getItem('token')
  }

  componentDidMount() {
    fetch(`${API}/province/done?token=${this.TOKEN}`)
      .then(res => res.json())
      .then(({ message, status }) => {
        if (status !== 1001) {
          throw new Error('error')
        }

        // let isHaiNanSelected
        const data = message.map(d => {
          return { name: d.name, selected: d.done === "true" }
        })

        this.map = React.createRef()
        // data.push({ name: '南海诸岛', selected: isHaiNanSelected })
        this.setState({ map: this.map, data })
      })
      .catch(e => alert(e))
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
        top: '24%',
        itemStyle: {
          normal: {
            label: {
              show: true,
              color: '#333',
              fontSize: 12,
            },
            borderWidth: 2,
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
        data: this.state.data,
      }]
    })

    myChart.on('click', params => {
      console.log(params)
      if (!params.data.selected) {
        fetch(`${API}/user/done?token=${this.TOKEN}`)
          .then(res => res.json())
          .then(({ answer: canAnswer, status }) => {
            if (status !== 1001) {
              throw new Error('error')
            }

            if (!(canAnswer === "true")) {
              this.props.onCanNotAnswer()
              return
            }

            let area = params.data.name
            if (area === '南海诸岛') {
              area = '海南'
            }

            this.props.history.replace(`/map/${area}`)
          })
          .catch(e => alert(e))
      }
    })
  }

  render() {
    return (
      <div ref={this.map} style={{ width: '94vw', height: '100%' }}></div>
    )
  }
}

export default withRouter(ChinaMap)
