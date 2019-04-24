import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Info from "components/Typography/Info.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import Button from "components/CustomButtons/Button.jsx";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import office2 from "assets/img/office2.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog7 from "assets/img/examples/blog7.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import bg5 from "assets/img/bg5.jpg";

function SectionBlogs({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
     
      {/* Blogs 2 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={10}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <h2 className={classes.title}>Latest Blogposts 2</h2>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={cardBlog4} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Autodesk looks to future of 3D printing with Project
                          Escher
                        </a>
                      </h4>
                      <p className={classes.description}>
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          {" "}
                          Read More{" "}
                        </a>
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={blog5} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${blog5})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Success>
                        <h6 className={classes.cardCategory}>STARTUPS</h6>
                      </Success>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Lyft launching cross-platform service this week
                        </a>
                      </h4>
                      <p className={classes.description}>
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          {" "}
                          Read More{" "}
                        </a>
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={blog7} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${blog7})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Danger>
                        <h6 className={classes.cardCategory}>
                          <TrendingUp />
                          ENTERPRISE
                        </h6>
                      </Danger>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          6 insights into the French Fashion landscape
                        </a>
                      </h4>
                      <p className={classes.description}>
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          {" "}
                          Read More{" "}
                        </a>
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 2 END */}
      
    </div>
  );
}

export default withStyles(blogsStyle)(SectionBlogs);
