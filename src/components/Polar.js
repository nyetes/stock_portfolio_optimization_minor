import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import {Stocks} from '../Stocks';
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

const Polar = ({success, data,tickers}) => {
    console.log('stocks%%%%',Stocks['AAPL'].color)
    console.log('ticker',tickers)
    if(!success){
        return <div>Your Expectation is not Practical.</div>
    }
    return(
        
             <>
            <h1 className='title'>Polar Area Chart</h1>
          <PolarArea data={
              {
                labels: Object.entries(data).map(([key,value])=> key),
                datasets: [
                  {
                    label: '# of Votes',
                    data: Object.entries(data).map(([key,value])=> (value.toFixed(4))*100),
                    backgroundColor: tickers.map(tick=>Stocks[tick].color),
                    borderWidth: 1,
                  },
                ],
              }
          } />
        </>
    );
}
    


export default Polar;