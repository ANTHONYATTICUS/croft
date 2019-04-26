/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import Button from "components/CustomButtons/Button.jsx";
import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";



const HeaderLinks = props => {
  const { classes } = props;
  if (props.loggedIn) {
    return (
      <List className={classes.list + " " + classes.mlAuto}>
          <Link to="/"> Home </Link>
          <Button color={window.innerWidth < 960 ? "info" : "white"} round>
            <Link to="/">Logout</Link>
          </Button>
      </List>
    )
  } else {
    return (
      <List className={classes.list + " " + classes.mlAuto}>
          <Link to="/login-page" className={classes.dropdownLink}> Login </Link>
          <Button  color={window.innerWidth < 960 ? "info" : "white"} round> 
            <Link to="/signup">Sign Up</Link> 
          </Button>
      </List>
    )
  }
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};

export default withStyles(headerLinksStyle)(HeaderLinks);
