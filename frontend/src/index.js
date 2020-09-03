/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.2.0";
import "assets/css/demo.css";

import PrivateRoute from "layouts/PrivateRoute";
import Login from "views/login";
import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import UserPage from "views/UserPage.jsx";
import rootReducer from './redux/reducers/index'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={UserPage} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/user-page" component={UserPage} />
      <PrivateRoute path="/extended-tables" component={TableList} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
