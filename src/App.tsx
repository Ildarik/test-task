import React, { useState } from "react"
import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"
import "./App.css"

const getNewArray = () => {
  return Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))
}

const LineChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "area",
    },
    series: [
      {
        data: getNewArray(),
      },
    ],
  })

  const updateSeries = () => {
    setChartOptions({
      ...chartOptions,
      series: [
        {
          data: getNewArray(),
        },
      ],
    })
  }

  return (
    <div className="container">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <div className="btn">
        <button onClick={updateSeries}>UPDATE</button>
      </div>
    </div>
  )
}

export default LineChart
