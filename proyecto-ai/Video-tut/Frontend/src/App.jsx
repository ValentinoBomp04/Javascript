import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import About from './components/About'
import Users from './components/Users'
import Navbar from './components/Navbar'
import Records from './components/Records'

function Conversor() {
  return (
    <Router>
      <Navbar/>
      <div className="container ">
        <Switch>
          <Route path="/About" component={About}/>
          <Route path="/Users" component={Users}/>
          <Route path="/Records" component={Records}/>
        </Switch>
      </div>

    </Router>
  );
}

export default Conversor;
