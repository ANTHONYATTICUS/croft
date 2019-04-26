import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import Index from "./views/ProfilePage/Sections/index.component"
import Create from "./views/ProfilePage/Sections/create.component"
import Edit from "./views/ProfilePage/Sections/edit.component"
import "assets/scss/material-kit-pro-react.scss?v=1.3.0";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

// pages for this product

import BlogPostPage from "views/BlogPostPage/BlogPostPage.jsx";
// import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.jsx";
// import ComponentsPage from "views/ComponentsPage/ComponentsPage.jsx";

import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
// import Header from "./components/Header/Header.jsx";

import ProfilePage from "views/ProfilePage/ProfilePage.jsx";

// import SectionsPage from "views/SectionsPage/SectionsPage.jsx";

import SignupPage from "views/SignupPage/SignupPage.jsx";
import ErrorPage from "views/ErrorPage/ErrorPage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <div>
   {/* <Header
          absolute
          color="transparent"
          brand="Croft"
          // links={<HeaderLinks dropdownHoverColor="info" />}
        /> */}
  <Router history={hist}>
    <Switch>

      <Route path="/blog-post" component={BlogPostPage} />
      {/* <Route path="/blog-posts" component={BlogPostsPage} /> */}
      {/* <Route path="/components" component={ComponentsPage} /> */}
      <Route path="/login-page" component={LoginPage} />
      <Route path="/profile-page" component={ProfilePage} />
      {/* <Route path="/sections" component={SectionsPage} /> */}
      <Route path="/signup" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route exact path='/create' component={Create} />
      <Route path='/edit/:id' component={Edit} />
      <Route path='/index' component={Index} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>
  </div>,
  document.getElementById("root")
);