import React from 'react';
import {Link} from 'react-router-dom';


function Header() {
    return(
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
    );
}
  

  export default Header;