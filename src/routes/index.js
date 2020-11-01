import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './home';
import Items from './items';
import ItemDetail from './item-detail';

const Routes = () => {

  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={Items} />
          <Route       path="/items/:id" component={ItemDetail} />
        </Switch>
      </Router>
  );
}

export default Routes;
