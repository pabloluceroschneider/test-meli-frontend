import React, { useReducer }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AppContext, reducer, initialState} from '../store';
import Home from './home';
import Items from './items';
import ItemDetail from './item-detail';

const Routes = () => {
	const [ store, dispatch ] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{store, dispatch}}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={Items} />
          <Route       path="/items/:id" component={ItemDetail} />
        </Switch>
      </Router>
    </AppContext.Provider>

  );
}

export default Routes;
