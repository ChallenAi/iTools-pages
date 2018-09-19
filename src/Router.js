import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import App from 'pages/App';
import NotFound from 'pages/NotFound';

const Router = props => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/app" component={App}/>
        <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
  );

export default Router;


