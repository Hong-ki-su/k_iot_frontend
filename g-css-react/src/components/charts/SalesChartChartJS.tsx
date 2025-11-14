import React from 'react'
import {Line} from 'react-chartjs-2';
import {chart as ChartJS} from `chart.js`;
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, filter} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, filter)

//! mock data
const data = {
  labels : ['월', '화', '수', '목', '금', '토', '일'],
  datasets: [
    {
      // 
      label: '매출',
      data: [120, 200, 150, 300, 250, 320, 290],
      fill: true,
      // 곡선의 부드러움
      tension: 0.3,
      // 라인 두께
      borderWidth: 2,
      // 각 데이터 점의 크기
      pointRadius: 3,
      // 배경색: 문자열 / 함수
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
}

//! chart 옵션 (반응형, 플러그인, 차트의 가로: 세로 비율 유지, 범례 표시, 축 설정)
const options = {
  responsive: true,
  // 유지 + 측면 + 비율
  maintainAspectRatio: false,
  plugins: {
    legend: {display: false},
    tooptip: {mode: 'index', intersect: false}
  },
  scales: {
    x: {grid: {display: false}, ticks: {maxRotation: 0}},
    y: {grid: {color: `rgba(255, 255, 255, 0.04)`}}
  }
}

export const ChartWrapper = styled.div`
  height: clamp(160px, 32vh, 320px);
  width: 100%;
`

function SalesChartChartJS() {
  return (
    <ChartWrapper>
    <Line data={data} options={options}/> 
    </ChartWrapper>
  )
}

export default SalesChartChartJS