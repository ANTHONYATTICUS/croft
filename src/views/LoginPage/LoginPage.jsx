import React from "react";
import axios from "axios";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";
import image from "assets/img/garden_north-perspective_2017.jpg";
import TextField from '@material-ui/core/TextField';


class LoginPage extends React.Component {

  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleChangeUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {username, password} = this.state;
    axios.post("http://localhost:8080/auth/login", {
      username: username,
      password: password
    })
      .then(function (response) {
        if (response.data.redirect === '/profile-page') {
          window.location = "/profile-page"
          console.log("im here");
      } else if (response.data.redirect === '/login-page'){
        
          window.location = "/login-page"
          console.log("meeeeeeh");
      }
    })
      .catch(function(error) {
        window.location = "/login-page"
   
      })
      
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    console.log(this.state)
    const { classes } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Croft"
          links={<HeaderLinks dropdownHoverColor="info" />}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form className={classes.form}>
                    <CardHeader
                      color="info"
                      signup
                      className={classes.cardHeader}
                    >
                      <h4 className={classes.cardTitle}>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}
                        >
                         <i className={classes.socials + " fab fa-instagram"} />
                        </Button>
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-facebook" />
                        </Button>
                      </div>
                    </CardHeader>
                    <p
                      className={`${classes.description} ${classes.textCenter}`}
                    >
                      Or Be Vinatge
                    </p>
                    <CardBody signup>
                      <TextField
                        id="standard-name"
                        label="email"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChangeUsername}
                        margin="normal"
                      />
                      <TextField
                        id="password"
                        label="password"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChangePassword}
                        margin="normal"
                      />
                    </CardBody>
                    <div className={classes.textCenter}>
                      <Button simple color="primary" size="lg" onClick={this.handleSubmit}>
                        Get started
                      </Button>
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer
            className={classes.footer}
            content={
              <div>
                <div className={classes.left}>
                  <List className={classes.list}>

                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="/"
                        className={classes.block}
                      >
                        About us
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="/"
                        className={classes.block}
                      >
                        Blog
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="/"
                        className={classes.block}
                      >
                        Licenses
                      </a>
                    </ListItem>
                  </List>
                </div>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);