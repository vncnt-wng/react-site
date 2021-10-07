import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"


class ProjectCard extends Component {
  render() {
    return (
      <Grid item xs={12} lg={6}>
        <Card>
            <Typography>1</Typography>
        </Card>
      </Grid>
    )
  }
}

export default ProjectCard


