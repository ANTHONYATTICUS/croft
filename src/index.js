import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import LandIndex from "./views/ProfilePage/Sections/index.component"
import "assets/scss/material-kit-pro-react.scss?v=1.3.0";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import ErrorPage from "views/ErrorPage/ErrorPage.jsx";
import Edit from './views/ProfilePage/Sections/edit.component'
var hist = createBrowserHistory();

ReactDOM.render(
  <div>
   
  <Router history={hist}>
    <Switch>
      <Route path='/edit/:id' component={Edit} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route path='/profile-page/index' component={LandIndex} />
      <Route path='/profile-page/edit/:id' component={ Edit } />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>
  </div>,
  document.getElementById("root")
);