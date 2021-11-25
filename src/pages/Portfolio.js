import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import Multi from '../components/Mutli';
import Header from '../components/Header' ;


const TICKERS ={"FB":"Facebook","NFLX":"Netflix","KO":"CocoaCola","SPG":"Simon Property Group","WWE":"World Wrestling Entertainment",
"AAPL":"Apple","IBM":"IBM","NKE":"Nike","GOOGL":"Google","TSLA":"Tesla"};



//Data for DoughnutChart
const data = {
    labels: Object.entries(TICKERS).map(([key, value]) => key),
    datasets: [
      {
        label: '# of Stocks',
        data: Array(10).fill(10),
        backgroundColor: [
          'rgb(66,103,178)',
          'rgb(229,9,20)',
          'rgb(255,0,0)',
          'rgb(232, 33, 39)',
          'rgb(220,20,60)',
          "rgb(85,85,85)",
          "rgb(255,192,203)",
          'rgb(0,0,128)',
          'rgb(255,255,0)',
          'rgb(232, 33, 39)'
        ],
        borderColor: [
          'rgb(66,103,178)',
          'rgb(229,9,20)',
          'rgb(255,0,0)',
          'rgb(232, 33, 39)',
          'rgb(220,20,60)',
          "rgb(85,85,85)",
          "rgb(255,192,203)",
          'rgb(0,0,128)',
          'rgb(255,255,0)',
          'rgb(232, 33, 39)'
        ],
        borderWidth: 1,
      },
    ],
  };

function Portfolio() {
    const [risks,setRisks] = useState();
    const [portRisk,setPortRisk] = useState();
    const [diverseRisk,setDiverseRisk] = useState();
    useEffect(()=>{
        axios.get('http://localhost:8000/stocks/portfolio').then(res=>{
            console.log('res',res.data.risks);
            setRisks(res.data.risks);
            setPortRisk(res.data.portRisk);
            setDiverseRisk(res.data.diverseRisk)
        })
    },[])
    const showRow = data=>{
        return Object.entries(data).map(([key, value]) => {
          return   <tr key={key}>
                    <td class="Title">{TICKERS[key]}</td>
                    <td class="Title">{key}</td>
                     <td class="Percentage">{(value*100).toFixed(2)}%</td>
                </tr>
        })
    }
    return(
        <>
        <Header/>
        <h1>Why Optimal Portfolios?</h1>
         <section class="about-portfolio">
         <div class="portfolio">
                {/* <img src="images/risks.png"/> */}
                <Doughnut data={data}/> <br/>
                <strong>
                Portfolio risk = {(portRisk * Math.sqrt(250)*100).toFixed(2) || 0} %
                </strong>
            </div>

</section>
<section>


<div class="row">

<div class="about-col">
    <h1>Risk of Individual Stocks</h1>
    {/* Table goes here */}
    <table class="tablecontent">
<thead>
    <tr>
        <th>Stock</th>
        <th>Ticker</th>
        <th>Risk</th>
    </tr>
</thead>
<tbody>
    {risks && showRow(risks)}
</tbody>

</table>
    
</div>
</div>   
{   
risks &&
<Multi 
    labels={Object.entries(risks).map(([key, value]) => key)}
    barData ={Object.entries(risks).map(([key, value]) =>value)}
    lineData = {diverseRisk}
/> }
    </section>
        </>
    );
}
  

  export default Portfolio;