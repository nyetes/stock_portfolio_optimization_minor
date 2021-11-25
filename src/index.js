import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import Portfolio from './pages/Portfolio';
import Optimize from './pages/Optimize';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/"><App/></Route>
        <Route  path="/dashboard" ><Dashboard/></Route>
        <Route path="/detail/:stock" ><Detail/></Route>
        <Route path="/portfolio" exact><Portfolio/></Route>
        <Route path="/optimize" exact><Optimize/></Route>
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
