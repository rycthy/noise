import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import Main from '../components/Main';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Main} exact={true}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);     

export default AppRouter;