import React, { Component } from 'react'
import * as d3 from 'd3'

const Slice = props => {
  let { pie } = props

  let arc = d3.arc()
    .innerRadius(0)
    .outerRadius(100)

  let interpolate = d3.interpolateRgb('#eaaf79', '#bc3358')

  return pie.map((slice, index) => {
    let sliceColor = interpolate(index / (pie.length - 1))
    return <path d={arc(slice)} fill={sliceColor} key={index}/>
  })
}

class PieChart extends Component {
  constructor(props) {
    super(props)
    this.height = 300
    this.width = 300

  }

  render() {
    return (
      <div>

        <svg height={this.height} width={this.width}>
          <g transform={`translate(${this.width / 2}, ${this.height / 2})`}>
            <Slice pie={d3.pie()(this.props.data)}/>
          </g>
        </svg>
      </div>
    )
  }

}

export default PieChart
