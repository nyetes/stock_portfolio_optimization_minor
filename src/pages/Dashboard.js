
import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header' ;

function Dashboard() {
    return(
    <>
     <Header/>
    <div class="heading">
        <p>Stock List</p>
        </div>
        <div class="stock-container">
        <div class="stock-tile">
            <span class="stock-icon"><img src="google.svg"></img></span>
            <span><Link to="/detail/GOOGL">Google</Link></span>
        </div>
        <div class="stock-tile">
            <span class="stock-icon"><img src="/SPG.svg"></img></span>
            <span><Link to="/detail/SPG">Simon Property Group</Link></span>
        </div>
        <div class="stock-tile">
            <span class="stock-icon"><img src="tesla.svg"></img></span>
            <span><Link to="detail/TSLA">Tesla</Link></span>
        </div>
        <div class="stock-tile">
            <span class="stock-icon"><img src="facebook.svg"></img></span>
            <span><Link to="/detail/FB">Facebook</Link></span>
        </div>
        <div class="stock-tile">
            <span class="stock-icon"><img src="wwe.svg"></img></span>
            <span><Link to="/detail/WWE">World Wrestling</Link></span>
        </div>
        <div class="stock-tile">
            <span class="stock-icon"><img src="apple.svg"></img></span>
            <span><Link to="/detail/APPL">Apple</Link></span>
        </div>
        <div class="stock-tile">
            <span class="stock-icon"><img src="cocacola.svg"></img></span>
            <span><Link to="/detail/KO">Coca-Cola</Link></span>
        </div>
        <div class="stock-tile">
            <span class="stock-icon"><img src="nike.svg"></img></span>
            <span><Link to="/detail/NKE">Nike</Link></span>
        </div>
        <div class="stock-tile">
            <span class="stock-icon"><img src="netflix.svg"></img></span>
            <span><Link to="/detail/NFLX">Netflix</Link></span>
        </div>
        <div class="stock-tile">
            <span class="stock-icon"><img src="ibm.svg"></img></span>
            <span><Link to="/detail/IBM">IBM</Link></span>
        </div>
</div>
    
</>
    );
}
  

  export default Dashboard;