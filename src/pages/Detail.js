import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LineChart from '../components/LineChart'
import Table from '../components/Table';
import {Stocks} from '../Stocks' ;
import {Link} from 'react-router-dom';

const COLORS = {FB:'rgb(66,103,178)',NFLX:'rgb(229,9,20)',TSLA:'RGB: 204, 0, 0'}
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

function Detail(){
    const[data,setData] = useState();
    const [returns,setReturns] = useState();
    const [expectedReturn, setExpectedReturn] = useState();
    const [risk, setRisk] = useState();
    const {stock} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8000/${stock}`).then(res=>{
          setExpectedReturn(res.data.expectedReturn);
          setRisk(res.data.dailyRisk);
            setData({
                labels: Object.keys(res.data.price),
                datasets: [
                  {
                    label: 'Daily Price in $',
                    data: Object.values(res.data.price),
                    fill: false,
                  backgroundColor:Stocks[stock].color,
                  borderColor: Stocks[stock].color
                  },
                ],
                });
                          setReturns({
                            labels: Object.keys(res.data.returns),
                            datasets: [
                              {
                                label: 'Daily Expectation',
                                data: Object.values(res.data.returns),
                                fill: false,
                              backgroundColor:Stocks[stock].color,
                              borderColor: Stocks[stock].color,
                              yAxisID: 'y-axis-1',

                              },
                              {
                                label: '# Expected Return',
                                data: Array(250).fill(res.data.expectedReturn),
                                fill: false,
                                backgroundColor: 'rgb(255,215,0)',
                                borderColor:'rgb(255,215,0)',
                                yAxisID: 'y-axis-2',
                              },
                            ],
                                      })     
        })
    },[])

    return(
    <>
    <section class="sub-header4">
        <nav>
            <a href="index.html"> <img src="icons8-investment-portfolio.svg"/> </a>
            <div class="nav-links" id="navlinks">
                <i class="fa fa-times" onclick="hidemenu()"></i>
                <ul>
                <li><Link to = "/"> Home</Link></li>
            
            <li><Link to = "/dashboard">Dashboard</Link></li>
            <li><Link to = "/portfolio">Portfolio</Link></li>
            <li><Link to = "/optimize">Optimization</Link></li>
                </ul>

            </div>
        </nav>
        </section>
        <section class="about-google">
        <h1>Graph Related To {stock} Stock</h1>
        <div class="container">
            <div class="chart-container">
                <div className='returnChart'>
                { data && <LineChart data={data}/>}
                </div>
            </div>
            <div class="chart-container">
                <div id="returnChart">
                  {returns && <LineChart data={returns}/>}
                </div>
            </div>
        </div>
        {expectedReturn && <Table expReturn={expectedReturn} risk={risk}/>}
        </section>
    </>
    );
}
    
  

export default Detail;



