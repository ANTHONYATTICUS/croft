import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";
import LandIndex from "../../ProfilePage/Sections/index.component"

function SectionBlogs({ ...props }) {
  return (
    <div>
      <LandIndex />
    </div>
  );
}

export default withStyles(blogsStyle)(SectionBlogs);
