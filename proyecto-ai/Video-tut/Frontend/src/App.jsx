import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import About from './components/About'
import Users from './components/Users'
import Navbar from './components/Navbar'
function Conversor() {
  return (
    <Router>
      <Navbar/>
      <div className="container p-5">
        <Switch>
          <Route path="/About" component={About}/>
          <Route path="/Users" component={Users}/>   
        </Switch>
      </div>

    </Router>
  );
}

export default Conversor;
