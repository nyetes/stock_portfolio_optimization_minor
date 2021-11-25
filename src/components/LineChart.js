import React from 'react';
import { Line } from 'react-chartjs-2';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
function LineChart({data}) {
    return(
      <Line data={data} options={options} />
    );
}
  

  export default LineChart;