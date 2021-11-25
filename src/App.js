import './App.css';
import {Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
      <section class="header">
        <nav>
            
         <a href="index.html"> <img src="sss.svg" alt="logo"/> </a>
            <div class="nav-links" id="navlinks">
                <i class="fa fa-times" onclick="hidemenu()"></i>
            <ul>
                <li><Link to="/">Home</Link></li>
                
                <li><Link to ="/dashboard">Dashboard</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
          
            </div>
          
            <i class="fa fa-bars" onclick="showmenu()"></i>
        </nav>
        <div class="text-box">
            <h1>Stock Portfolio Optimization</h1>
            <Link to="/dashboard" class="hero-btn">Learn More</Link>
        </div>
         
    </section>
    </div>
  );
}

export default App;

