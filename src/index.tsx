import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from 'pages/Home';
import Reports from 'pages/Reports';

import 'react-toastify/dist/ReactToastify.css';
import 'styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/reports">
          <Reports />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
