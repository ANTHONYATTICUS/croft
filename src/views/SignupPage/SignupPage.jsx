import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import axios from 'axios';
import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.jsx";

import image from "assets/img/garden_north-perspective_2017.jpg";

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null,
      checked: [1]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {username, password} = this.state;
    axios.post("http://localhost:8080/auth/signup", {
      username: username,
      password: password
    })
    .then(response => {
      console.log(response)
      if (!response.data.errmsg) {
        console.log('youre good')
        this.setState({
          redirectTo: '/login'
        })
      } else {
        console.log('duplicate')
      }
    })
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header absolute color="transparent" brand="Croft" links={<HeaderLinks dropdownHoverColor="rose" />}{...rest} />
        <div className={classes.pageHeader} style={{ backgroundImage: "url(" + image + ")", backgroundSize: "cover", backgroundPosition: "top center" }}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}>Register</h2>
                  <CardBody>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={5} md={5}>
                        <div className={classes.textCenter}>
                          <Button justIcon round color="twitter">
                            <i className={classes.socials + "fab fa-twitter"} />
                          </Button>
                          {` `}
                          <Button justIcon round color="instagram">
                            <i className={classes.socials + " fab fa-instagram"} />
                          </Button>
                          {` `}
                          <Button justIcon round color="facebook">
                            <i className={classes.socials + " fab fa-facebook-f"} /></Button>
                          {` `}
                          <h4 className={classes.socialTitle}>or be vintage</h4>
                        </div>

                        <form className={classes.form}>
                          {/* <CustomInput formControlProps={{fullWidth: true, className: classes.customFormControlClasses}}
                           inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Face
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "First Name..."
                            }}
                          /> */}
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  type="text"
                                  name="username"
                                  value={this.state.username}
                                  onChange={this.handleChange}
                                  className={classes.inputAdornment}
                                >
                                  <Email className={classes.inputAdornmentIcon} />
                                </InputAdornment>
                              ),
                              placeholder: "Email..."
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  type="password"
                                  name="password"
                                  value={this.state.password}
                                  onChange={this.handleChange}
                                  className={classes.inputAdornment}
                                >
                                  <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
                                </InputAdornment>
                              ),
                              placeholder: "Password..."
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  type="password"
                                  name="confirmPassword"
                                  value={this.state.confirmPassword}
                                  onChange={this.handleChange}
                                  className={classes.inputAdornment}
                                >
                                  <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
                                </InputAdornment>
                              ),
                              placeholder: "Confirm Password..."
                            }}
                          />
                          <FormControlLabel
                            classes={{
                              label: classes.label
                            }}
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => this.handleToggle(1)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={
                                  <Check className={classes.uncheckedIcon} />
                                }
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                                checked={
                                  this.state.checked.indexOf(1) !== -1
                                    ? true
                                    : false
                                }
                              />
                            }
                            label={
                              <span>
                                I agree to the{" "}
                                <a href="#pablo">terms and conditions</a>.
                              </span>
                            }
                          />
                          <div className={classes.textCenter}>
                            <Button onClick={this.handleSubmit} round color="info">
                              Get started
                            </Button>
                          </div>
                        </form>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer
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

export default withStyles(signupPageStyle)(SignupPage);



// import React from "react";
// import { Redirect } from 'react-router-dom';
// // @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Checkbox from "@material-ui/core/Checkbox";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Icon from "@material-ui/core/Icon";
// // @material-ui/icons
// import Email from "@material-ui/icons/Email";
// import Check from "@material-ui/icons/Check";
// // core components
// import Header from "components/Header/Header.jsx";
// import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import Footer from "components/Footer/Footer.jsx";
// import GridContainer from "components/Grid/GridContainer.jsx";
// import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
// import Card from "components/Card/Card.jsx";
// import CardBody from "components/Card/CardBody.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
// import axios from "axios";
// import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.jsx";
// import image from "assets/img/garden_north-perspective_2017.jpg";

// class SignupPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       confirmPassword: '',
//       redirectTo: null,
//       checked: [1]
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleToggle = this.handleToggle.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     axios
//     .post("http://localhost:8080/auth/signup", {
//     username: this.state.username,
//     password: this.state.password
//     })
//     .then(function(response) {
//     console.log(response);
//     });
//     }
//   handleToggle(value) {
//     const { checked } = this.state;
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }
//     this.setState({
//       checked: newChecked
//     });
//   }
//   componentDidMount() {
//     window.scrollTo(0, 0);
//     document.body.scrollTop = 0;
//   }
//   render() {
//     const { classes, ...rest } = this.props;
//     if (this.state.redirectTo) {
// 			return <Redirect to='/profile-page'/>
// 		}
//     return (
//       <div>
//         <Header absolute color="transparent" brand="Croft" links={<HeaderLinks dropdownHoverColor="rose" />}{...rest} />
//         <div className={classes.pageHeader} style={{ backgroundImage: "url(" + image + ")", backgroundSize: "cover", backgroundPosition: "top center" }}>
//           <div className={classes.container}>
//             <GridContainer justify="center">
//               <GridItem xs={12} sm={10} md={10}>
//                 <Card className={classes.cardSignup}>
//                   <h2 className={classes.cardTitle}>Register</h2>
//                   <CardBody>
//                     <GridContainer justify="center">
//                       <GridItem xs={12} sm={5} md={5}>
//                         <div className={classes.textCenter}>
//                           <Button justIcon round color="twitter">
//                             <i className={classes.socials + "fab fa-twitter"} />
//                           </Button>
//                           {` `}
//                           <Button justIcon round color="instagram">
//                             <i className={classes.socials + " fab fa-instagram"} />
//                           </Button>
//                           {` `}
//                           <Button justIcon round color="facebook">
//                             <i className={classes.socials + " fab fa-facebook-f"} /></Button>
//                           {` `}
//                           <h4 className={classes.socialTitle}>or be vintage</h4>
//                         </div>

//                         <form className={classes.form}>
//                           {/* <CustomInput formControlProps={{fullWidth: true, className: classes.customFormControlClasses}}
//                            inputProps={{
//                               startAdornment: (
//                                 <InputAdornment
//                                   position="start"
//                                   className={classes.inputAdornment}
//                                 >
//                                   <Face
//                                     className={classes.inputAdornmentIcon}
//                                   />
//                                 </InputAdornment>
//                               ),
//                               placeholder: "First Name..."
//                             }}
//                           /> */}
//                           <CustomInput
//                             formControlProps={{
//                               fullWidth: true,
//                               className: classes.customFormControlClasses
//                             }}
//                             inputProps={{
//                               startAdornment: (
//                                 <InputAdornment
//                                   position="start"
//                                   type="text"
//                                   name="username"
//                                   value={this.state.username}
//                                   onChange={this.handleChange}
//                                   className={classes.inputAdornment}
//                                 >
//                                   <Email className={classes.inputAdornmentIcon} />
//                                 </InputAdornment>
//                               ),
//                               placeholder: "Email..."
//                             }}
//                           />
//                           <CustomInput
//                             formControlProps={{
//                               fullWidth: true,
//                               className: classes.customFormControlClasses
//                             }}
//                             inputProps={{
//                               startAdornment: (
//                                 <InputAdornment
//                                   position="start"
//                                   type="password"
//                                   name="password"
//                                   value={this.state.password}
//                                   onChange={this.handleChange}
//                                   className={classes.inputAdornment}
//                                 >
//                                   <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
//                                 </InputAdornment>
//                               ),
//                               placeholder: "Password..."
//                             }}
//                           />
//                           <CustomInput
//                             formControlProps={{
//                               fullWidth: true,
//                               className: classes.customFormControlClasses
//                             }}
//                             inputProps={{
//                               startAdornment: (
//                                 <InputAdornment
//                                   position="start"
//                                   type="password"
//                                   name="confirmPassword"
//                                   value={this.state.confirmPassword}
//                                   onChange={this.handleChange}
//                                   className={classes.inputAdornment}
//                                 >
//                                   <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
//                                 </InputAdornment>
//                               ),
//                               placeholder: "Confirm Password..."
//                             }}
//                           />
//                           <FormControlLabel
//                             classes={{
//                               label: classes.label
//                             }}
//                             control={
//                               <Checkbox
//                                 tabIndex={-1}
//                                 onClick={() => this.handleToggle(1)}
//                                 checkedIcon={
//                                   <Check className={classes.checkedIcon} />
//                                 }
//                                 icon={
//                                   <Check className={classes.uncheckedIcon} />
//                                 }
//                                 classes={{
//                                   checked: classes.checked,
//                                   root: classes.checkRoot
//                                 }}
//                                 checked={
//                                   this.state.checked.indexOf(1) !== -1
//                                     ? true
//                                     : false
//                                 }
//                               />
//                             }
//                             label={
//                               <span>
//                                 I agree to the{" "}
//                                 <a href="#pablo">terms and conditions</a>.
//                               </span>
//                             }
//                           />
//                           <div className={classes.textCenter}>
//                             <Button onClick={this.handleSubmit} round color="info">
//                               Get started
//                             </Button>
//                           </div>
//                         </form>
//                       </GridItem>
//                     </GridContainer>
//                   </CardBody>
//                 </Card>
//               </GridItem>
//             </GridContainer>
//           </div>
//           <Footer
//             content={
//               <div>
//                 <div className={classes.left}>
//                   <List className={classes.list}>
//                     <ListItem className={classes.inlineBlock}>
//                       <a
//                         href="/"
//                         className={classes.block}
//                       >
//                         About us
//                       </a>
//                     </ListItem>
//                     <ListItem className={classes.inlineBlock}>
//                       <a
//                         href="/"
//                         className={classes.block}
//                       >
//                         Blog
//                       </a>
//                     </ListItem>
//                     <ListItem className={classes.inlineBlock}>
//                       <a
//                         href="/"
//                         className={classes.block}
//                       >
//                         Licenses
//                       </a>
//                     </ListItem>
//                   </List>
//                 </div>

//               </div>
//             }
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default withStyles(signupPageStyle)(SignupPage);

