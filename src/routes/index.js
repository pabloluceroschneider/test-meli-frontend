import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './home';
import Items from './items';

const Routes = () => {

  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={Items} />
        </Switch>
      </Router>
  );
}

export default Routes;
