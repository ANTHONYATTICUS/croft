/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons

import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";


import Parallax from "components/Parallax/Parallax.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";

import CustomInput from "components/CustomInput/CustomInput.jsx"
import christian from "assets/img/faces/christian.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

class ProfilePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Croft"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "info"
          }}
          {...rest}
        />
        <Parallax
          image={require("assets/img/land4lease.jpg")}
          filter="dark"
          className={classes.parallax}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={christian} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
                 
                  </div>
                </div>
              
              </GridItem>
            </GridContainer>
            <div
              className={classNames(classes.description, classes.textCenter)}
            >
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div>
            {/* <div>
              
              <CustomInput />
              zip code
            </div>
            <div>
            sq footage
              <CustomInput />
            </div>
            <div>
              $ per month
              <CustomInput />
            </div> */}
            {/* <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Work",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={7}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Latest Collections</h4>
                          <GridContainer className={classes.collections}>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + mariyaGeorgieva + ")"
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="warning"
                                    className={classes.badge}
                                  >
                                    Spring 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      Stilleto
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + clemOnojeghuo + ")"
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge color="info" className={classes.badge}>
                                    Spring 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      High Heels
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + oluEletu + ")"
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    Summer 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      Flats
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + darrenColeshill + ")"
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="success"
                                    className={classes.badge}
                                  >
                                    Winter 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      Men's Sneakers
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={2}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Stats</h4>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>60</b> Products
                            </li>
                            <li>
                              <b>4</b> Collections
                            </li>
                            <li>
                              <b>331</b> Influencers
                            </li>
                            <li>
                              <b>1.2K</b> Likes
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            French luxury footwear and fashion. The footwear has
                            incorporated shiny, red-lacquered soles that have
                            become his signature.
                          </p>
                          <hr />
                          <h4 className={classes.title}>Focus</h4>
                          <Badge color="primary">Footwear</Badge>
                          <Badge color="rose">Luxury</Badge>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Connections",
                    tabIcon: People,
                    tabContent: (
                      <div>
                        <GridContainer justify="center">
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={avatar} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: "url(" + avatar + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Gigi Hadid
                                    </h4>
                                    <Muted>
                                      <h6>MODEL</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Don't be scared of the truth because we
                                      need to restart the human foundation in
                                      truth...
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={marc} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: "url(" + marc + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Marc Jacobs
                                    </h4>
                                    <Muted>
                                      <h6>DESIGNER</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Don't be scared of the truth because we
                                      need to restart the human foundation in
                                      truth...
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={kendall} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: "url(" + kendall + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Kendall Jenner
                                    </h4>
                                    <Muted>
                                      <h6>MODEL</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      I love you like Kanye loves Kanye. Don't
                                      be scared of the truth.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={cardProfile2Square} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage:
                                          "url(" + cardProfile2Square + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      George West
                                    </h4>
                                    <Muted>
                                      <h6>MODEL/DJ</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      I love you like Kanye loves Kanye.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </div>
                    )
                  },
                  {
                    tabButton: "Media",
                    tabIcon: Camera,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src={mariyaGeorgieva}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={clemOnojegaw}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src={clemOnojeghuo}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={oluEletu}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={cynthiaDelRio}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    )
                  }
                ]}
              />
            </div> */}
            <Clearfix />
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a href="https://www.creative-tim.com">Creative Tim</a> for a
                better web.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
