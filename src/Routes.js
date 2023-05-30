import React, { useEffect, useState, useContext } from 'react';
import { Route, Switch, useHistory, Link } from 'react-router-dom';
import About from './About';
import Home from './home';
import fakeNavbar from './FakeNavbar'
import GetStarted from './GetStarted';
import Navbar from './navbar';

const Routes = () => {

  return (
    <div>
      {/* <fakeNavbar /> */}
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/start/:srh" component={GetStarted} />

      </Switch>
    </div>
  );

}

export default Routes;
