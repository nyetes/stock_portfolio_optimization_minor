import React from 'react';
import { Bar } from 'react-chartjs-2';

const rand = () => Math.round(Math.random() * 20 - 10);

// const data = {
//   labels: ['Fb','NKE','SPG','KO','IBM','WWE','TSLA','NFLX','GOOGL','AAPL'],
//   datasets: [
//     {
//       type: 'line',
//       label: 'Dataset 1',
//       borderColor: 'rgb(54, 162, 235)',
//       borderWidth: 2,
//       fill: false,
//       data: [45.5,
//         27.8,
//         21.8,
//         20.0,
//         19.0,
//         17.23,
//         16.92,
//         17.16,
//         16.13,
//         17.23],
//     },
//     {
//       type: 'bar',
//       label: 'Dataset 2',
//       backgroundColor: 'rgb(255, 99, 132)',
//       data:   [ 45.4694,
//             27.9030,
//            35.1231,
//             34.4709,
//            28.3645,
//              17.0836,
//           25.2443,
//             30.8903,
//             24.2700,
//            55.5317],
//       borderColor: 'white',
//       borderWidth: 2,
//     }
//   ],
// };

const MultiType = ({labels,barData,lineData}) => (
  <>
      <h1 className='title'>MultiType Chart</h1>
    <Bar data={
                {
                    labels: labels,
                    datasets: [
                        {
                          type: 'line',
                          label: 'Portfolio Risk',
                          borderColor: 'rgb(54, 162, 235)',
                          borderWidth: 2,
                          fill: false,
                          data:lineData,
                        },
                        {
                          type: 'bar',
                          label: 'Individual Stock Risk',
                          backgroundColor: 'rgb(255, 99, 132)',
                          data:barData,
                          borderColor: 'white',
                          borderWidth: 2,
                        }
                      ]
                }        
    }
     />
  </>
);

export default MultiType;